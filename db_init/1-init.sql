\c job_assistant
CREATE TABLE IF NOT EXISTS company (
    company_id serial primary key,
    company_name varchar(25) NOT NULL,
    career_url varchar(50),
    home_url varchar(50),
    email_pattern varchar(50),
    details json,
    other_urls json
);