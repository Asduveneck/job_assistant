import { Request, Response } from 'express';

import query from '../dbPoolConfig';
import { deleteById, getById } from '../helpers/queries';

export const createPerson = (request: Request, response: Response): void => {
  const {
    companyId,
    firstName,
    lastName,
    linkedinUrl,
    email,
    phone,
    title,
  } = request.body;
  query(
    'INSERT INTO person (company_id, first_name, last_name, linkedin_url, email, phone, title) VALUES ($1, $2, $3, $4, $5, $6)',
    [companyId, firstName, lastName, linkedinUrl, email, phone, title],
    (error, result) => {
      if (error) throw error; // TODO: status 500
      response
        .status(201)
        .send(`Person ${firstName} ${lastName} added with ID: ${result}`); // TODO: get ID. insertId does not exist on type result...?
    },
  );
};

export const getPersons = (_request: Request, response: Response): void => {
  query('SELECT * FROM person ORDER BY person_id ASC', [], (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

export const getPersonById = getById('person');

export const updatePersonById = (
  request: Request,
  response: Response,
): void => {
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
  query(
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
    error => {
      if (error) throw error;
      response
        .status(201)
        .send(`Person: ${firstName} ${lastName} with ID: ${personId} modified`);
    },
  );
};

export const deletePersonById = deleteById('person');
