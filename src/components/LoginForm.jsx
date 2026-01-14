"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "@/core/auth/useLogin";
import { validateLogin } from "@/core/auth/validators";
import AuthLayout from "./AuthLayout";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const { loading, error, loginWithCredentials, loginWithGoogle } = useLogin();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    await loginWithCredentials(form);
  };

  return (
    <AuthLayout>
      <h2>
        Sign in
      </h2>

      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p>{errors.password}</p>
          )}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div>or</div>

      <button onClick={loginWithGoogle} disabled={loading}>
        <FcGoogle /> Continue with Google
      </button>

      <div>
        <Link href="/auth/register">Create account</Link>
      </div>
    </AuthLayout>
  );
}
