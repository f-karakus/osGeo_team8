create table park_type
(type_name character varying(30),
 constraint pk_type_name primary key (type_name)
);

Insert into park_type (type_name) values 
('Recreation Park'),
('Child Park'),
('Walking Park'),
('Funfair'),
('Picnic Park');

create extension postgis;

create table park_ankara
(p_type character varying(30),
 park_id serial,
 park_name character varying(100),
 park_loc geometry('POINT',4326),
 observation_time timestamp,
 constraint pk_park_id primary key (park_id)
);

create table park_region
(region_id serial,
 responsible character varying(50),
 region_geom geometry('POLYGON',4326),
 constraint pk_region_id primary key (region_id)
);