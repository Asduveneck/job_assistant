\c job_assistant 

CREATE TABLE IF NOT EXISTS favorite_company (
    fav_company_id integer PRIMARY KEY,
    company_id integer REFERENCES company (company_id),
    rank SERIAL
);

CREATE TABLE IF NOT EXISTS favorite_job (
    fav_job_id integer PRIMARY KEY,
    job_id integer REFERENCES job (job_id),
    rank SERIAL
);

CREATE TABLE IF NOT EXISTS favorite_person (
    fav_person_id integer PRIMARY KEY,
    person_id integer REFERENCES person (person_id),
    rank SERIAL
);

CREATE TABLE IF NOT EXISTS avoid_company (
    avoid_company_id integer PRIMARY KEY,
    company_id integer REFERENCES company (company_id),
    rank SERIAL
);

CREATE TABLE IF NOT EXISTS avoid_person (
    avoid_person_id integer PRIMARY KEY,
    person_id integer REFERENCES person (person_id),
    rank SERIAL
);