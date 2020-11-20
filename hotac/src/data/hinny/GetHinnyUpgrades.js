import {Ships} from "../Ships";
import {HinnySkills} from "./HinnyEliteSkills";

export const MISSILE_RANGE = Object.freeze(
    {
        R1: "1",
        R12: "1-2",
        R23: "2-3"
    });

//todo rewrite so that it will return all upgrades only to elite ships
export default function getHinnyUpgrades(shipType, playersIni, upgradeRandNum, isElite) {
    let shipTypeUpgrades = [];
    console.log("*** getting upgrades for ship type: " + shipType + " ***");
    console.log(isElite);

    switch (shipType) {
        case Ships.TIEIN.id:
            shipTypeUpgrades = TIEIN;
            break;
        case Ships.TIELN.id:
            shipTypeUpgrades = NO_UPGRADE;
            break;
        case Ships.TIESA.id:
            shipTypeUpgrades = TIESA;
            break;
        case Ships.VT49.id:
            shipTypeUpgrades = VT49;
            break;
        default:
            shipTypeUpgrades = NO_UPGRADE;
            console.log("Component HinnyShipUpgrades didn't recognize shipType: " + shipType);
    }

    /* random number is adjusted to the number of upgrades the ship type has */
    let adjustedRandNum = Math.round(upgradeRandNum / 10 * shipTypeUpgrades.length) - 1;

    /* some numbers may be rounded down to - 1 (todo rewrite) */
    if (adjustedRandNum < 0) {adjustedRandNum = 0}

    const upgrades = shipTypeUpgrades !== NO_UPGRADE ? [...shipTypeUpgrades[adjustedRandNum]] : NO_UPGRADE;
    /* only upgrades relevant to the players' rank are returned */
    if (playersIni <= upgrades.length) {
        upgrades.length = (playersIni === 1 ? 2 : playersIni);
    }
    /* if ship is not elite, only basic upgrade is returned */
    if (!isElite) {
        upgrades.length = 1;
    }
    console.log(upgrades);
    for (let upgrade of upgrades) {
        console.log("upgrades after changes: " + upgrade[0]["skillName"]);
    }
    return upgrades;
}

/* Fallback in case that selected ship has no defined upgrades. */
const NO_UPGRADE = [
    [{skillName: "-", skillDescription: "No upgrade equipped."}, 2, 5, {CHARGE: null, ATTACK: null}]
];

/* Each skill is specified by its description, initiative, XP and optionally charges (number of charges, recharge / round etc) */
/* HinnySkills.Skill, Initiative, Xp, {OptionalParameter: value...}*/
const TIEIN = [
    [
        [HinnySkills.hullUpgrade, 2, 6, {}],
        [HinnySkills.outmaneuver, 3, 12, {}],
        [HinnySkills.shieldUpgrade, 4, 14, {}],
        [HinnySkills.turrPhennir, 5, 16, {}],
        [HinnySkills.marksmanship, 6, 18, {}],
        [HinnySkills.gideonHask, 7, 20, {}]
    ],
    [
        [HinnySkills.crackShot, 1, 5, {CHARGE: 1, RECHARGE: 0}],
        [HinnySkills.hullUpgrade, 2, 10, {}],
        [HinnySkills.daredevil, 3, 12, {}],
        [HinnySkills.trickShot, 4, 14, {}],
        [HinnySkills.staticDischargeVanes, 5, 16, {}],
        [HinnySkills.mauler, 6, 18, {}]
    ],
    [
        [HinnySkills.hullUpgrade, 1, 5, {}],
        [HinnySkills.wampa, 2, 10, {CHARGE: 1, RECHARGE: 1}],
        [HinnySkills.ruthless, 3, 12, {}],
        [HinnySkills.nightBeast, 4, 14, {}],
        [HinnySkills.shieldUpgrade, 5, 16, {}],
        [HinnySkills.juke, 6, 18, {}]
    ],
    [
        [HinnySkills.crackShot, 2, 6, {CHARGE: 1, RECHARGE: 0}],
        [HinnySkills.shieldUpgrade, 3, 12, {}],
        [HinnySkills.predator, 4, 14, {}],
        [HinnySkills.afterburners, 5, 16, {}],
        [HinnySkills.juke, 6, 18, {}],
        [HinnySkills.soontirFel, 7, 20, {}]
    ],
    [
        [HinnySkills.stealthDevice, 2, 6, {CHARGE: 1}],
        [HinnySkills.ruthless, 3, 12, {}],
        [HinnySkills.valenRudor, 4, 14, {}],
        [HinnySkills.hullUpgrade, 5, 16, {}],
        [HinnySkills.outmaneuver, 6, 18, {}],
        [HinnySkills.scourgeSkutu, 5, 20, {}]
    ],
    [
        [HinnySkills.stealthDevice, 1, 5, {CHARGE: 1}],
        [HinnySkills.afterburners, 2, 10, {}],
        [HinnySkills.loneWolf, 3, 12, {}],
        [HinnySkills.elusive, 4, 14, {CHARGE: 2, RECHARGE: 1}],
        [HinnySkills.marksmanship, 5, 16, {}],
        [HinnySkills.seynMarana, 6, 18, {}]
    ]
];


