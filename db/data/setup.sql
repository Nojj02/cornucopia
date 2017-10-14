\connect postgres

 -- financial planning Schema
CREATE SCHEMA "financialplanning"
    AUTHORIZATION postgres;

CREATE TABLE "financialplanning"."financial_needs_analysis"
(
    "db_id" bigserial NOT NULL,
    "id" uuid NOT NULL,
    "content" json NOT NULL,
    "timestamp" timestamp with time zone NOT NULL
    -- "Version" bigint NOT NULL,
    -- "MessageType" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    -- "SerializedMessage" json NOT NULL,
    -- CONSTRAINT "OrderEvent_pkey" PRIMARY KEY ("dbId"),
    -- CONSTRAINT "UniqueIdVersion" UNIQUE ("Id", "Version")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "financialplanning"."financial_needs_analysis"
    OWNER to postgres;