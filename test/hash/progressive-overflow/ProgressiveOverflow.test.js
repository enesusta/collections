import ProgressiveOverflow from '../../../src/hash/progressive-overflow/ProgressiveOverflow';

describe('progressive overflow test', () => {

    it('test -1', () => {

        const janeJones = {
            id: 123,
            name: "Jane",
            surname: "Jones"
        };

        const johnDoe = {
            id: 4567,
            name: "John",
            surname: "Doe"
        };

        const marySmith = {
            id: 22,
            name: "Mary",
            surname: "Smith"
        };

        const mikeWilson = {
            id: 3256,
            name: "Mike",
            surname: "Wilson"
        };


        const pof = new ProgressiveOverflow();
        pof.put('Jones', janeJones);
        pof.put('Doe', johnDoe);
        pof.put('Wilson', mikeWilson);
        pof.put('Smith', marySmith);

        console.log(pof.hmap);

    });

});
