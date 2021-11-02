import { Pony } from './pony';

export class Race {

    id_race: number;
    location: string;
    date: Date;
    ponies: Array<Pony>;

    constructor(id?: number, location?: string, date?: Date) {
        this.id_race = id === undefined ? 0 : id;
        this.ponies = [];
        this.location = location === undefined ? '' : location;
        this.date = date === undefined ? new Date() : date;
    }
}
