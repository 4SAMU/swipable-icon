import styled from "styled-components";
export const PageContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const InputFieldsWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "300px",
  border: "1px solid #fff",
  marginTop: " 20px",
  background: "none",
  borderRadius: "4px",
}));

export const InputFields = styled("input")(() => ({
  height: "100%",
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "16px",
  padding: "0 10px",
  background: "none",
  color: "#fff",
}));

export const Button = styled("button")(() => ({
  height: "40px",
  width: "300px",
  border: "none",
  outline: "none",
  fontSize: "16px",
  padding: "0 10px",
  background: "#fff",
  color: "#000",

  borderRadius: "4px",
  marginTop: "10px",
  cursor: "pointer",
}));
