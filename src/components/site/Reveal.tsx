import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'rise' | 'mask'
  id?: string
}

/** Fades/raises content into view once it enters the viewport. */
export function Reveal({
  as: Tag = 'div',
  children,
  className,
  delay = 0,
  variant = 'rise',
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(variant === 'mask' ? 'reveal-mask' : 'reveal', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
