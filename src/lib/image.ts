/**
 * Build a Netlify Image CDN URL for an asset in /public/img.
 * Originals are large PNGs from the generation step; never reference them directly.
 */
export function cdn(file: string, width: number, quality = 78) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=${quality}`
}

export function cdnSrcSet(file: string, widths: number[], quality = 78) {
  return widths.map((w) => `${cdn(file, w, quality)} ${w}w`).join(', ')
}
