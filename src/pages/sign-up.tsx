import {
  Button,
  InputFields,
  InputFieldsWrapper,
  PageContainer,
} from "@/styles/newPage.styles";
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmitData = async (e: any) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (name === "" || email === "" || password === "") {
      alert("please fill all the fields");
    } else {
      try {
        const res = await fetch("/api/auth/signUp", {
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
          type="text"
          value={formData.name}
          onChange={(e: any) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </InputFieldsWrapper>

      <InputFieldsWrapper>
        <InputFields
          placeholder="email"
          type="email"
          value={formData.email}
          onChange={(e: any) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </InputFieldsWrapper>

      <InputFieldsWrapper>
        <InputFields
          placeholder="password"
          type="password"
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

export default SignUp;
