CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "allow_public_insert" ON contact_submissions
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read submissions
CREATE POLICY "allow_authenticated_select" ON contact_submissions
  FOR SELECT TO authenticated
  USING (true);
