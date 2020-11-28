export interface Country {
    continent: string;
    country: string;
    population: number;
    cases: Cases;
    deaths: Deaths;
}

interface Cases {
    active: number | string;
    new: number | string;
    recovered: number | string;
    total: number;
}

interface Deaths {
    total: number;
    new: number | string;
}