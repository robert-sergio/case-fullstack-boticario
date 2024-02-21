const swaggerOptions = {
  swagger: {
      info: {
          title: "My Title",
          description: "My Description.",
          version: "1.0.0",
      },
      host: "localhost",
      schemes: ["http", "https"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

async function configSwagger(fastify){
  fastify.register(require('@fastify/swagger'), swaggerOptions);
  fastify.register(require('@fastify/swagger-ui'), swaggerUiOptions);

  fastify.register((app, options, done) => {
    fastify.get("/", {
        schema: {
            tags: ["Default"],
            response: {
                200: {
                    type: "object",
                    properties: {
                        anything: { type: "string" },
                    },
                },
            },
        },
        handler: (req, res) => {
            res.send({ anything: "meaningfull" });
        },
    });
    done();
  });
}


module.exports = configSwagger