"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _App = require('./App'); var _App2 = _interopRequireDefault(_App);
require('dotenv/config');

const port = process.env.PORT;

(async () => {
  try {
    const app = await _App2.default.call(void 0, );
    const server = app.listen(port, '0.0.0.0', () => {
      console.info(`Server running on port ${port}`);
    });

    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    exitSignals.map(sig =>
      process.on(sig, () =>
        server.close(err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          app.database.connection.close(() => {
            console.info("Database connection closed!");
            process.exit(0);
          });
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
