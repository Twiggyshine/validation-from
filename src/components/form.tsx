import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Group } from "@mantine/core";
import { FormValues } from "./types";
import './form.css'

const SignInForm = () => {
  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Отправленные данные:", values);
  };

  return (
    <Box className="signin-form-container">
      <form onSubmit={form.onSubmit(handleSubmit)}>
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
        </Group>
      </form>
    </Box>
  );
};

export default SignInForm;