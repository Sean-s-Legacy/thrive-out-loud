import { AppError } from "./response"

class CustomError extends Error {
  code: any
  data: any
  constructor(err: AppError) {
    super();
    this.name = err.name;
    this.message = err.message;
    this.code = err.code
    this.data = err.data
  } 
}

export default CustomError