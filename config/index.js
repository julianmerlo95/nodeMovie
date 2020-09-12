process.env.PORT = process.env.PORT || 3000;

const config = {
  application: {
    cors: {
      server: [
        {
          origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
          credentials: true,
        },
      ],
    },
  },
};

module.exports = config;
