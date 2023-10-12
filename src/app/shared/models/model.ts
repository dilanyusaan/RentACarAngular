import { Brand } from "./brand";

export interface Model{
    id:number,
    name:string,
    brandId:number
    brand:Brand,
}
