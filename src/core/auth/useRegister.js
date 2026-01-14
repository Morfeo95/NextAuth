import { useState } from "react";
import { signIn } from "next-auth/react";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async ({ name, email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Registration failed");
        return false;
      }

      return true;
    } catch {
      setError("Network error");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const registerWithGoogle = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/" });
  };

  return {
    loading,
    error,
    register,
    registerWithGoogle,
  };
}
