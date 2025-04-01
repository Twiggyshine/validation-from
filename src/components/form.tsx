import { useState } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Checkbox,
  Button,
  Box,
  Group,
  SegmentedControl,
  PasswordInput,
} from "@mantine/core";
import { FormValues } from "./types";
import {
  validateEmail,
  validatePassword,
  fieldCheck,
  validatePasswordConfirm,
} from "./validation";
import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import "./form.css";



const SignForm = () => {
  const [formType, setFormType] = useState<"signin" | "signup">("signin");

  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validate: {
      email: (value) => fieldCheck(value) || validateEmail(value),
      password: (value) => fieldCheck(value) || validatePassword(value),
      passwordConfirm: (value, values) =>
        validatePasswordConfirm(value, values.password),
    },
  });


  const handleClickLogin = async function(event: React.FormEvent) {
    event.preventDefault()
    try { 
      await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.values.email,
        password: form.values.password,
      }),
    })


  }
  catch (err) {
    console.log(err)
  }
}

  return (
    <Box className="sign-form-container">
      {/* Переключатель формы */}
      <SegmentedControl
        value={formType}
        onChange={(value) => {
          setFormType(value as "signin" | "signup");
          form.reset();
        }}
        data={[
          { label: "Sign In", value: "signin" },
          { label: "Sign Up", value: "signup" },
        ]}
        fullWidth
        mb="md"
        radius="md"
      />

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          classNames={{
            input: "sign-input",
            label: "sign-label",
          }}
          mb="md"
        />
        {/* Подтверждение пароля только для регистрации */}
        
          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...form.getInputProps("password")}
            classNames={{
              input: "sign-input",
              label: "sign-label",
            }}
            mb="md"
          />
      
        {formType === "signup" && (
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          {...form.getInputProps("passwordConfirm")}
          classNames={{
            input: "sign-input",
            label: "sign-label",
          }}
          mb="md"
        />
      )}

        <Group justify="space-between" mt="md" className="auth-button-group">
          <Checkbox defaultChecked label="I agree to sell my privacy" />
          <Button onClick={handleClickLogin} type="submit" className="auth-button" >
            {formType === "signin" ? "Sign In" : "Sign Up"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default SignForm;
