-- AI Automation Academy - cloud sync schema
-- Run this in your Supabase SQL editor (or `supabase db push`).
--
-- This script resets the table, so only run it while setting up sync for the
-- first time (no data is lost unless you already synced progress).
--
-- If you already synced data and need to keep it, instead run the ALTER TABLE
-- block at the bottom instead of dropping the table.

drop table if exists public.academy_progress;

create table public.academy_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.academy_progress enable row level security;

create policy "own progress select"
  on public.academy_progress for select
  using (auth.uid() = user_id);

create policy "own progress insert"
  on public.academy_progress for insert
  with check (auth.uid() = user_id);

create policy "own progress update"
  on public.academy_progress for update
  using (auth.uid() = user_id);

create policy "own progress delete"
  on public.academy_progress for delete
  using (auth.uid() = user_id);

-- ---------------------------------------------------------------------------
-- Only if you must keep existing data in a differently-shaped table:
--
-- alter table public.academy_progress
--   add column user_id uuid references auth.users (id) on delete cascade;
-- alter table public.academy_progress
--   add constraint academy_progress_pkey primary key (user_id);
-- ---------------------------------------------------------------------------
