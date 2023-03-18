import {Application}  from "express"
import userRouter from "./user/routes"

export const routesConfig = ( app: Application) => {
    app.use("/users", userRouter)
}