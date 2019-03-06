-- Table: public.events

-- DROP TABLE public.events;

CREATE TABLE public.events
(
  id integer NOT NULL DEFAULT nextval('events_id_seq'::regclass),
  local character varying(30),
  datahora character varying(30),
  nome character varying(30),
  flyer character varying(30),
  preco character varying(30),
  observacao character varying(30),
  datalibera character varying(30),
  codpromocao character varying(30),
  CONSTRAINT events_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.events
  OWNER TO postgres;