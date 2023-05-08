CREATE TABLE public.data (
  id serial NOT NULL,
  hour integer NOT NULL,
  minute integer NOT NULL,
  angle integer NOT NULL,
  date timestamp without time zone NOT NULL
);

ALTER TABLE public.data ADD CONSTRAINT data_pkey PRIMARY KEY (id);insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (25, '2023-05-04 15:03:49.098', 1, 5, 10);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (50, '2023-05-04 15:04:05.635', 2, 6, 20);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (75, '2023-05-04 15:04:36.365', 3, 7, 30);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (100, '2023-05-04 15:04:49.479', 4, 8, 40);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (125, '2023-05-04 18:18:54.151', 5, 10, 50);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (150, '2023-05-04 19:17:10.221', 6, 11, 60);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (166, '2023-05-04 19:18:22.128', 7, 12, 8);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (108, '2023-05-04 19:18:59.993', 6, 13, 13);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (93, '2023-05-04 19:19:36.135', 11, 14, 43);
insert into "public"."data" ("angle", "date", "hour", "id", "minute") values (157, '2023-05-05 09:58:58.145', 3, 15, 45);
