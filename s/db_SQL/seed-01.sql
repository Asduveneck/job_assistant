\c job_assistant

\COPY company(company_id, company_name, career_url, home_url, email_pattern, details, other_urls) FROM 's/db_seeds/company.csv' DELIMITER ',' CSV HEADER;

