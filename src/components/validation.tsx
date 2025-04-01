
// общая проверка на ввод данных
export const fieldCheck = (value: string) => {
  if (!value) return "Заполните поле ввода";
  return null;
};
// проверка на поле email
export const validateEmail = (value: string) => {
    if (!value.includes("@")) return "Email должен содержать @";
    return null;
  };

// проверка на пароль
 export const validatePassword = (value: string) => (value.length < 6 ? 'Пароль должен быть не менее 6 символов' : null)

//  соответствие пароля + проверка на ввод данных
 export const validatePasswordConfirm = (value: string, password: string) => {
  const emptyError = fieldCheck(value);
  if (emptyError) return emptyError;
  
  return value !== password ? 'Пароли не совпадают' : null;
};
