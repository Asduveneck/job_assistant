\c job_assistant
CREATE TABLE IF NOT EXISTS company (
    company_id integer PRIMARY KEY,
    company_name varchar(25) NOT NULL UNIQUE,
    career_url varchar(75),
    home_url varchar(75),
    email_pattern varchar(50),
    details json,
    other_urls json
);

CREATE TABLE IF NOT EXISTS person (
    person_id integer PRIMARY KEY,
    company_id integer REFERENCES company (company_id),
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    linkedin_url varchar(75),
    email varchar(100),
    phone varchar(15),
    title varchar(100)
);

CREATE TABLE IF NOT EXISTS job (
    job_id integer PRIMARY KEY,
    company_id integer REFERENCES company (company_id),
    status varchar(25) DEFAULT 'Active' NOT NULL,
    position varchar(100) NOT NULL,
    url varchar(100),
    source varchar(30),
    resume_used varchar(30),
    date_applied timestamp WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    details json,
    contact_history json,
    interview_history json
);

CREATE TABLE IF NOT EXISTS profile (
    profile_id integer PRIMARY KEY,
    personal_links json,
    job_board_links json
);

CREATE TABLE IF NOT EXISTS setting (
    setting_id integer PRIMARY KEY,
    profile_id integer REFERENCES profile (profile_id),
    seen_tutorial boolean,
    color_pallete json,
    quotes json,
    show_quote boolean DEFAULT 't'
);

CREATE TABLE IF NOT EXISTS template (
    template_id integer PRIMARY KEY,
    profile_id integer REFERENCES profile (profile_id),
    cold_email json,
    follow_up json,
    linkedIn_add json,
    misc json
);

CREATE TABLE IF NOT EXISTS note (
    note_id integer PRIMARY KEY,
    cover_letter text,
    email text,
    job_apps text,
    misc text
);

CREATE TABLE IF NOT EXISTS task (
    task_id integer PRIMARY KEY,
    date_created date DEFAULT CURRENT_DATE,
    date_todo date,
    name varchar(100),
    status varchar(15)
);

CREATE TABLE IF NOT EXISTS progress (
    progress_id integer PRIMARY KEY,
    date_created date DEFAULT CURRENT_DATE,
    time_spent integer,
    category varchar(25) NOT NULL,
    description text
);

CREATE TABLE IF NOT EXISTS first_interview (
    interview_id integer PRIMARY KEY,
    job_id integer REFERENCES job (job_id),
    date_created date DEFAULT CURRENT_DATE,
    date_scheduled timestamp WITH TIME ZONE,
    note text
);