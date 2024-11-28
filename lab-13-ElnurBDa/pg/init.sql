CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE address_table (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  address_line VARCHAR(255),
  lat DOUBLE PRECISION,
  long DOUBLE PRECISION
);

