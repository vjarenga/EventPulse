
import { createClient } from  "@supabase/supabase-js";
export const supabaseUrl = 'https://vvcuuqcnyiwxtjdyylwu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2Y3V1cWNueWl3eHRqZHl5bHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MjUxNzUsImV4cCI6MjAzNDQwMTE3NX0.-5ZDIV6EFiNo-k4HVhpJm1OQqqKWtNDtZhKdOWDIuHw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;