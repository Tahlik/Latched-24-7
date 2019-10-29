require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const providers = await db.manyOrNone(
    "SELECT * FROM provider where is_online = true"
  );

  const randomProviderIndex = Math.floor(Math.random() * providers.length);
  const provider = providers[randomProviderIndex];

  return {
    statusCode: 200,
    body: JSON.stringify({ provider })
  };
};
