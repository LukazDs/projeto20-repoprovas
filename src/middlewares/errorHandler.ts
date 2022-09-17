import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.code === "Conflict") {
    return res.status(409).send(err.message);
  }

  if (err.code === "Unauthorized") {
    return res.status(401).send(err.message);
  }

  if (err.code === "NotFound") {
    return res.status(404).send(err.message);
  }

  return res.sendStatus(500);
};

export default <ErrorRequestHandler>errorHandler;
