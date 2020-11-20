import Select from "react-select";
import {AI, Ships, Stats} from "../../data/Ships";
import SquadManeuverGenerator from "./SquadManeuverGenerator";
import React, {useContext} from "react";
import {TargetPositionContext} from "../../context/Contexts";

export default function SquadManeuver(props) {
    const positionContext = useContext(TargetPositionContext);
    const shipType = positionContext.shipType;
    const aiEngine = positionContext.aiEngine;

    let aiValues = [];
    for (let ai of Ships[shipType][Stats.ai]) {
        aiValues.push({value: ai, label: ai});
    }

    return (
        <div>
        <span>
            <SquadManeuverGenerator  />
            <br/>
            <Select options={aiValues} defaultValue={{label: aiEngine, value: aiEngine}}
                    onChange={e => positionContext.setAiEngine(e.value)}/>
            {/*  Handles visibility of the check-box according to selected Ai engine */
                aiEngine === AI.FGA &&
                <label>
                    <input type="checkbox" value={positionContext.stressed} onChange={e => positionContext.handleStress(e)}/>
                    Is ship stressed?
                </label>}
                        </span>

        </div>
    )
}