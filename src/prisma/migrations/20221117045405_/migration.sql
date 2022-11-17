-- This is an empty migration.

CREATE UNIQUE INDEX post_title_idx ON public."Post" (title,is_deleted) WHERE is_deleted = false;

CREATE UNIQUE INDEX user_email_is_deleted_idx ON public."User" (email,is_deleted) WHERE is_deleted = false;