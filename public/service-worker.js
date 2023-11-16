let deferredPrompt = null;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("bcp-v1").then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Dispatch a custom event to the main application to show the install button
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: "SHOW_INSTALL_BUTTON" });
    });
  });
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "INSTALL_APP" && deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      // Reset the deferredPrompt variable
      deferredPrompt = null;

      // Dispatch a custom event to the main application to hide the install button
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: "HIDE_INSTALL_BUTTON" });
        });
      });
    });
  }
});
