/**
 * CustomCursor Component - Enhanced Version
 * Implements an advanced magnetic cursor with gradient effects, glow, and smooth animations.
 * Creates a premium, unique user experience with multiple visual layers.
 */

'use client'

import { useEffect, useRef, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Track mouse movement to update cursor position
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Smooth trail effect with delay
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY })
      }, 50)

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
      if (trailRef.current) {
        trailRef.current.style.opacity = '0'
      }
    }

    // Show cursor when entering window
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
      if (trailRef.current) {
        trailRef.current.style.opacity = '1'
      }
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
    }
  }, [])

  return (
    <>
      {/* Trail effect - follows cursor with delay */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-40 transition-opacity duration-300"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        {/* Trail glow */}
        <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg" />
      </div>

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-50 transition-all duration-150 ${
          isClicking ? 'scale-75' : isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 w-8 h-8 border-2 border-primary/60 rounded-full blur-sm" />

        {/* Main ring with gradient */}
        <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent/50 opacity-30" />

        {/* Solid outer ring */}
        <div className="absolute inset-0 w-8 h-8 border-2 border-primary rounded-full" />

        {/* Middle accent ring */}
        <div className="absolute inset-1 w-6 h-6 border border-accent/70 rounded-full" />

        {/* Inner dot with glow */}
        <div className="absolute inset-3 w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg shadow-primary/50" />

        {/* Pulsing center dot */}
        <div className="absolute inset-3 w-2 h-2 bg-primary rounded-full animate-pulse" />
      </div>

      {/* Hover particles effect */}
      {isHovering && (
        <>
          <div
            className="pointer-events-none fixed z-40 w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${position.x + 15}px`,
              top: `${position.y - 15}px`,
              opacity: 0.6,
              animation: 'float 2s ease-in-out infinite',
            }}
          />
          <div
            className="pointer-events-none fixed z-40 w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${position.x - 15}px`,
              top: `${position.y + 15}px`,
              opacity: 0.6,
              animation: 'float 2s ease-in-out infinite 0.5s',
            }}
          />
        </>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.3;
          }
        }
      `}</style>
    </>
  )
}
