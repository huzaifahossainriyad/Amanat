/**
 * CustomCursor Component - Original Windows Cursor
 * Simple, clean original arrow pointer style
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
      {/* Original Windows Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50"
        style={{
          transform: 'translate(-2px, -2px)',
          opacity: 1,
        }}
      >
        {/* Original arrow pointer */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L0 16L4.5 10L10 16L14 12L8.5 6L14 0H0Z"
            fill="black"
          />
          <path
            d="M0 0L0 16L4.5 10L10 16L14 12L8.5 6L14 0H0Z"
            fill="white"
            opacity="0.8"
            transform="translate(1, 1)"
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
