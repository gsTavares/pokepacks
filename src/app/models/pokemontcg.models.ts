type Pokemontcg = {
    id: string,
    name: string,
    supertype: string,
    types: string[],
    subtypes: string[],
    images: {
        small: string,
        large: string
    }
}

type PokemontcgResponse = {
    data: Pokemontcg[],
    count: number,
    page: number,
    pageSize: number,
    totalCount: number
}

export { PokemontcgResponse };