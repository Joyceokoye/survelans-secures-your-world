create type public.app_role as enum ('admin','user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null, role app_role not null, unique(user_id, role));
grant select on public.user_roles to authenticated; grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create or replace function public.has_role(_user_id uuid, _role app_role) returns boolean language sql stable security definer set search_path = public as $$ select exists(select 1 from public.user_roles where user_id=_user_id and role=_role) $$;
create policy "own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create table public.waitlist_subscribers (
 id uuid primary key default gen_random_uuid(),
 first_name text not null check (char_length(first_name) between 1 and 80),
 email text not null check (char_length(email) between 3 and 255),
 phone text check (phone is null or char_length(phone) <= 30),
 marketing_consent boolean not null default false,
 source text not null default 'website' check (char_length(source) <= 40),
 status text not null default 'subscribed',
 created_at timestamptz not null default now());
create unique index waitlist_email_unique on public.waitlist_subscribers (lower(email));
grant insert on public.waitlist_subscribers to anon, authenticated; grant select, update, delete on public.waitlist_subscribers to authenticated; grant all on public.waitlist_subscribers to service_role;
alter table public.waitlist_subscribers enable row level security;
create policy "anyone joins" on public.waitlist_subscribers for insert to anon, authenticated with check (status = 'subscribed');
create policy "admins read" on public.waitlist_subscribers for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admins update" on public.waitlist_subscribers for update to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admins delete" on public.waitlist_subscribers for delete to authenticated using (public.has_role(auth.uid(),'admin'));

create table public.contact_messages (
 id uuid primary key default gen_random_uuid(),
 name text not null check (char_length(name) between 1 and 100),
 email text not null check (char_length(email) between 3 and 255),
 subject text not null check (char_length(subject) between 1 and 150),
 message text not null check (char_length(message) between 1 and 2000),
 created_at timestamptz not null default now());
grant insert on public.contact_messages to anon, authenticated; grant select, delete on public.contact_messages to authenticated; grant all on public.contact_messages to service_role;
alter table public.contact_messages enable row level security;
create policy "anyone sends" on public.contact_messages for insert to anon, authenticated with check (true);
create policy "admins read" on public.contact_messages for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admins delete" on public.contact_messages for delete to authenticated using (public.has_role(auth.uid(),'admin'));

create table public.data_requests (
 id uuid primary key default gen_random_uuid(),
 email text not null check (char_length(email) between 3 and 255),
 request_type text not null check (request_type in ('unsubscribe','delete')),
 details text check (details is null or char_length(details) <= 1000),
 created_at timestamptz not null default now());
grant insert on public.data_requests to anon, authenticated; grant select, delete on public.data_requests to authenticated; grant all on public.data_requests to service_role;
alter table public.data_requests enable row level security;
create policy "anyone requests" on public.data_requests for insert to anon, authenticated with check (true);
create policy "admins read" on public.data_requests for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "admins delete" on public.data_requests for delete to authenticated using (public.has_role(auth.uid(),'admin'));

create table public.analytics_events (
 id uuid primary key default gen_random_uuid(),
 event_name text not null check (char_length(event_name) between 1 and 60),
 label text check (label is null or char_length(label) <= 100),
 created_at timestamptz not null default now());
grant insert on public.analytics_events to anon, authenticated; grant select on public.analytics_events to authenticated; grant all on public.analytics_events to service_role;
alter table public.analytics_events enable row level security;
create policy "anyone logs" on public.analytics_events for insert to anon, authenticated with check (true);
create policy "admins read" on public.analytics_events for select to authenticated using (public.has_role(auth.uid(),'admin'));