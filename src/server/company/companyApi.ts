import { query } from '../dbPoolConfig';
import { Pool } from 'pg';

const createCompany = (request, response) => {
  const {
    companyName,
    careerUrl,
    homeUrl,
    emailPattern,
    details,
    otherUrls,
  } = request.body;
  query(
    'INSERT INTO company (company_name, career_url, home_url, email_pattern, details, other_urls) VALUES ($1, $2, $3, $4, $5, $6)',
    [companyName, careerUrl, homeUrl, emailPattern, details, otherUrls],
    (error, result) => {
      if (error) throw error; // TODO: status 500 , and handle error. Switch to async await possibly?
      response
        .status(201)
        .send(`Company ${companyName} added with ID: ${result.insertId}`);
    },
  );
};

const getCompanies = (request, response) => {
  query(
    'SELECT * FROM company ORDER BY company_name ASC',
    [],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    },
  );
};

const getCompanyByName = (request, response) => {
  const { companyName } = request.body;

  query(
    'SELECT * FROM company WHERE company_name = $1',
    [companyName],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    },
  );
};

const updateCompanyById = (request, response) => {
  const {
    companyName,
    careerUrl,
    homeUrl,
    emailPattern,
    details,
    otherUrls,
    companyId,
  } = request.body;
  query(
    'UPDATE company SET company_name = $1, career_url = $2, home_url = $3, email_pattern = $4, details = $5, other_urls = $6 WHERE company_id = $7',
    [
      companyName,
      careerUrl,
      homeUrl,
      emailPattern,
      details,
      otherUrls,
      companyId,
    ],
    (error, result) => {
      if (error) throw error; // TODO: status 500 , and handle error. Switch to async await possibly?
      response
        .status(201)
        .send(`Company ${companyName} with ID: ${result.insertId} modified`);
    },
  );
};
