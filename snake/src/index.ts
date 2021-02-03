
import "./style/index.less"
class Planet {
    name: string;
    mass: number;
    constructor(inName: string, inMass: number) {
        this.name = inName;
        this.mass = inMass;
    }
}
const p = new Planet("名字", 30)
console.log(p.name);
