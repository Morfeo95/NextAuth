export default function AuthLayout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${className}`}>
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}