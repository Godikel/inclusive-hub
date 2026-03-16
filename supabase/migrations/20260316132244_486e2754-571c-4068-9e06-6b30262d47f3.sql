-- Create registrations table for masterclass form submissions
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public registration form)
CREATE POLICY "Anyone can register"
  ON public.registrations FOR INSERT
  WITH CHECK (true);

-- No public read access (protect PII)
CREATE POLICY "No public read access"
  ON public.registrations FOR SELECT
  USING (false);