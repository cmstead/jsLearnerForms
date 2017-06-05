'use strict';

Object.defineProperty(global, _array_, {
    get: function () { return []; }
});

Object.defineProperty(global, _boolean_, {
    get: function () { return false; }
});

Object.defineProperty(global, _function_, {
    get: function () { return () => null; }
});

Object.defineProperty(global, _null_, {
    get: function () { return null; }
});

Object.defineProperty(global, _number_, {
    get: function () { return 0; }
});

Object.defineProperty(global, _object_, {
    get: function () { return {}; }
});

Object.defineProperty(global, _something_, {
    get: function () { return null; }
});

Object.defineProperty(global, _string_, {
    get: function () { return ''; }
});

