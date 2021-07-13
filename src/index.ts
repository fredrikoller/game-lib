/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express"
import helmet from "helmet"
import cors from "cors"
import { itemsRouter } from "./items/items.router"
import { notFoundHandler } from "./middleware/not-found.middleware"
import { errorHandler } from "./middleware/error.middleware"


dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

/**
 *  App Configuration
 */

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use("/api/v1/items", itemsRouter)
app.use(errorHandler)
app.use(notFoundHandler)



app.listen(PORT, () => {

  console.log(`Listening on port ${PORT}`)
})