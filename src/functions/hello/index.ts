import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "./api-gateway"
import schema from "./schema"

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log(process.env.MINIFY) 
  return formatJSONResponse(`Hello, welcome to the exciting Serverless worldddd`,  201)
}


export { hello } 