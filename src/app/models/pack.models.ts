import { Pokemontcg } from "./pokemontcg.models"

type Pack = {
    id?: number,
    name: string,
    cards: Pokemontcg[],
    createdAt?: Date
    updatedAt?: Date
}

export { Pack }