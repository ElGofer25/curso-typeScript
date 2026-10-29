"use strict";
((() => {
    class Apocalipsis {
        name;
        static intance;
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis... El único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Soy Apocalipsis... El único y poderoso');
    console.log(apocalipsis);
}))();
//# sourceMappingURL=private-constructor.js.map