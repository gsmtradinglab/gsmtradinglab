import LoginForm from "@/components/LoginForm";
import BrandLogo from "@/components/BrandLogo";

export default function Login() {
  return (
    <main className="mx-auto max-w-xl px-4 py-14">
      <div className="mb-8 flex justify-center"><BrandLogo variant="mark" href="/" priority /></div>
      <h1 className="text-center text-4xl font-black">Login</h1>
      <p className="mt-3 text-center text-slate-400">Access your risk-first trading dashboard.</p>
      <LoginForm />
    </main>
  );
}
