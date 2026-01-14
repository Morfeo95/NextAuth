export function validateLogin({ email, password }) {
  const errors = {};

  if (!email?.trim()) {
    errors.email = "Email is required";
  }

  if (!password?.trim()) {
    errors.password = "Password is required";
  }

  return errors;
}

export function validateRegister({ name, email, password }) {
  const errors = {};

  if (!name?.trim()) {
    errors.name = "Name is required";
  }

  if (!email?.trim()) {
    errors.email = "Email is required";
  }

  if (!password?.trim()) {
    errors.password = "Password is required";
  }

  if (password && password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}
