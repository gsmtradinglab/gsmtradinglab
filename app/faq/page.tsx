const faqs = [
  ["What is GSM Trading Lab?", "GSM Trading Lab is a crypto trading education platform focused on practical learning, market analysis, demo practice, and risk management."],
  ["Who is Mr. GSM?", "Mr. GSM is a self-made trader and founder of GSM Trading Lab who teaches from practical market experience."],
  ["Is profit guaranteed?", "No. Trading involves risk. GSM Trading Lab provides education, analysis, support, and signals, but profit is never guaranteed."],
  ["What is the online course fee?", "The online crypto trading course fee is $100."],
  ["What is the physical course fee?", "The physical crypto trading course fee is $150."],
  ["Do I get lifetime access?", "Course access is designed as lifetime learning support after admin approval and payment verification."],
  ["Are signals free or paid?", "Some signals are public/free, while premium signals require approved course or premium access."],
  ["How can I pay?", "Manual payment methods can include cash, Easypaisa, JazzCash, bank transfer, or crypto/USDT, depending on admin settings."],
];
export default function FAQPage(){ return <main className="mx-auto max-w-4xl px-4 py-10"><h1 className="text-3xl font-black">FAQ</h1><div className="mt-8 space-y-4">{faqs.map(([q,a])=><div className="card" key={q}><h2 className="font-bold text-green-300">{q}</h2><p className="mt-2 text-slate-300">{a}</p></div>)}</div></main> }
