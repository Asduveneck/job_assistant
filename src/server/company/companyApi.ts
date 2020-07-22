import { query } from '../dbPoolConfig';

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
      if (error) throw error;
      response
        .status(201)
        .send(`Company ${companyName} added with ID: ${result.insertId}`);
    },
  );
};
