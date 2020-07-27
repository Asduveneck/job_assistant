\c job_assistant

\COPY company(company_id, company_name, career_url, home_url, email_pattern, other_urls) FROM 's/db_seeds/company.csv' DELIMITER ',' CSV HEADER;
\COPY job(job_id,company_id,status,position,url,source,resume_used,date_applied) FROM 's/db_seeds/job.csv' DELIMITER ',' CSV HEADER;
\COPY person(person_id,company_id,first_name,last_name,linkedin_url,email,phone,title) FROM 's/db_seeds/person.csv' DELIMITER ',' CSV HEADER;
