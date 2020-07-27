\c job_assistant

CREATE TABLE IF NOT EXISTS favorite_company (
    company_id integer PRIMARY KEY,
    rank SERIAL,
    FOREIGN KEY (company_id) REFERENCES company (company_id)
);

CREATE TABLE IF NOT EXISTS favorite_job (
    job_id integer PRIMARY KEY,
    rank SERIAL,
    FOREIGN KEY (job_id) REFERENCES job (job_id)
);

CREATE TABLE IF NOT EXISTS favorite_person (
    person_id integer PRIMARY KEY,
    rank SERIAL,
    FOREIGN KEY (person_id) REFERENCES person (person_id)
);

CREATE TABLE IF NOT EXISTS avoid_company (
    company_id integer PRIMARY KEY,
    rank SERIAL,
    FOREIGN KEY (company_id) REFERENCES company (company_id)
);

CREATE TABLE IF NOT EXISTS avoid_person (
    person_id integer PRIMARY KEY,
    rank SERIAL,
    FOREIGN KEY (person_id) REFERENCES person (person_id)
);