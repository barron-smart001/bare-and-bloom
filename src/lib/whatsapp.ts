export const WHATSAPP_NUMBER = "2348125713617";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(product?: string) {
  return product
    ? `Hello Bare & Bloom, I'd like to order: ${product}.`
    : "Hello Bare & Bloom, I'd like to place an order.";
}