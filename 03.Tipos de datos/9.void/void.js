"use strict";
(() => {
    // void type is used to indicate that a function does not return a value
    // Traditional function declaration
    function callBatman() { }
    const callSuperman = () => {
        // This function does not return a value, so its return type is void
    };
    const a = callBatman();
    console.log(a); // Output: undefined / void type value
})();
//# sourceMappingURL=void.js.map