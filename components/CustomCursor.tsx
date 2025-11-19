/**
 * CustomCursor Component - 3D Premium Version
 * Advanced 3D magnetic cursor with depth effects, shadows, and premium animations.
 * Original mouse pointer is completely hidden.
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
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Hide original cursor
    document.body.style.cursor = 'none'

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

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

    // Handle mouse down
    const handleMouseDown = () => {
      setIsClicking(true)
    }

    // Handle mouse up
    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
      document.body.style.cursor = 'none'
    }

    // Show cursor when entering window
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
      document.body.style.cursor = 'none'
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* 3D Custom Cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${
            isClicking ? 'scale(0.8)' : isHovering ? 'scale(1.3)' : 'scale(1)'
          }`,
        }}
      >
        {/* 3D Shadow Layer */}
        <div
          className="absolute inset-0 w-10 h-10 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(192, 86, 33, 0.3), transparent)',
            filter: 'blur(8px)',
            transform: 'translateY(4px)',
          }}
        />

        {/* Outer 3D Ring with Depth */}
        <div
          className="absolute inset-0 w-10 h-10 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(192, 86, 33, 0.8), rgba(192, 86, 33, 0.4))',
            boxShadow: `
              inset -2px -2px 4px rgba(0, 0, 0, 0.3),
              inset 2px 2px 4px rgba(255, 255, 255, 0.2),
              0 8px 16px rgba(192, 86, 33, 0.4),
              0 0 20px rgba(192, 86, 33, 0.3)
            `,
            border: '2px solid rgba(192, 86, 33, 0.9)',
          }}
        />

        {/* Middle 3D Ring */}
        <div
          className="absolute inset-2 w-6 h-6 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(72, 187, 120, 0.6), rgba(192, 86, 33, 0.3))',
            boxShadow: `
              inset -1px -1px 2px rgba(0, 0, 0, 0.2),
              inset 1px 1px 2px rgba(255, 255, 255, 0.1),
              0 4px 8px rgba(72, 187, 120, 0.3)
            `,
            border: '1px solid rgba(72, 187, 120, 0.7)',
          }}
        />

        {/* Inner 3D Sphere */}
        <div
          className="absolute inset-3 w-4 h-4 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 35%, rgba(192, 86, 33, 1), rgba(192, 86, 33, 0.7))',
            boxShadow: `
              inset -1px -1px 2px rgba(0, 0, 0, 0.4),
              inset 1px 1px 2px rgba(255, 255, 255, 0.3),
              0 2px 4px rgba(192, 86, 33, 0.6)
            `,
          }}
        />

        {/* Highlight on sphere */}
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent)',
            top: '6px',
            left: '6px',
            boxShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
          }}
        />

        {/* Glow effect */}
        <div
          className="absolute inset-0 w-10 h-10 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(192, 86, 33, ${
              isHovering ? 0.4 : 0.2
            }), transparent)`,
            filter: 'blur(6px)',
          }}
        />

        {/* Pulsing animation on hover */}
        {isHovering && (
          <div
            className="absolute inset-0 w-10 h-10 rounded-full"
            style={{
              border: '2px solid rgba(72, 187, 120, 0.5)',
              animation: 'pulse-ring 1.5s ease-out infinite',
            }}
          />
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* Hide default cursor everywhere */
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
