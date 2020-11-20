import getHinnyUpgrades from "../../data/hinny/GetHinnyUpgrades";
import {UPGRADES} from "../../data/Ships";

export default function getUpgrades(shipType, playersRank, upgradeSource, isElite) {
    let upgrades = [];
    const upgradeRandNum = Math.floor(Math.random() * 10) + 1;
    console.log("Rank: " + playersRank);
    console.log("Ship: " + shipType);
    console.log("Upgrades source: " + upgradeSource);

    switch (upgradeSource) {
        case UPGRADES.HINNY:
            console.log("getting Hinny upgrades");
            return getHinnyUpgrades(shipType, playersRank, upgradeRandNum, isElite);
        default:
            console.log("Function getUpgrades didn't recognize upgrades source: " + upgradeSource);
    }

    return upgrades;
}
