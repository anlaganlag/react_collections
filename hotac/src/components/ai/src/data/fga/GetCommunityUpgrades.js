import {Ships} from "../Ships";
import {CommunityUpgrades} from "./CommunityUpgrades";
import {getAdjustedRandomNumber} from "../../components/ai/upgrades/UpgradesGenerator";

export default function getCommunityUpgrades(shipType, playersIni, upgradeRandNum, isElite) {
    let shipTypeUpgrades = [];
    console.log("*** GET COMMUNITY UPGRADES: " + shipType + " ***");

    switch (shipType) {
        case Ships.TIEIN.id:
            shipTypeUpgrades = CommunityUpgrades.TIEIN;
            break;
        case Ships.TIELN.id:
            shipTypeUpgrades = CommunityUpgrades.NO_UPGRADE;
            break;
        case Ships.TIESA.id:
            shipTypeUpgrades = CommunityUpgrades.TIESA;
            break;
        case Ships.VT49.id:
            shipTypeUpgrades = CommunityUpgrades.VT49;
            break;
        default:
            shipTypeUpgrades = CommunityUpgrades.NO_UPGRADE;
            console.log("Component getCommunityUpgrades didn't recognize shipType: " + shipType);
    }

    /* random number is adjusted to the number of upgrades the ship type has */
    let adjustedRandNum = getAdjustedRandomNumber(shipTypeUpgrades.length);

    const upgrades = [...shipTypeUpgrades[adjustedRandNum]];

    /* if ship is not elite, it will only get basic upgrade */
    if (isElite !== true) {
        upgrades.length = 1
    }

    /* only upgrades relevant to the players' rank are returned */
    /* elite ships always get first two upgrades and then possibly other upgrades accordign to Players' initiative */
    if (playersIni <= upgrades.length) {
        upgrades.length = (playersIni < 3 ? 3 : playersIni + 1);
    }

    return upgrades;



}