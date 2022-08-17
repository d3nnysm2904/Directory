-- CREATE TABLE post (
--     title TEXT ,
--     username TEXT ,
--     link TEXT 
-- )

DROP DATABASE IF EXISTS reddit_db;

CREATE DATABASE reddit_db;
\c reddit_db; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL ,
    password  VARCHAR(20) NOT NULL
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users ON DELETE CASCADE,
    comment_text TEXT NOT NULL 
);

CREATE TABLE subreddits(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL, 
    name VARCHAR (15) NOT NULL ,
    description TEXT,
    subscribers INTEGER CHECK (subscribers > 0) DEFAULT 1, 
    is_private BOOLEAN DEFAULT false 
);



INSERT INTO users(username,password)
VALUES
('Denny','Kratos'),
('Yaki','Negras');

 INSERT INTO comments (user_id ,comment_text)
VALUES
(2,'Hello'),
(2,'this is a comment');



INSERT INTO subreddits
(name,user_id)
VALUES
('Chickens',1),
('Stevie',2);


-- DELETE FROM users WHERE id=2; 
-- this removes all comments where id =2 because of ON DELETE SET NULL 

-- ALTER TABLE subreddits DROP COLUMN description ;
-- this deletes ddescription column 