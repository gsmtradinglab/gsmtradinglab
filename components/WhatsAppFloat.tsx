export default function WhatsAppFloat() {
  const channel = "https://whatsapp.com/channel/0029Vb7BRlOKQuJHPFUykb0g";
  return (
    <a
      href={channel}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full border border-green-400/40 bg-green-500 px-5 py-3 text-sm font-black text-slate-950 shadow-2xl shadow-green-500/20 hover:bg-green-400"
      aria-label="Join GSM Trading Lab WhatsApp Channel"
    >
      Join WhatsApp
    </a>
  );
}
