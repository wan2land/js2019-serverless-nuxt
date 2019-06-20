import "source-map-support/register"

import { APIGatewayEvent, Context } from "aws-lambda"
import { createServer, proxy } from "aws-serverless-express"
import bodyParser from "body-parser"
import express from "express"
import cors from "cors"

const app = express()

app.use(bodyParser())
app.use(cors())

app.get("/", (req, res) => res.json({success: true, message: "pong"}))

app.get("/me", (req, res) => {
  if (req.headers.authorization === "Bearer logintoken") {
    return res.json({
      success: true,
      data: {
        user: {
          id: 1,
          username: "admin",
        }
      },
    })
  }
  return res.json({
    success: false,
    data: {
      user: null,
    },
  })
})

app.post("/signin", (req, res) => {
  if (req.body.username === "admin" && req.body.password === "password") {
    return res.json({
      success: true,
      data: {
        token: "logintoken",
      },
    })
  }
  return res.status(401).json({
    success: false,
    message: "wrong id or password"
  })
})


const server = createServer(app)

export const http = (event: APIGatewayEvent, context: Context) => {
  proxy(server, event, context)
}
