export const validateEmail = (value: string) => {
    if (!value) return "Введите email";
    if (!value.includes("@")) return "Email должен содержать @";
    return null;
  };