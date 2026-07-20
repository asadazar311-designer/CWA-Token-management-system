// ===== FILL THESE IN =====
// Get these from Supabase → Settings → API
const SUPABASE_URL = "https://jrfceoaailsnhfqobufr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyZmNlb2FhaWxzbmhmcW9idWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NDU0NDcsImV4cCI6MjEwMDAyMTQ0N30.xFNfwceHeT7ws8UX9rM9G-HRXwyeXIVnVRSQQq2sUCA";
// ==========================

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
