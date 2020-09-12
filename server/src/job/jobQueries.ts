import { NextFunction, Request, Response } from 'express';

import query from '../dbPoolConfig';
import { deleteById, getById } from '../utils';

export const createJob = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
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
    const results = await query(
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
    );
    response
      .status(201) // UPDATE BELOW
      .send(
        `Job ${position} at company with ID ${companyId} added with ID: ${results.oid}`,
      );
  } catch (error) {
    next(error);
  }
};

export const getJobs = async (
  _request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const results = await query('SELECT * FROM job ORDER BY job_id ASC', []);
    response.status(200).json(results.rows);
  } catch (error) {
    next(error);
  }
};

export const getJobById = getById('job');

export const updateJobById = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const jobId = parseInt(request.params.id, 10);
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
    await query(
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
    );
    response
      .status(201)
      .send(
        `Job: ${position} at companyID ${companyId} with ID ${jobId} modified`,
      );
  } catch (error) {
    next(error);
  }
};

export const deleteJobById = deleteById('job');
