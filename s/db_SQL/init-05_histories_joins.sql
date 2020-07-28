\c job_assistant

CREATE TABLE IF NOT EXISTS contact_history_to_person (
  contact_history_id integer PRIMARY KEY,
  person_id integer REFERENCES person (person_id),
  FOREIGN KEY (contact_history_id) REFERENCES contact_history (contact_history_id)
);

CREATE TABLE IF NOT EXISTS contact_history_to_job (
  contact_history_id integer PRIMARY KEY,
  job_id integer REFERENCES job (job_id),
  FOREIGN KEY (contact_history_id) REFERENCES contact_history (contact_history_id)
);

CREATE TABLE IF NOT EXISTS interview_history_to_job (
  interview_history_id integer PRIMARY KEY,
  job_id integer REFERENCES job (job_id),
  FOREIGN KEY (interview_history_id) REFERENCES interview_history (interview_history_id)
);