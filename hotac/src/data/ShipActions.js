import React from 'react';
import {Ships} from "./Ships";

export default function ShipActions(props) {
    switch (props.shipType) {
        case Ships.TIEIN.id:
            return <TIEIN/>;
        case Ships.TIELN.id:
            return <TIELN/>;
        case Ships.TIESA.id:
            return <TIESA/>;
        case Ships.VT49.id:
            return <VT49/>;
        default:
            console.log("Component ShipActions didn't recognize shipType: " + props.shipType);
    }
}

const TIELN = () => (
    <ol>
        <li>Remove 1 stress token or take <i className="xwf xwing-miniatures-font-crit"/> action.</li>
        <li><i className="xwf x-barrelroll"/> to avoid target's firing arc and
            still have it in your firing arc.
        </li>
        <li><i className="xwf x-barrelroll"/> to get target in your firing arc.</li>
        <li><i className="xwf x-focus"/> if you have target in your firing arc.</li>
        <li><i className="xwf x-barrelroll"/> to avoid target's firing arc.</li>
        <li><i className="xwf x-evade"/></li>
    </ol>
);

const TIEIN = () => (
    <ol>
        <li>Remove 1 stress token or take <i className="xwf xwing-miniatures-font-crit"/> action.</li>
        <li><i className="xwf x-focus"/> <i className="xwf x-linked"/><i className="xwf x-barrelroll"/> to avoid
            target's
            firing arc and still have it in your firing arc.
        </li>
        <li><i className="xwf x-focus"/> <i className="xwf x-linked"/><i className="xwf x-boost"/> to avoid target's
            firing arc and still have it in your firing arc
        </li>
        <li><i className="xwf x-focus"/> <i className="xwf x-linked"/><i className="xwf x-barrelroll"/> to get target in
            your firing arc or improve attack.
        </li>
        <li><i className="xwf x-focus"/> <i className="xwf x-linked"/><i className="xwf x-boost"/> to get target in
            your firing arc or improve attack.
        </li>
        <li><i className="xwf x-barrelroll"/> <i className="xwf x-linked"/><i className="xwf x-boost"/> to get target in
            your firing arc.
        </li>
        <li><i className="xwf x-boost"/> <i className="xwf x-linked"/><i className="xwf x-barrelroll"/> to get target in
            your firing arc.
        </li>
        <li><i className="xwf x-focus"/> if you have target in the target arc</li>
        <li><i className="xwf x-evade"/> <i className="xwf x-linked"/><i className="xwf x-barrelroll"/> to avoid your
            target's firing arc.
        </li>
        <li><i className="xwf x-evade"/> <i className="xwf x-linked"/><i className="xwf x-boost"/> to avoid your target's
            firing arc.
        </li>
        <li><i className="xwf x-evade"/>.</li>
    </ol>
);

const TIESA = () => (
    <ol>
        <li>Remove 1 stress token or take <i className="xwf xwing-miniatures-font-crit"/> action.</li>
        <li><i className="xwf x-reload"></i> if there are no charges on your <i className="xwf x-torpedo"></i> or
            <i className="xwf x-missile"></i>.</li>
        <li><i className="xwf x-barrelroll"/> <i className="xwf x-linked"/><i className="xwf x-lock"/> target, to avoid
            target's firing arc and still get it in your firing arc.
        </li>
        <li><i className="xwf x-barrelroll"/> <i className="xwf x-linked"/><i className="xwf x-lock"/> target, to get
            target in your firing arc.
        </li>
        <li><i className="xwf x-lock"/> target if it is in your firing arc.</li>
        <li><i className="xwf x-barrelroll"/> <i className="xwf x-linked"/><i className="xwf x-lock"/> target, to avoid
            target's firing arc.
        </li>
        <li><i className="xwf x-reload"></i> if there are inactive charges on <i className="xwf x-torpedo"></i> or
            <i className="xwf x-missile"></i>.</li>
        <li><i className="xwf x-focus"/>.</li>
    </ol>
);

const VT49 = () => (
    <ol>
        <li>Remove 1 stress token or take <i className="xwf xwing-miniatures-font-crit"/> action.</li>
        <li><i className="xwf x-rotatearc"/> to get target in your firing arc.</li>
        <li><i className="xwf x-reinforce"/> (fore) if 2 or more ships in front of you have you in firing arc.</li>
        <li><i className="xwf x-reinforce"/> (aft) if 2 or more ships behind you have you in firing arc.</li>
        <li><i className="xwf x-lock"/> target.</li>
        {/* todo: onvalidates need of further steps*/}
        <li><i className="xwf x-focus"/> if there is a target in your firing arc.</li>
        <li><i className="xwf x-coordinate"/> the nearest friendly ship.</li>
    </ol>
);