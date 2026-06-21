export default function AdminPaymentSopPage() {
  return <main className="mx-auto max-w-5xl px-4 py-12">
    <h1 className="text-4xl font-black">Payment Verification SOP</h1>
    <div className="card mt-8 space-y-4 text-slate-300">
      <p><b>Pending:</b> Payment proof received but not confirmed.</p>
      <p><b>Approved:</b> Payment verified. Set paymentStatus to approved and courseAccess to premium.</p>
      <p><b>Rejected:</b> Proof is invalid, duplicate, unclear, or does not match the expected amount.</p>
      <p>Keep payment account details editable from admin settings. Do not hard-code personal payment numbers in code.</p>
    </div>
  </main>
}
