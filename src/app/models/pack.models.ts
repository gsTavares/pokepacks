import { Pokemontcg } from "./pokemontcg.models"

type Pack = {
    id?: number,
    name: string,
    cards: Pokemontcg[]
}

export { Pack }