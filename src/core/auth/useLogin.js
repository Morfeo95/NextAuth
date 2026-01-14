import { useState } from "react";
import { signIn } from "next-auth/react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginWithCredentials = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });

    if (result?.error) {
      setError("Invalid credentials");
      setLoading(false);
      return false;
    }

    return true;
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/" });
  };

  return {
    loading,
    error,
    loginWithCredentials,
    loginWithGoogle,
  };
}
