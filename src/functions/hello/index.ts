import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from "./api-gateway"
import schema from "./schema"

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
   body: `teste`,
   statusCode: 201
  })
}

export { hello } 