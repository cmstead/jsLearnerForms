const analyzer = (function () {
    function analyze({ formNumber, analyzerName, analyzerOptions }) {
        return fetch(`/analyze/${formNumber}/${analyzerName}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(analyzerOptions)
        })
            .then(response => response.json())
    }

    return {
        analyze: analyze
    };
})();
