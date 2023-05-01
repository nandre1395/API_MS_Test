import swaggerJSDoc from 'swagger-jsdoc';
import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Configuración Api, la info
 */

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ai_Nodejs',
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:4000/api"
            },
            {
                url: "http://localhost:3000/api"
            }
        ],
    },
    apis: [
        "./routes/*.js"
    ],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

export default swaggerSpec;