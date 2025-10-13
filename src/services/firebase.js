const BASE = import.meta.env.PUBLIC_FIREBASE_STORAGE_URL;

export function getImage(path, keepToken) {
  // Normaliza: quita barras iniciales
  const clean = path.replace(/^\/+/, "");
  // Codifica cada segmento y une con %2F (codificación del slash)
  const encoded = clean.split("/").map(encodeURIComponent).join("%2F");
  // Construye URL (si tu bucket es público no necesitas token)
  const tokenPart = keepToken ? `&token=${keepToken}` : "";
  return `${BASE}/o/${encoded}?alt=media${tokenPart}`;
}
