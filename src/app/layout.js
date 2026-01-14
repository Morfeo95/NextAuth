import Providers from "./Providers";
import "./globals.css";

export const metadata = {
  title: "NextAuth Starter",
  description: "Authentication core for Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
