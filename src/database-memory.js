import { randomUUID } from 'crypto'

export class dataBaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.entries()).map((videoData) => {
            const id = videoData[0]
            const data = videoData[1]

            return {
                id,
                ...data
            }
        })
    }

    create(video) {
        const id = randomUUID()

        this.#videos.set(id, video)
    }

    update(video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}