ALTER TABLE "users" ALTER COLUMN "full_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "last_name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");