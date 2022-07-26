INSERT INTO movies (movie_title, movie_lan)VALUES
('La Dolce Vita','Italian'),
('Seven Samruai','Japanese'),
('Emelie','French'),
('Parasite','Korean')

INSERT INTO movies (movie_title) VALUES
('Titanic'),
('Avatar')

INSERT INTO movies (movie_lan)VALUES
('Hebrew'),
('English')

SELECT movies.movie_title, movies.movie_lan
FROM movies