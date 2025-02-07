import { fastify } from 'fastify'
import { dataBaseMemory } from './database-memory.js'

const server = fastify();

const database = new dataBaseMemory()

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration
    })
    return reply.status(201).send();
})

server.get('/videos', () => {
    const videos = database.list()

    return videos
})

server.put('/videos/:id', (request) => {
    const videoId = request.params.id

    const { title, description, duration } = request.body

    database.update(videoId,{
        title,
        description,
        duration
    })

    return request.status(204).send()
})

server.delete('/videos/:id', (request) => {
    const videoId = request.params.id

    const { title, description, duration } = request.body

    const video = database.update(videoId, {
        title,
        description,
        duration
    })
})

server.listen({
    port: 3333,
})