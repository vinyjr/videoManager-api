import { fastify } from 'fastify'

const server = fastify();

server.get('/', () => {
    return console.log('Server is running')
})

server.listen({
    port: 3333,
})