import {AI} from "../../../data/Ships";
import hinnyAttack from "../../../data/hinny/HinnyAttack";
import fgaAttack from "../../../data/fga/FgaAttack";

export default function SquadAttack(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return hinnyAttack(props);
        case AI.FGA:
            return fgaAttack(props);
        default:
            console.log("Ai engine not recognized in component SquadAttack: " + props.aiEngine);
    }
}