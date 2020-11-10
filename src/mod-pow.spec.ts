import {modPow} from "./mod-pow";

describe('modPow', () => {
    it('should calculate correctly power by module', () => {
        expect(modPow(3,2,7)).toEqual(2);
    });
});