require('dotenv').config()
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://mpvdljlaheyeoxvehlcc.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

if (!supabaseKey) {
  throw new Error('Missing env.SUPABASE_KEY')
}
const supabase = createClient(supabaseUrl, supabaseKey)



export default supabase;