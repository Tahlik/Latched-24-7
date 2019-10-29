require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const { phone } = event.queryStringParameters;

  const provider = await db.one(
    "SELECT * FROM provider where phone = ${phone}",
    { phone }
  );

  const is_verified = true;

  return {
    statusCode: 200,
    body: JSON.stringify({ is_verified })
  };
};
