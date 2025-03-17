"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "translatte", {
    enumerable: true,
    get: function() {
        return translatte;
    }
});
const translatte = async ({ text, from, to })=>fetch(`https://translate-google-api-v1.vercel.app/translate`, {
        method: 'POST',
        body: JSON.stringify({
            text,
            from,
            to
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        return response.json();
    }).catch((error)=>{
        throw new Error(error);
    });
