DROP TABLE IF EXISTS

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
    price INTEGER
    description VARCHAR(255)
    image VARCHAR(255)
);