"use strict";
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger Llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen Llamado');
        }
        get FullName() {
            return `${this.name} - ${this.realName}`;
        }
        set FullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser de al menos 3 caracteres');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.FullName);
})();
//# sourceMappingURL=gets&sets.js.map