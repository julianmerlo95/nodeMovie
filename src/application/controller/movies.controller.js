const request = require("../../utils/axios/index");
const { errorHandler } = require("../../utils/errors/errors");
const errorCatalog = require("../../utils/errors/movie.errors.json");

module.exports = async (req, res) => {
  try {
    const title = req.query.title;
    const type = req.query.type;

    const response = await request(title, type);

    const arraySort = response.sort((a, b) => b.Year - a.Year);

    res.json({
      data: arraySort,
      statusCode: 200,
    });
  } catch (err) {
    err.code = "not_found";
    errorHandler(err, errorCatalog);
  }
};
