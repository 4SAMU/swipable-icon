import {
  Button,
  InputFields,
  InputFieldsWrapper,
  PageContainer,
} from "@/styles/newPage.styles";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmitData = async (e: any) => {
    e.preventDefault();
    const { name, password } = formData;
    if (name === "" || password === "") {
      alert("please fill all the fields");
    } else {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PageContainer>
      <InputFieldsWrapper>
        <InputFields
          placeholder="name"
          value={formData.name}
          onChange={(e: any) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </InputFieldsWrapper>

      <InputFieldsWrapper>
        <InputFields
          placeholder="password"
          value={formData.password}
          onChange={(e: any) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </InputFieldsWrapper>

      <Button onClick={handleSubmitData}>submit</Button>
    </PageContainer>
  );
};

export default Login;
