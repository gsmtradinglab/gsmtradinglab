import BrandLogo from "@/components/BrandLogo";

export default function Loading() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4">
      <div className="text-center">
        <BrandLogo variant="hero" href={undefined} priority />
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-green-300">Loading GSM Trading Lab...</p>
      </div>
    </main>
  );
}
