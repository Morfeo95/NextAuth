"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import AuthLayout from "./AuthLayout";
import { useRegister } from "@/core/auth/useRegister";
import { validateRegister } from "@/core/auth/validators";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const { loading, error, register, registerWithGoogle } = useRegister();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateRegister(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const success = await register(form);

    if (success) {
      router.push("/auth/login");
    }
  };

  return (
    <AuthLayout>
      <h2>
        Create account
      </h2>

      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}

        <div>
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

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
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>

      <div>or</div>

      <button onClick={registerWithGoogle} disabled={loading}>
        <FcGoogle /> Continue with Google
      </button>

      <p>
        Already have an account?{" "}
        <Link href="/auth/login">Sign in</Link>
      </p>
    </AuthLayout>
  );
}
