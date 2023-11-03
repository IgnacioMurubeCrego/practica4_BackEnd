export type Tardis = {
    dimensions : Array<Dimension>,
    camuflage : string,
    numOfRegen : number,
    year : number
}

export type Dimension = {
    planetas : Planet[]
}

export type Planet = {
    persons : Person[]
}

export type Person = {
    name : string
}