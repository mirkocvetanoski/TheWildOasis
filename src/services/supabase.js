import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nhittkczdxolcvyxykgk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaXR0a2N6ZHhvbGN2eXh5a2drIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0OTI5NTMsImV4cCI6MjAxMjA2ODk1M30.BDx6KatYOb9SiMaI0DdIYQYFvaldKwrEdOPCmOgcpSk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
