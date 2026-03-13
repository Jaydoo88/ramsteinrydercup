import { createClient } from '@supabase/supabase-js';

// Get keys from environment variables with fallbacks to literal strings since this is a frontend-only app
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dcushukgoxcgkwhurzlf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjdXNodWtnb3hjZ2t3aHVyemxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MzkxOTYsImV4cCI6MjA4OTAxNTE5Nn0.QBU1iDJMR6tbWQjgdVVAtqeDnxVppjAvg5HLoqce6_Y';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
