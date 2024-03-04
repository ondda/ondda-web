CREATE TABLE waitlist_subscriber (
  id
    UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email
    VARCHAR(255)
    NOT NULL
    UNIQUE
    CHECK (lower(email) = email)
);