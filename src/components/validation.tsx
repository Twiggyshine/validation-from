export const fieldСheck = (value: string) => {
  if (!value) return "Заполните поле ввода";
  return null;
};


export const validateEmail = (value: string) => {
    if (!value) return "Введите email";
    if (!value.includes("@")) return "Email должен содержать @";
    return null;
  };


 export const validatePassword = (value: string) => (value.length < 6 ? 'Пароль должен быть не менее 6 символов' : null)

