\c job_assistant
-- Empty Ranks Tables
DELETE FROM favorite_company;
DELETE FROM favorite_job;
DELETE FROM favorite_person;
DELETE FROM avoid_company;
DELETE FROM avoid_person;

-- Empty Detail JOIN Tables
DELETE FROM detail_to_job;
DELETE FROM detail_to_person;
DELETE FROM detail_to_company;
DELETE FROM detail_to_progress;
DELETE FROM detail_to_task;
DELETE FROM detail_to_contact_history cascade;
DELETE FROM detail_to_interview_history cascade;

-- Empty History JOIN Tables
DELETE FROM contact_history_to_job cascade;
DELETE FROM contact_history_to_person cascade;
DELETE FROM interview_history_to_job cascade;

-- Empty Main tables
DELETE FROM progress;
DELETE FROM task;
DELETE FROM note;
DELETE FROM template;
DELETE FROM setting cascade;
DELETE FROM profile cascade;
DELETE FROM job;
DELETE FROM person;
DELETE FROM company;
DELETE FROM detail;
DELETE FROM contact_history;
DELETE FROM interview_history;