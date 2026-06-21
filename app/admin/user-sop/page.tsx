export default function AdminUserSopPage() {
  return <main className="mx-auto max-w-5xl px-4 py-12">
    <h1 className="text-4xl font-black">Admin User SOP</h1>
    <ol className="card mt-8 list-decimal space-y-3 pl-8 text-slate-300">
      <li>Verify the user email and WhatsApp number before granting access.</li>
      <li>Keep normal users as role <b>user</b>. Use admin role only for trusted team members.</li>
      <li>Grant premium only after payment verification or founder approval.</li>
      <li>Never edit a user role without recording the reason in admin notes or logs.</li>
      <li>Deactivate suspicious accounts instead of deleting important records immediately.</li>
    </ol>
  </main>
}
