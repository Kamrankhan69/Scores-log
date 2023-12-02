const scoreRouter = require('./scores/score.controller');

module.exports = (app) => {
  app.use('/scores', scoreRouter);
}