import styled from "styled-components";

export const SplashContainer = styled("div")(() => ({
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  width: "400px",
  backgroundColor: "#143F34",
//   border: "1px solid #fff",
  fontFamily: "Open Sans",
  h1: {
    color: "#ff",
    fontSize: "36px",
  },
  h2: {
    color: "#fff",
    fontSize: "17px",
    marginTop: "24px",
  },

  "@media (max-width: 599px)": {
    width: "100vw",
  },
}));

export const BCP_icon = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px",
  img: {
    height: "100%",
    width: "100%",
  },
}));

export const SwipableContainer = styled("div")(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "50px",
  width: "270px",
  backgroundColor: "#fff",
  borderRadius: "31px",
  marginTop: "100px",
  p: {
    color: "#000",
    marginLeft: "60px",
  },
  ".icon_box": {
    position: "absolute",
    right: "10px",
    height: "100%",
    width: "40px",
    border: "1px solid red",
  },
}));

export const CallIcon = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "36px",
  width: "36px",
  backgroundColor: "#143F34",
  borderRadius: "50%",
}));
