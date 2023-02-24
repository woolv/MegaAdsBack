import {AdEntity} from "../types";
import {ValidationError} from "../utils/error";

interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export class AdRecord implements AdEntity {
    public description: string;
    public id: string;
    public name: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;

    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Nazwa ogłoszenie nie może być pusta ani przekraczać 100 znaków.');
        }
        if (obj.description.length > 1000) {
            throw new ValidationError('Treść ogłoszenie  nie może przeekraczać pusta ani przekraczać 1000 .');
        }

        if(obj.price < 0 || obj.price > 999999) {
            throw new ValidationError('Cena nie może być mniejsza niż 0 lub większa niż 999999.');
        }
        // @TODO: Check if URL is valid!
        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Link ogłoszenia nie może być pusty ani przekraczać 100 znaków.');
        }
        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('Nie można zlokalizować ogłoszenia')
        }
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;
    }
}