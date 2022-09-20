/*
global

chai,
jsforms,
analyzer
*/
'use strict';

const assert = chai.assert;
const expect = chai.expect;
//require('mocha-sinon');
const spy  = sinon.spy()//require('sinon');

describe('Forms - Seven Form', function () {

    describe('f1', function () {

        it('Zabezpiecz funkcję f1 przed wartością zero. Gdy zero ma wypisać "błąd" Na konsoli." ', function () {
            assert.equal(jsforms.f1(0),"błąd");
        });

        it('Zabezpiecz funkcję f1 przed wartością zero. Gdy zero ma wypisać "błąd" Na konsoli." ', function () {
            assert.equal(jsforms.f1("0"),"błąd");
        });

        it('Gdy wartości nie zero zwraca co otrzymała" ', function () {
            assert.equal(jsforms.f1(1), 1);
        });
    });

    describe('f2', function () {

        it('Zabezpieczyć funkcję f2 przed pustym ciągiem znaków oraz przed wartością null. Gdy nie poprawne wartości rzucić błąd (ang. Error) a w komunikacie błędu wypisać "Pusta wartość"." ', function () {
            expect(function(){
                jsforms.f2()
            }).to.throw('Pusta wartość');
        });

        it('Zabezpieczyć funkcję f2 przed pustym ciągiem znaków oraz przed wartością null. Gdy nie poprawne wartości rzucić błąd (ang. Error) a w komunikacie błędu wypisać "Pusta wartość"." ', function () {
            expect(function(){
                jsforms.f2(null)
            }).to.throw('Pusta wartość');
        });

        it('Funkcja f2 dla wartości poprwanych zwraca co otrzymała." ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7);
            assert.equal(jsforms.f2(abc), abc);
        });
    });

    describe('f3', function () {
        afterEach(() => {
            // Restore the default sandbox here
            sinon.restore();
          });

        it('Zabezpieczyć funkcję f3 przed tablicą złożoną z zero elementów. przy takiej wartości zwrócić zero na konsolę', function () {
            let spy = sinon.spy(console, 'log');
            jsforms.f3([])
            assert(spy.calledWith(0));
            spy.restore();
        });

        it('Zabezpieczyć funkcję f3 przed tablicą złożoną z zero elementów. przy takiej wartości zwrócić zero z funkcji', function () {
            let pusta=[];
            assert.equal(jsforms.f3(pusta), 0);
        });

        it('gdy tablica poprawna to zwracamy tablicę" ', function () {
            assert.equal(jsforms.f3([1]), [1]);
        });
    });

    describe('f4', function () {
        it('Zebezpieczyć funkcję f4 przed liczbami mniejszymi od zera oraz innymi niż liczby całkowite. ma zwrócić "Otrzymano taLiczbaKtórąWprowadził, oczekiwano wartości całkowitej i dodatniej."', function () {
            assert.equal(jsforms.f4(-1), "Otrzymano -1, oczekiwano wartości całkowitej i dodatniej.");
        });

        it('gdy tablica poprawna to zwracamy tablicę" ', function () {
            assert.equal(jsforms.f4(1), 1);
        });

        it('Zebezpieczyć funkcję f4 przed liczbami mniejszymi od zera oraz innymi niż liczby całkowite. ma zwrócić "Otrzymano taLiczbaKtórąWprowadził, oczekiwano wartości całkowitej i dodatniej."', function () {
            assert.equal(jsforms.f4(1.1), "Otrzymano 1.1, oczekiwano wartości całkowitej i dodatniej.");
        });

        it('Zebezpieczyć funkcję f4 przed liczbami mniejszymi od zera oraz innymi niż liczby całkowite. ma zwrócić "Otrzymano taLiczbaKtórąWprowadził, oczekiwano wartości całkowitej i dodatniej."', function () {
            assert.equal(jsforms.f4(0), "Otrzymano 0, oczekiwano wartości całkowitej i dodatniej.");
        });

    });
    // You're done!
    // Good job! I like what you got.
});

