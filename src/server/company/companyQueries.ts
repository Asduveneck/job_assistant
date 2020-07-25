import { Request, Response } from 'express';

import query from '../dbPoolConfig';

export const createCompany = (request: Request, response: Response): void => {
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
        .send(`Company ${companyName} added with ID: ${result}`);
    },
  );
};

export const getCompanies = (_request: Request, response: Response): void => {
  query(
    'SELECT * FROM company ORDER BY company_name ASC',
    [],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    },
  );
};

export const getCompanyById = (request: Request, response: Response): void => {
  const companyId = parseInt(request.params.id);
  query(
    'SELECT * FROM company WHERE company_id = $1',
    [companyId],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    },
  );
};

export const updateCompanyById = (
  request: Request,
  response: Response,
): void => {
  const companyId = parseInt(request.params.id);
  const {
    companyName,
    careerUrl,
    homeUrl,
    emailPattern,
    details,
    otherUrls,
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
        .send(`Company ${companyName} with ID: ${companyId} modified`);
    },
  );
};
