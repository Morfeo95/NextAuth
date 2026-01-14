"use client";

import { useState } from "react";
import AuthLayout from "../../../components/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
        // Add your real sending logic here

    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setEmail("");
  };

  return (
    <AuthLayout>
      <h1>Forgot your password?</h1>
      <p>
        please enter your email address. You will receive a link to create a new
        password via email.
      </p>
      <form onSubmit={handleSubmit} >
        <label>
          email
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </label>
        <button
          aria-label="Send instructions"
          type="submit"
          disabled={sent}
        >
          {sent ? "Sent!" : "Send instructions"}
        </button>
      </form>
      {sent && (
        <div>
          if an account with that email exists, we´ll send you an email with instructions.
        </div>
      )}
    </AuthLayout>
  );
}