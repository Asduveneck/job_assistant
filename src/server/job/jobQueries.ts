import { Request, Response } from 'express';

import query from '../dbPoolConfig';

export const createJob = (request: Request, response: Response): void => {
  const {
    companyId,
    position,
    url,
    source,
    resumeUsed,
    details,
    contactHistory,
    interviewHistory,
  } = request.body;
  query(
    'INSERT INTO job (company_id, position, url, source, resume_used, details, contact_history, interview_history) VALUES ($1 $2 $3 $4 $5 $6 $7 $8)',
    [
      companyId,
      position,
      url,
      source,
      resumeUsed,
      details,
      contactHistory,
      interviewHistory,
    ],
    (error, result) => {
      if (error) throw error; // TODO: status 500
      response
        .status(201) // UPDATE BELOW"
        .send(
          `Job ${position} at company with ID ${companyId} added with ID: ${result}`,
        ); // TODO: get ID. insertId does not exist on type result...?
    },
  );
};

export const getJobs = (_request: Request, response: Response): void => {
  query('SELECT * FROM job ORDER BY job_id ASC', [], (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

export const getJobById = (request: Request, response: Response): void => {
  const jobId = parseInt(request.params.id);
  query('SELECT * from job WHERE job_id = $1', [jobId], (error, results) => {
    if (error) throw error;
    response.status(200).json(results.rows);
  });
};

export const updateJobById = (request: Request, response: Response): void => {
  const jobId = parseInt(request.params.id);
  const {
    companyId,
    position,
    url,
    source,
    resumeUsed,
    details,
    contactHistory,
    interviewHistory,
  } = request.body;
  query(
    'UPDATE job SET company_id = $1, position = $2, url = $3, source = $4, resume_used = $5, details = $6, contact_history = $7, interview_history = $8 WHERE job_id = $9',
    [
      companyId,
      position,
      url,
      source,
      resumeUsed,
      details,
      contactHistory,
      interviewHistory,
      jobId,
    ],
    (error, _result) => {
      if (error) throw error;
      response
        .status(201)
        .send(
          `Job: ${position} at companyID ${companyId} with ID ${jobId} modified`,
        );
    },
  );
};

export const deleteJobById = (request: Request, response: Response): void => {
  const jobId = parseInt(request.params.id);
  query('DELETE FROM job WHERE job_id = $1', [jobId], (error, _result) => {
    if (error) throw error;
    response.status(204).send(`Job deleted with ID: ${jobId}`);
  });
};
