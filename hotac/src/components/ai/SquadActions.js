import {AI} from "../../data/Ships";
import hinnyShipActions from "../../data/hinny/HinnyShipActions";
import fgaShipActions from "../../data/fga/FgaShipActions";

export default function SquadActions(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return hinnyShipActions(props);
        case AI.FGA:
            return fgaShipActions(props);
        default:
            console.log("Ai engine not recognized in component SquadActions: " + props.aiEngine);
    }
}