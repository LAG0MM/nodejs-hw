import { HttpError } from 'http-errors';

// Error handler
export const errorHandler = (err, req, res, next) => {
  // if error is from http-errors
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  // default error
  res.status(500).json({
    message: err.message,
  });
};
