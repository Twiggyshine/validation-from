// import { useState } from 'react';
import { useForm } from "@mantine/form";
import { TextInput,Checkbox, Button, Box, Group, } from "@mantine/core";
import { FormValues } from "./types";
import { validateEmail } from "./validateEmail";
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import './form.css'




const SignInForm = () => {
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
    },
    validate: {
      email: validateEmail // используем импортированную функцию
    }
  });



  return (
    <Box className="signin-form-container" >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name" 
          placeholder="Your name"
          {...form.getInputProps("name")}
          classNames={{
            input: 'signin-input',
            label: 'signin-label'
          }}
        />
        
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          mt="md"
          classNames={{
            input: 'signin-input',
            label: 'signin-label'
          }}
        />
        
        <Group justify="flex-end" mt="md" className="signin-button-group">
          <Button type="submit" className="signin-button">
            Submit
          </Button>
          <Checkbox
      defaultChecked
      label="I agree to sell my privacy"
    />
        </Group>
      </form>
    </Box>
  );
};

export default SignInForm;