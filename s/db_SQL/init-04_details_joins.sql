\c job_assistant

CREATE TABLE IF NOT EXISTS detail_to_person (
detail_id integer PRIMARY KEY,
person_id integer REFERENCES person (person_id),
FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

CREATE TABLE IF NOT EXISTS detail_to_company (
  detail_id integer PRIMARY KEY,
  company_id integer REFERENCES company (company_id),
  FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

CREATE TABLE IF NOT EXISTS detail_to_job (
  detail_id integer PRIMARY KEY,
  job_id integer REFERENCES job (job_id),
  FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

CREATE TABLE IF NOT EXISTS detail_to_progress (
  detail_id integer PRIMARY KEY,
  progress_id integer REFERENCES progress (progress_id),
  FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

CREATE TABLE IF NOT EXISTS detail_to_task (
  detail_id integer PRIMARY KEY,
  task_id integer REFERENCES task (task_id),
  FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

CREATE TABLE IF NOT EXISTS detail_to_contact_history (
  detail_id integer PRIMARY KEY,
  contact_history_id integer REFERENCES contact_history (contact_history_id),
  FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

CREATE TABLE IF NOT EXISTS detail_to_interview_history (
  detail_id integer PRIMARY KEY,
  interview_history_id integer REFERENCES interview_history (interview_history_id),
  FOREIGN KEY (detail_id) REFERENCES detail (detail_id)
);

