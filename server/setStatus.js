require("dotenv").config();
const pg = require("pg-promise")();

const db = pg(process.env.DB_URL);

exports.handler = async (event, context) => {
  const { is_online, provider } = event.queryStringParameters;

  await db.none(
    "UPDATE provider SET is_online=${is_online} WHERE id=${provider}",
    { is_online, provider }
  );

  return {
    statusCode: 200,
    body: 'updated'
  };
};
