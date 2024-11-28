CREATE TABLE IF NOT EXISTS posts_table (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);

CREATE TABLE IF NOT EXISTS posts_table_2 (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  reference_link_url VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS reference_table_3 (
  id SERIAL PRIMARY KEY,
  link VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS posts_table_3 (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  reference_id INTEGER,
  CONSTRAINT fk_reference
    FOREIGN KEY(reference_id)
    REFERENCES reference_table_3(id)
);

