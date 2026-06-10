import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 right-6 z-[150] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 hover:bg-[#1ebe5a] transition-all duration-300"
    >
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366]/50 animate-ping" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
