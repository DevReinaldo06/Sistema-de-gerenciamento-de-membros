const SUPABASE_URL = "https://aggbnprejrrcyoqlxqtw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qSP05pc5QYaWa3Q7pZXEgQ_L4GdHAte";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true // Deixe true para ele lembrar o admin logado
  }
});

window.supabaseApp = supabaseClient;