
DROP DATABASE IF EXISTS movies

CREATE DATABASE movies

\c movie 

CREATE TABLE studios
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  founded_in DATE
);


CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    release_year INT NOT NULL,
    runtime INT NOT NULL,
    rating TEXT NOT NULL 
);

CREATE TABLEE actors(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
    birth_date DATE NOT NULL 
);

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movies ON DELETE CASCADE,
    movie_id INT REFERENCES actors ON DELETE CASCADE
);

INSERT INTO studios
  (name, founded_in)
VALUES
  ('Walt Disney Studios Motion Pictures', '1953-06-23'),
  ('20th Century Fox', '1935-05-31'),
  ('Universal Pictures', '1912-04-30');

INSERT INTO movies
  (title, release_year, runtime, rating, studio_id)
VALUES
  ('Star Wars: The Force Awakens', 2015, 136, 'PG-13', 1),
  ('Avatar', 2009, 160, 'PG-13', 2),
  ('Black Panther', 2018, 140, 'PG-13', 1),
  ('Jurassic World', 2015, 124, 'PG-13', 3),
  ('Marvel’s The Avengers', 2012, 142, 'PG-13', 1);

INSERT INTO actors
  (first_name, last_name, birth_date)
VALUES
  ('Scarlett', 'Johansson', '1984-11-22'),
  ('Samuel L', 'Jackson', '1948-12-21'),
  ('Kristen', 'Wiig', '1973-08-22');

INSERT INTO roles
  (movie_id, actor_id)
VALUES
  (1, 1),
  (1, 2),
  (3, 2);