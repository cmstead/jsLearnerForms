/*
global

chai,
jsforms,
analyzer
*/
'use strict';

const assert = chai.assert;
const expect = chai.expect;
const spy  = sinon.spy()//require('sinon');

describe('Forms - Nine Form', function () {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    describe('pomnozRazy3', function () {

        it('W tablicy liczb pomnóż każdy wyraz przez 3" ', function () {
            assert.deepEqual(jsforms.pomnozRazy3([1,2,3]), [3,6,9]);
        });

        it('W tablicy liczb pomnóż każdy wyraz przez 3 dla losowych liczb ma dzialać.', function () {
            let rand1=getRandomInt(1,40)
            let rand2=getRandomInt(1,40)
            let rand3=getRandomInt(1,40)
            let abc = [rand1,rand2,rand3];
            assert.deepEqual(jsforms.pomnozRazy3(abc), [rand1*3,rand2*3,rand3*3]);
        });

        it('W tablicy liczb pomnóż każdy wyraz przez 3 dla dowolnej długości tablicy ma działać.', function () {
            let rand1=getRandomInt(1,40)
            let rand2=getRandomInt(1,40)
            let rand3=getRandomInt(1,40)
            let rand4=getRandomInt(1,40)
            let abc = [rand1,rand2,rand3,rand4];
            assert.deepEqual(jsforms.pomnozRazy3(abc), [rand1*3,rand2*3,rand3*3,rand4*3]);
        });

        it('W tablicy liczb pomnóż każdy wyraz przez 3 dla dowolnej długości tablicy ma działać.', function () {
            let rand1=getRandomInt(1,40)
            let rand2=getRandomInt(1,40)
            let rand3=getRandomInt(1,40)
            let rand4=getRandomInt(1,40)
            let rand5=getRandomInt(1,40)
            let abc = [rand1,rand2,rand3,rand4,rand5];
            assert.deepEqual(jsforms.pomnozRazy3(abc), [rand1*3,rand2*3,rand3*3,rand4*3,rand5*3]);
        });
    });
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    describe('W tablicy liter co drugą literę zamień na dużą literę.', function () {

        it('W tablicy liter co drugą literę zamień na dużą literę.', function () {
            let litery=['a','b']
            assert.deepEqual(jsforms.zamienCoDruga(litery), ['a','B']);
        });

        it('zamien co drugą literę.', function () {
            let a = alphabet[Math.floor(Math.random() * alphabet.length)]
            let b = alphabet[Math.floor(Math.random() * alphabet.length)]
            let c = alphabet[Math.floor(Math.random() * alphabet.length)]
            let tab=[a,b,c]
            assert.deepEqual(jsforms.zamienCoDruga(tab), [a,b.toString().toUpperCase(),c]);
        });

        it('zamien co drugą literę.', function () {
            let a = alphabet[Math.floor(Math.random() * alphabet.length)]
            let b = alphabet[Math.floor(Math.random() * alphabet.length)]
            let c = alphabet[Math.floor(Math.random() * alphabet.length)]
            let d = alphabet[Math.floor(Math.random() * alphabet.length)]
            let tab=[a,b,c,d]
            assert.deepEqual(jsforms.zamienCoDruga(tab), [a,b.toString().toUpperCase(),c,d.toString().toUpperCase()]);
        });

        it('zamien co drugą literę w większej tablicy.', function () {
            let a = alphabet[Math.floor(Math.random() * alphabet.length)]
            let b = alphabet[Math.floor(Math.random() * alphabet.length)]
            let c = alphabet[Math.floor(Math.random() * alphabet.length)]
            let d = alphabet[Math.floor(Math.random() * alphabet.length)]
            let e = alphabet[Math.floor(Math.random() * alphabet.length)]
            let f = alphabet[Math.floor(Math.random() * alphabet.length)]
            let g = alphabet[Math.floor(Math.random() * alphabet.length)]
            let h = alphabet[Math.floor(Math.random() * alphabet.length)]
            let tab=[a,b,c,d,e,f,g,h]
            assert.deepEqual(jsforms.zamienCoDruga(tab), [a,b.toString().toUpperCase(),c,d.toString().toUpperCase(),e,f.toString().toUpperCase(),g,h.toString().toUpperCase()]);
        });
    });

    describe('polacz w ciag znakow', function () {

        afterEach(() => {
            // Restore the default sandbox here
            sinon.restore();
          });


        it('W tablicy wyrazów sklej wszystkie wyrazy w jeden ciąg znaków i zwróć go.', function () {
            assert.equal(jsforms.sklejIWypiszDlugosc(["Ala", "ma", "kota"]), "Ala ma kota");
        });

        
        it('Niech funkcja wypisuje na konsolę długość utworzonego wyrazu.', function () {
            let spy = sinon.spy(console, 'log');
            jsforms.sklejIWypiszDlugosc(["Ala", "ma", "kota"]);
            assert(spy.calledWith(9));
            spy.restore();
        });

        it('W tablicy wyrazów sklej wszystkie wyrazy w jeden ciąg znaków i zwróć go.', function () {
            let a =(Math.random() + 1).toString(36).substring(7);
            let b =(Math.random() + 1).toString(36).substring(7);
            let c =(Math.random() + 1).toString(36).substring(7);
            assert.equal(jsforms.sklejIWypiszDlugosc([a, b, c]), a+b+c);
        });
    });

    describe('Zamienianie liter w słowach', function () {

        afterEach(() => {
            // Restore the default sandbox here
            sinon.restore();
          });

        it('tablicy wyrazaów wypisz te wyrazy, które zawierają literę a', function () {
            let tab=["abc","def"]
            let spy = sinon.spy(console, 'log');
            jsforms.zwrocBezA([tab]);
            assert(spy.calledWith("abc"));
            spy.restore();
        });

        it('Wyrazy bez a niech zwraca funkcja', function () {
            assert.equal(jsforms.zwrocBezA(abc), ["def"]);
        });

        it('zamien na duze litery a znak dolara na znak euro €" ', function () {
            let abc = (Math.random() + 1).toString(36).substring(7)+"a";
            let bezA = (Math.random() + 1).toString(36).substring(7).replaceAll("a","b")
            assert.equal(jsforms.zwrocBezA([bezA, abc]), [bezA]);
        });
    });
    // You're done!
    // Good job! I like what you got.

});

