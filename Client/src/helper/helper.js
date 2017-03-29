export function formatPrice(price) {
  return `฿${(price / 1).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}