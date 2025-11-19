/**
 * CustomCursor Component - Original Style
 * Simple, clean cursor that looks like the original pointer.
 * No animations, just a clean arrow pointer.
 */

'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hide original cursor
    document.documentElement.style.cursor = 'none'
    document.body.style.cursor = 'none'

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    // Show cursor when entering window
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
      document.documentElement.style.cursor = 'none'
    }

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.style.cursor = 'auto'
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Original Style Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50"
        style={{
          transform: 'translate(-4px, -4px)',
          opacity: 1,
        }}
      >
        {/* SVG Arrow Pointer - Original Style */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrow pointer */}
          <path
            d="M2 2L2 18L8 11L14 18L18 14L11 7L18 2H2Z"
            fill="#C05621"
            stroke="#FDFBF7"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* CSS to hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        html, body {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
