import { Request, Response } from 'express';

import query from '../dbPoolConfig';
import { deleteById, getById } from '../helpers/queries';

export const createPerson = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const {
      companyId,
      firstName,
      lastName,
      linkedinUrl,
      email,
      phone,
      title,
    } = request.body;

    const result = await query(
      'INSERT INTO person (company_id, first_name, last_name, linkedin_url, email, phone, title) VALUES ($1, $2, $3, $4, $5, $6)',
      [companyId, firstName, lastName, linkedinUrl, email, phone, title],
    );
    response
      .status(201)
      .send(`Person ${firstName} ${lastName} added with ID: ${result}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPersons = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const result = await query(
      'SELECT * FROM person ORDER BY person_id ASC',
      [],
    );
    response.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPersonById = getById('person');

export const updatePersonById = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const personId = parseInt(request.params.id, 10);
    const {
      companyId,
      firstName,
      lastName,
      linkedinUrl,
      email,
      phone,
      title,
    } = request.body;
    await query(
      'UPDATE person SET company_id = $1, first_name = $2, last_name = $3, linkedin_url = $4, email = $5, phone = $6, title = $7 WHERE person_id = $8',
      [
        companyId,
        firstName,
        lastName,
        linkedinUrl,
        email,
        phone,
        title,
        personId,
      ],
    );
    response
      .status(201)
      .send(`Person: ${firstName} ${lastName} with ID: ${personId} modified`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deletePersonById = deleteById('person');
