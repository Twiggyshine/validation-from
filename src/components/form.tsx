import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Group } from "@mantine/core";
import { FormValues } from "./types";

const SimpleForm = () => {
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
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="your@email.com"
          mt="md"
          {...form.getInputProps("email")}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default SimpleForm;