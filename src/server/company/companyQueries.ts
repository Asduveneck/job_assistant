import { Request, Response } from 'express';

import query from '../dbPoolConfig';
import { getById } from '../helpers/queries';

export const createCompany = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const {
      companyName,
      careerUrl,
      homeUrl,
      emailPattern,
      details,
      otherUrls,
    } = request.body;
    const result = await query(
      'INSERT INTO company (company_name, career_url, home_url, email_pattern, details, other_urls) VALUES ($1, $2, $3, $4, $5, $6)',
      [companyName, careerUrl, homeUrl, emailPattern, details, otherUrls],
    );
    response
      .status(201)
      .send(`Company ${companyName} added with ID: ${result}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCompanies = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const result = await query(
      'SELECT * FROM company ORDER BY company_name ASC',
      [],
    );
    response.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCompanyById = getById('company');

export const updateCompanyById = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const companyId = parseInt(request.params.id, 10);
    const {
      companyName,
      careerUrl,
      homeUrl,
      emailPattern,
      details,
      otherUrls,
    } = request.body;
    await query(
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
    );
    response
      .status(201)
      .send(`Company ${companyName} with ID: ${companyId} modified`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