const TIESA = [
    [
        [HinnySkills.protonBombs, 2, 6, {CHARGE: 2, RECHARGE: 0}],
        [HinnySkills.clusterMissiles, 3, 12, {ATTACK: 3, RANGE: MISSILE_RANGE.R12, CHARGE: 4}],
        [HinnySkills.saturationSalvo, 4, 14, {}],
        [HinnySkills.debrisGambit, 6, 15, {}],
        [HinnySkills.protonTorpedoes, 6, 18, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnySkills.munitionFailsafe, 7, 20, {}]
    ],
    [
        [HinnySkills.plasmaTorpedoes, 2, 6, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnySkills.connerNets, 3, 12, {CHARGE: 1}],
        [HinnySkills.captainJonus, 4, 14, {}],
        [HinnySkills.shieldUpgrade, 5, 16, {}],
        [HinnySkills.diamondBoronMissiles, 6, 18, {ATTACK: 3, RANGE: MISSILE_RANGE.R23, CHARGE: 3}],
        [HinnySkills.swarmTactics, 7, 20, {}]
    ],
    [
        [HinnySkills.protonBombs, 2, 6, {CHARGE: 2}],
        [HinnySkills.protonTorpedoes, 2, 10, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnySkills.deathFire, 2, 10, {}],
        [HinnySkills.skilledBombardier, 4, 14, {}],
        [HinnySkills.electroProtonBomb, 4, 15, {CHARGE: 1}],
        [HinnySkills.ruthless, 6, 17, {}]
    ],
    [
        [HinnySkills.ionTorpedoes, 2, 6, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnySkills.proximityMines, 3, 12, {CHARGE: 2}],
        [HinnySkills.skilledBombardier, 3, 13, {}],
        [HinnySkills.connerNets, 4, 16, {CHARGE: 1}],
        [HinnySkills.concussionMissiles, 5, 17, {ATTACK: 3, RANGE: MISSILE_RANGE.R23, CHARGE: 3}],
        [HinnySkills.elusive, 6, 19, {}]
    ],
    [
        [HinnySkills.clusterMissiles, 2, 6, {ATTACK: 3, RANGE: MISSILE_RANGE.R12, CHARGE: 4}],
        [HinnySkills.majorRhymer, 3, 12, {}],
        [HinnySkills.advancedProtonTorpedoes, 3, 13, {ATTACK: 5, RANGE: MISSILE_RANGE.R1, CHARGE: 1}],
        [HinnySkills.bombletGenerator, 4, 15, {CHARGE: 3, RECHARGE: 1}],
        [HinnySkills.marksmanship, 5, 17, {}],
        [HinnySkills.shieldUpgrade, 6, 19, {}]
    ],
    [
        [HinnySkills.barrageMissiles, 2, 6, {ATTACK: 3, RANGE: MISSILE_RANGE.R23, CHARGE: 5}],
        [HinnySkills.munitionFailsafe, 2, 10, {}],
        [HinnySkills.swarmTactics, 3, 12, {}],
        [HinnySkills.advancedProtonTorpedoes, 4, 13, {ATTACK: 5, RANGE: MISSILE_RANGE.R1, CHARGE: 1}],
        [HinnySkills.proximityMines, 4, 15, {CHARGE: 2}],
        [HinnySkills.trickShot, 5, 17, {}]
    ]
];

//todo Hinny did not list ini and xps for despoiler, the values were eye-balled
const VT49 = [
    [
        [HinnySkills.despoiler, 1, 19, {}],
        [HinnySkills.veteranTurretGunner, 2, 21, {}],
        [HinnySkills.deathTroopers, 2, 23, {}],
        [HinnySkills.captainOicunn, 3, 25, {}],
        [HinnySkills.ruthless, 4, 27, {}],
        [HinnySkills.protonBombs, 4, 29, {CHARGE: 2}]
    ],
    [
        [HinnySkills.despoiler, 1, 19, {}],
        [HinnySkills.veteranTurretGunner, 2, 21, {}],
        [HinnySkills.deathTroopers, 2, 23, {}],
        [HinnySkills.captainOicunn, 3, 25, {}],
        [HinnySkills.ruthless, 4, 27, {}],
        [HinnySkills.protonBombs, 4, 29, {CHARGE: 2}]
    ],
];

//todo use or remove
/*const skillVars = Object.freeze(
    {
        CHARGE: "charge",
        RECHARGE: "recharge rate",
        ATTACK: "attack",
        RANGE: "attack range"

    }
);*/

