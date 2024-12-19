import { randomUUID } from 'crypto'

export class dataBaseMemory {
    #videos = new Map()

    list() {
        return this.#videos.values()
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