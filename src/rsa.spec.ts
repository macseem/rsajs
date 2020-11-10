import {crypt, decrypt} from "./rsa";

describe('RSA', () => {
    it('should cipher and decipher info', () => {
        const p = 3;
        const q = 5;
        const n = p*q; //15
        const fiN = (p-1)*(q-1); //8
        const e = 3;
        const d = 11;
        // (d*e)%fiN === 1
        console.log((d*e)%fiN);



        for(let m=0; m<15; m++) {
            console.log(m, crypt(m, e, n), decrypt(crypt(m, e, n), d, n))
            expect(decrypt(crypt(m, e, n), d, n)).toEqual(m);
        }
    })
})