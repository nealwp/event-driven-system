CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"last_name" text,
	"address_line_1" text,
	"address_line_2" text,
	"city" text,
	"state" text,
	"zip_code" text,
	"email" text,
	"phone" varchar(256)
);
