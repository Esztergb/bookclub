-- Active: 1688057078476@@127.0.0.1@3306@bookclub_db
DROP DATABASE IF EXISTS bookclub_db;
CREATE DATABASE bookclub_db;
USE bookclub_db;

-- -- Assuming your users table looks something like this
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT NOT NULL,
--     username VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     -- other user columns if any
--     PRIMARY KEY (id)
-- );

-- -- And your books table looks something like this
-- CREATE TABLE books (
--     id INT AUTO_INCREMENT NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255),
--     -- other book columns if any
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE user_favorites (
--     user_id INT,
--     book_id INT,
--     PRIMARY KEY (user_id, book_id),
--     FOREIGN KEY (user_id) REFERENCES users(id),
--     FOREIGN KEY (book_id) REFERENCES books(id)
-- );
select * from book;