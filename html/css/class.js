const makeSaluteClass = (term) =>
  class {
    constructor(x) {
      this.x = x;
    }

    salute(y) {
      console.log(`${this.x} says "${term}" to ${y}`);
    }
  };

const Spanish = makeSaluteClass("HOLA");
new Spanish("ALFA").salute("BETA");


new (makeSaluteClass("HELLO"))("GAMMA").salute("DELTA");

const fullSalute = (c, x, y) => new c(x).salute(y);


const French = makeSaluteClass("BON JOUR");

fullSalute(French, "EPSILON", "ZETA");

