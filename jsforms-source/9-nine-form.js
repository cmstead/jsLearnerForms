// eslint-disable-next-line
const jsforms = (function () {
    'use strict';

    function pomnozRazy3(tablicaLiczb) {
        
        return tablicaLiczb;
    }

    function zamieniCoDruga(tablicaLiter){
        tablicaLiter[1].toUpperCase();
        return tablicaLiter
    }

    function usunPrzedostawni(wyrazy){

        return wyrazy
    }

    function zamienNaDuze(wyrazyDoZmiany){

        return wyrazyDoZmiany
    }

    return {
        pomnozRazy3: pomnozRazy3,
        zamienCoDruga: zamienCoDruga,
        usunPrzedostawni: usunPrzedostawni,
        zamienNaDuze: zamienNaDuze
    };
})();
