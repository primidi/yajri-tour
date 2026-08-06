export const WHATSAPP_NUMBER = "6282343710016";
export const SITE_NAME = "Yajri Tour Site";

export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
