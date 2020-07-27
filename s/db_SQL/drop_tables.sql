\c job_assistant
-- Drop Ranks Tables
DROP TABLE IF EXISTS favorite_company;
DROP TABLE IF EXISTS favorite_job;
DROP TABLE IF EXISTS favorite_person;
DROP TABLE IF EXISTS avoid_company;
DROP TABLE IF EXISTS avoid_person;

-- Drop Detail JOIN Tables
DROP TABLE IF EXISTS detail_to_job;
DROP TABLE IF EXISTS detail_to_person;
DROP TABLE IF EXISTS detail_to_company;
DROP TABLE IF EXISTS detail_to_progress;
DROP TABLE IF EXISTS detail_to_task;
DROP TABLE IF EXISTS detail_to_contact_history cascade;
DROP TABLE IF EXISTS detail_to_interview_history cascade;

-- Drop History JOIN Tables
DROP TABLE IF EXISTS contact_history_to_job cascade;
DROP TABLE IF EXISTS contact_history_to_person cascade;
DROP TABLE IF EXISTS interview_history_to_job cascade;

-- Drop Main tables
DROP TABLE IF EXISTS progress;
DROP TABLE IF EXISTS task;
DROP TABLE IF EXISTS note;
DROP TABLE IF EXISTS template;
DROP TABLE IF EXISTS setting cascade;
DROP TABLE IF EXISTS profile cascade;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS detail;
DROP TABLE IF EXISTS contact_history;
DROP TABLE IF EXISTS interview_history;