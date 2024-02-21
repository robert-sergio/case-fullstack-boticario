require('dotenv').config()

async function auth(request, reply) {
    const apiKey = request.headers['x-api-key']
    const myKey = process.env.APIKEY

    if (!apiKey || apiKey != myKey){
        return reply.code(401).send({error:'Unauthorized'})
    }
}

module.exports = auth