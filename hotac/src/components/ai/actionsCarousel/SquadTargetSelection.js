import {AI} from "../../../data/Ships";
import hinnyTargetSelection from "../../../data/hinny/HinnyTargetSelection";
import fgaTargetSelection from "../../../data/fga/FgaTargetSelection";

export default function SquadTargetSelection(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return hinnyTargetSelection(props);
        case AI.FGA:
            return fgaTargetSelection(props);
        default:
            console.log("Ai engine not recognized in component SquadTargetSelection: " + props.aiEngine);
    }
}