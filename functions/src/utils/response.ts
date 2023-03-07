export interface AppError extends Error {
    status?: string,
    code?: number,
    message: string,
    data?: any,
    name: string
  }
  export interface AppSuccess {
    status: string,
    code: number,
    data: any
  }