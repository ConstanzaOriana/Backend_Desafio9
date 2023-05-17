import { errorDictionary } from '../utils/errorDictionary.js';

const errorHandler = (err, req, res, next) => {
console.log(err)
  switch(err.code) {
    case errorDictionary.REQUIRED_FIELDS_ERROR:
      req.logger.error({ status: 'error', error: err.name, message: err.message, cause: err.cause, code: err.code });
      res.redirect('/failregister');
      break;
    case errorDictionary.DUPLICATED_USER_ERROR:
      req.logger.error({ status: 'error', error: err.name, message: err.message, cause: err.cause, code: err.code });
      res.redirect('/failregister');
      break;
    default:
      if(err.message === 'Not authenticated') return res.redirect('/login');
      if(err.message === 'Not authorized') return res.redirect('/home');
      if(err.message) return res.status(400).json({ Error: err.message, Cause: err.cause });
      res.status(500).json({ status: 'error', error: 'Internal Server Error', code: err.code });
  }

};

export default errorHandler;
