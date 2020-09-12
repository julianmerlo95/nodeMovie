function send(statusCode, body) {
  try {
    const response = { statusCode };

    if (statusCode == "204") {
      return response;
    }

    if (!body) {
      throw new Error("internalErrorEmptyBodyInResponse");
    }

    response.body = JSON.stringify(body);

    return response;
  } catch (error) {
    if (error.message.includes("Unexpected token")) {
      error.message = "badInputInSendMethod";
    }
  }
}

function errorHandler(error, errorCatalog) {
  const errorResponse =
    errorCatalog[error.code] || errorCatalog["internal_server_error"];
  const { code, message, severity } = errorResponse;
  return send(errorResponse.status, { code, message, severity });
}

module.exports = { errorHandler };
