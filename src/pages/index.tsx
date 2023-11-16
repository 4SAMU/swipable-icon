import Head from "next/head";
import SplashScreen from "@/components/splashScreen";

export default function Home() {
  return (
    <>
      <Head>
        <title>Better Call Paul</title>
        <meta name="description" content="better call paul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SplashScreen />
      </main>
    </>
  );
}
