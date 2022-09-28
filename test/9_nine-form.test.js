/*
global

chai,
jsforms,
analyzer
*/
'use strict';

const assert = chai.assert;

describe('Forms - Nine Form', function () {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    describe('pomnozRazy3', function () {

        it('W tablicy liczb pomnóż każdy wyraz przez 3" ', function () {
            assert.equal(jsforms.pomnozRazy3([1,2,3]), [3,6,9]);
        });

        it('W tablicy liczb pomnóż każdy wyraz przez 3 dla losowych liczb ma dzialać.', function () {
            let rand1=getRandomInt(1,40)
            let rand2=getRandomInt(1,40)
            let rand3=getRandomInt(1,40)
            let abc = [rand1,rand2,rand3];
            assert.equal(jsforms.pomnozRazy3(abc), [rand1*3,rand2*3,rand3*3]);
        });

        it('W tablicy liczb pomnóż każdy wyraz przez 3 dla dowolnej długości tablicy ma działać.', function () {
            let rand1=getRandomInt(1,40)
            let rand2=getRandomInt(1,40)
            let rand3=getRandomInt(1,40)
            let rand4=getRandomInt(1,40)
            let abc = [rand1,rand2,rand3,rand4];
            assert.equal(jsforms.pomnozRazy3(abc), [rand1*3,rand2*3,rand3*3,rand4*3]);
        });
    });

    describe('W tablicy liter co drugą literę zamień na dużą literę.', function () {

        it('W tablicy liter co drugą literę zamień na dużą literę." ', function () {
            let litery=['a','b']
            assert.equal(jsforms.zamieniCoDruga(litery), ['a','A']);
        });

        it('zamien wszystkie sredniki" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            assert.equal(jsforms.zamieniCoDruga("Witaj, "+abc+ ",,,"), 'Witaj; '+abc+";;;");
        });
    });

    describe('usunPrzedostatni', function () {

        it('W ciągu znaków usuń przedostatni wyraz" ', function () {
            assert.equal(jsforms.usunPrzedostawni("Ala ma kota"), 'Ala kota');
        });

        it('usun przedostatni wyraz z ciagu znakow" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            assert.equal(jsforms.zamienPrzecinkiNaSredniki(abc +" " +abc+ " "+ abc + " "+abc), abc +" " +abc+ " "+abc);
        });
    });

    describe('zamien na duże litery', function () {

        it('W ciągu znaków usuń przedostatni wyraz" ', function () {
            assert.equal(jsforms.zamienNaDuze("Ala ma kota"), 'ALA MA KOTA');
        });

        it('zamien na duze litery" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            let checker=abc.toUpperCase();
            assert.equal(jsforms.zamienNaDuze(abc), checker);
        });

        it('zamien na duze litery a znak dolara na znak euro €" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            let checker=abc.toUpperCase()+" €";
            assert.equal(jsforms.zamienNaDuze(abc + " $"), checker);
        });
    });
    // You're done!
    // Good job! I like what you got.

});

