/*
global

chai,
jsforms,
analyzer
*/
'use strict';

const assert = chai.assert;

describe('Forms - Eight Form', function () {

    describe('greeter', function () {

        it('W ciągu znaków "Witaj Świecie". Znajdzi w nim Świecie i zamień je na Użytkowniku, jeśli ciąg nie zawiera Świecie, to nic nie zmieniamy!" ', function () {
            assert.equal(jsforms.greet("Witaj Świecie"), 'Witaj Użytkowniku');
        });

        it('W ciągu znaków "Witaj Świecie" jeśli ciąg nie zawiera Świecie, to nic nie zmieniamy!" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            assert.equal(jsforms.greet("Witaj "+abc), 'Witaj '+abc);
        });
    });

    describe('zamienPrzecinkiNaSredniki', function () {

        it('zamienPrzecinkiNaSredniki" ', function () {
            assert.equal(jsforms.zamienPrzecinkiNaSredniki(","), ';');
        });

        it('zamien wszystkie sredniki" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            assert.equal(jsforms.zamienPrzecinkiNaSredniki("Witaj, "+abc+ ",,,"), 'Witaj; '+abc+";;;");
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

