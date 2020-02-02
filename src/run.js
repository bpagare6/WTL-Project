import app from "./index";
import models from "./models/index";
import config from "./config";

async function run() {
  try {
    // DB Connection
    await models.sequelize.sync({ force: process.env.FORCE_DB_RESET });
    console.log("Database Connected successfully.");

    // Start the App in Listen Mode
    // If PORT is declared as environment variable then use that or use 3000
    const port = config.server_port;
    app.listen(port, () => {
      console.log(`Server is up and listening at port ${port} ...`);
    });
  } catch (e) {
    console.log("Error while initializing.");
    console.log(e);
  }
}

run();
