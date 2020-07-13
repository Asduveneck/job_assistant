\c job_assistant
ALTER TABLE profile 
ADD COLUMN setting_id integer REFERENCES setting (setting_id);
