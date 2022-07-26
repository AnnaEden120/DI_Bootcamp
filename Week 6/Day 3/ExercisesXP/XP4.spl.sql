SELECT movies.movie_title
FROM movies
INNER JOIN customer_review
ON movies.movie_title=customer_review.title;

SELECT * FROM customer_review

INSERT INTO customer_review(review_text) VALUES 
('Great Movie'),
('Bad Movie')

