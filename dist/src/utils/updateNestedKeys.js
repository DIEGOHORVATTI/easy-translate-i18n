"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "updateNestedKeys", {
    enumerable: true,
    get: function() {
        return updateNestedKeys;
    }
});
const _translateValue = require("./translateValue");
const updateNestedKeys = async (existingObj, newObj, value)=>{
    for(const key in newObj){
        if (Object.prototype.hasOwnProperty.call(newObj, key)) {
            if (!(key in existingObj)) {
                if (typeof newObj[key] === 'object' && newObj[key] !== null) {
                    existingObj[key] = {};
                    await updateNestedKeys(existingObj[key], newObj[key], value);
                } else {
                    existingObj[key] = await (0, _translateValue.translateValue)(newObj[key], value);
                }
            } else if (typeof newObj[key] === 'object' && newObj[key] !== null) {
                await updateNestedKeys(existingObj[key], newObj[key], value);
            }
        }
    }
};
