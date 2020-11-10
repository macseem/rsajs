import {modPow} from "./mod-pow";

export const crypt = (m:number, e:number, n:number) => modPow(m,e,n);
export const decrypt = (c:number, d:number, n:number) => modPow(c,d,n);