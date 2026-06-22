-- Meridian Impulse Supabase/PostgreSQL-ready form schema
-- Run this in the Supabase SQL Editor when you are ready to store submissions.

create table if not exists public.client_inquiries (
  id bigint generated always as identity primary key,
  name text not null,
  company text not null,
  website text,
  email text not null,
  role_needed text not null,
  industry text not null,
  hiring_timeline text not null,
  budget_range text not null,
  notes text,
  intent text,
  source text default 'website',
  created_at timestamptz default now()
);

create table if not exists public.talent_applications (
  id bigint generated always as identity primary key,
  full_name text not null,
  country text not null,
  email text not null,
  whatsapp text not null,
  english_level text not null,
  role_interests text not null,
  years_experience text not null,
  salary_expectation text not null,
  availability text not null,
  resume_file_name text,
  linkedin_url text,
  intro_url text,
  status text default 'new',
  source text default 'website',
  created_at timestamptz default now()
);

alter table public.client_inquiries enable row level security;
alter table public.talent_applications enable row level security;

-- This project inserts through a server route using SUPABASE_SERVICE_ROLE_KEY.
-- Do not expose your service role key to the browser.
