-- Add host_avatar column to live_sessions table
-- This migration adds the missing host_avatar column to support user avatars in live streams

-- kolumeni host avaataarii uumuuf
ALTER TABLE public.live_sessions
ADD COLUMN IF NOT EXISTS host_avatar TEXT;

-- Add a comment to document the column
COMMENT ON COLUMN public.live_sessions.host_avatar IS 'URL to the host avatar image';
