/**
 * Supabase Client Configuration
 * Provides client-side and server-side Supabase instances
 */

import { createClient as createSupabaseClient } from '@supabase/supabase-js'

/**
 * Create a Supabase client for client-side operations
 * Uses environment variables for configuration
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}
