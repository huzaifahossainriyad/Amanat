/**
 * CustomCursor Component - Smooth & Elegant Version
 * Minimalist cursor design inspired by original pointer with smooth animations.
 * No lag, optimized performance with requestAnimationFrame.
 */

'use client'

import { useEffect, useRef, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    // Hide original cursor
    document.documentElement.style.cursor = 'none'
    document.body.style.cursor = 'none'

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    // Track mouse movement with requestAnimationFrame for smooth animation
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Check if hovering over clickable element
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')

      setIsHovering(!!isClickable)
    }

    // Smooth animation loop
    const animate = () => {
      // Smooth follow with easing
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`
        cursorRef.current.style.top = `${cursorY}px`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
      document.documentElement.style.cursor = 'none'
    }

    // Show cursor when entering window
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
      document.documentElement.style.cursor = 'none'
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      document.documentElement.style.cursor = 'auto'
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Smooth Custom Cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 transition-all duration-150 ${
          isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          transform: `translate(-50%, -50%) ${
            isHovering ? 'scale(1.25)' : 'scale(1)'
          }`,
          opacity: 1,
        }}
      >
        {/* Main pointer arrow shape */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Arrow pointer */}
          <path
            d="M3 3L3 20L10 13L17 20L21 16L14 9L21 3H3Z"
            fill="#C05621"
            stroke="#FDFBF7"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          {/* Highlight on arrow */}
          <path
            d="M5 5L5 12L8 9L12 12L14 10L11 7L14 5H5Z"
            fill="#E8A76A"
            opacity="0.6"
          />
        </svg>

        {/* Hover glow effect */}
        {isHovering && (
          <div
            className="absolute inset-0 w-6 h-6 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(72, 187, 120, 0.3), transparent)',
              filter: 'blur(4px)',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}
          />
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        /* Hide default cursor everywhere */
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
