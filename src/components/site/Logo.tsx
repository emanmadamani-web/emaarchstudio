import { cn } from '@/lib/utils'
import { cdn, cdnSrcSet } from '@/lib/image'

/** Intrinsic size of /img/ema-logo.png (transparent cut-out of the studio logo). */
const LOGO_W = 1048
const LOGO_H = 589

/**
 * The EMA Architecture Studio logo, rendered from the studio's own artwork.
 * Size it with a width or height class; the aspect ratio is preserved.
 */
export function Logo({
  className,
  sizes = '320px',
  priority = false,
  alt = 'EMA Architecture Studio',
}: {
  className?: string
  /** `sizes` hint for the responsive srcset. */
  sizes?: string
  /** Load eagerly with high priority (above-the-fold usage). */
  priority?: boolean
  alt?: string
}) {
  return (
    <img
      src={cdn('ema-logo.png', 640, 90)}
      srcSet={cdnSrcSet('ema-logo.png', [160, 240, 320, 480, 640, 1048], 90)}
      sizes={sizes}
      width={LOGO_W}
      height={LOGO_H}
      alt={alt}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      draggable={false}
      className={cn('block h-auto select-none', className)}
    />
  )
}
