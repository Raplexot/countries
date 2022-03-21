export interface Countries {
    name: Name
    capital: string[]
    flag: string
    population: number
    altSpellings: string[];
}


export interface Name {
    common: string
    official: string
    nativeName: NativeName
}

export interface NativeName {
    ukr: Translation
}

export interface Translation {
    official: string
    common: string
}