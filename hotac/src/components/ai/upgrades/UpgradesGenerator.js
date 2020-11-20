import {Ships, UPGRADES} from "../../../data/Ships";
import {HinnyUpgrades} from "../../../data/hinny/HinnyUpgrades";
import {CommunityUpgrades} from "../../../data/fga/CommunityUpgrades";

export default function getUpgrades(shipType, playersRank, upgradesSource, isElite) {
    console.log("*** GET UPGRADES: ***");
    console.log("shipType, playersIni, upgradesSource, isElite: ");
    console.log(shipType + ", " + playersRank + ", " + upgradesSource + ", " + isElite);

    const shipTypeUpgrades = getShipTypeUpgrades(shipType, upgradesSource);
    const adjustedRandNum = getAdjustedRandomNumber(shipTypeUpgrades.length);
    let upgrades = [...shipTypeUpgrades[adjustedRandNum]];
    console.log("Upgrades: ");

    /* if ship is not elite, it will only get basic upgrade */
    if (isElite !== true) {
        upgrades.length = 1
    }

    /* only upgrades relevant to the players' rank are returned */

    /* Hinny's ypgrades */
    if (upgradesSource === UPGRADES.HINNY) {
        if (isElite !== true) {
            upgrades.length = 1;
        } else if (playersRank <= upgrades.length) {
            upgrades.length = (playersRank === 1 ? 2 : playersRank);
        }
    }

    /* Community upgrades */
    if (upgradesSource === UPGRADES.COMMUNITY) {
        if (isElite !== true || shipType === Ships.TIELN.id) {
            upgrades.length = 1;
        } else if (playersRank <= upgrades.length) {
            upgrades.length = (playersRank < 3 ? 3 : playersRank + 1);
        }
    }

    /* FGA upgrades - relatively complex, table can be found above const fgaUpgrades */
    if (upgradesSource === UPGRADES.FGA) {
        if (shipType === Ships.TIELN.id) {
            if (playersRank < 7) {
                upgrades[0] = [HinnyUpgrades.noUpgrade, 1, 0];
                upgrades.length = 1;
            }
            if (playersRank > 5) {
                upgrades.unshift([HinnyUpgrades.shieldUpgrade, 1, 0])
            }
        } else {
            if (playersRank < 2) {
                if (isElite !== true) {
                    upgrades[0] = [HinnyUpgrades.noUpgrade, 1, 0];
                    upgrades.length = 1;
                } else {
                    upgrades = getFgaUpgrades(2, upgrades);
                }
            } else if (playersRank < 5) {
                if (isElite !== true) {
                    upgrades = getFgaUpgrades(1, upgrades);
                } else {
                    upgrades = getFgaUpgrades(2, upgrades);
                }
            } else if (playersRank < 6) {
                if (isElite !== true) {
                    upgrades = getFgaUpgrades(1, upgrades);
                } else {
                    upgrades = getFgaUpgrades(3, upgrades);
                }
            } else {
                if (isElite !== true) {
                    upgrades = getFgaUpgrades(2, upgrades);
                } else {
                    upgrades = getFgaUpgrades(3, upgrades);
                }
            }
        }
        if (playersRank > 6) {
            upgrades.unshift([HinnyUpgrades.shieldRegeneration, 1, 0])
        }
    }

    for (const upgrade of upgrades) {
        console.log(upgrade[0]["skillName"]);
    }

    return upgrades;
}

function getShipTypeUpgrades(shipType, upgradesSource) {
    let shipTypeUpgrades = [];
    switch (upgradesSource) {
        case UPGRADES.HINNY:
            switch (shipType) {
                case Ships.TIEIN.id:
                    shipTypeUpgrades = hinnyUpgrades.TIEIN;
                    break;
                case Ships.TIELN.id:
                    shipTypeUpgrades = hinnyUpgrades.TIELN;
                    break;
                case Ships.TIESA.id:
                    shipTypeUpgrades = hinnyUpgrades.TIESA;
                    break;
                case Ships.VT49.id:
                    shipTypeUpgrades = hinnyUpgrades.VT49;
                    break;
                default:
                    shipTypeUpgrades = hinnyUpgrades.NO_UPGRADE;
                    console.log("HinnyShipUpgrades didn't recognize shipType: " + shipType);
            }
            break;
        case UPGRADES.COMMUNITY:
            switch (shipType) {
                case Ships.TIEIN.id:
                    shipTypeUpgrades = communityUpgrades.TIEIN;
                    break;
                case Ships.TIELN.id:
                    shipTypeUpgrades = communityUpgrades.TIELN;
                    break;
                case Ships.TIESA.id:
                    shipTypeUpgrades = communityUpgrades.TIESA;
                    break;
                case Ships.TIEADVX.id:
                    shipTypeUpgrades = communityUpgrades.TIEADVX;
                    break;
                case Ships.TIEDEF.id:
                    shipTypeUpgrades = communityUpgrades.TIEDEF;
                    break;
                case Ships.TIEPH.id:
                    shipTypeUpgrades = communityUpgrades.TIEPH;
                    break;
                case Ships.LAMBDA.id:
                    shipTypeUpgrades = communityUpgrades.LAMBDA;
                    break;
                default:
                    shipTypeUpgrades = communityUpgrades.NO_UPGRADE;
                    console.log("CommunityUpgrades didn't recognize shipType: " + shipType);
            }
            break;
        case UPGRADES.FGA:
            switch (shipType) {
                case Ships.TIEIN.id:
                    shipTypeUpgrades = fgaUpgrades.TIEIN;
                    break;
                case Ships.TIELN.id:
                    shipTypeUpgrades = fgaUpgrades.TIELN;
                    break;
                case Ships.TIESA.id:
                    shipTypeUpgrades = fgaUpgrades.TIESA;
                    break;
                case Ships.TIEADVX.id:
                    shipTypeUpgrades = fgaUpgrades.TIEADVX;
                    break;
                case Ships.TIEDEF.id:
                    shipTypeUpgrades = fgaUpgrades.TIEDEF;
                    break;
                case Ships.TIEPH.id:
                    shipTypeUpgrades = fgaUpgrades.TIEPH;
                    break;
                case Ships.LAMBDA.id:
                    shipTypeUpgrades = fgaUpgrades.LAMBDA;
                    break;
                case Ships.VT49.id:
                    shipTypeUpgrades = fgaUpgrades.VT49;
                    break;
                default:
                    shipTypeUpgrades = fgaUpgrades.NO_UPGRADE;
                    console.log("CommunityUpgrades didn't recognize shipType: " + shipType);
            }
            break;
        default:
            shipTypeUpgrades = communityUpgrades.NO_UPGRADE;
            console.log("GetUpgrades didn't recognize upgrades source: " + upgradesSource);
    }
    return shipTypeUpgrades;
}

/* Each skill is specified by its description, initiative and XP. */
const hinnyUpgrades = Object.freeze({
    TIELN:
        [
            [
                [{skillName: "-", skillDescription: "No upgrade equipped."}, 1, 3]
            ]
        ],
    TIEIN:
        [
            [
                [HinnyUpgrades.hullUpgrade, 2, 6],
                [HinnyUpgrades.outmaneuver, 3, 12],
                [HinnyUpgrades.shieldUpgrade, 4, 14],
                [HinnyUpgrades.turrPhennir, 5, 16],
                [HinnyUpgrades.marksmanship, 6, 18],
                [HinnyUpgrades.gideonHask, 7, 20]
            ],
            [
                [HinnyUpgrades.crackShot, 1, 5],
                [HinnyUpgrades.hullUpgrade, 2, 10],
                [HinnyUpgrades.daredevil, 3, 12],
                [HinnyUpgrades.trickShot, 4, 14],
                [HinnyUpgrades.staticDischargeVanes, 5, 16],
                [HinnyUpgrades.mauler, 6, 18]
            ],
            [
                [HinnyUpgrades.hullUpgrade, 1, 5],
                [HinnyUpgrades.wampa, 2, 10],
                [HinnyUpgrades.ruthless, 3, 12],
                [HinnyUpgrades.nightBeast, 4, 14],
                [HinnyUpgrades.shieldUpgrade, 5, 16],
                [HinnyUpgrades.juke, 6, 18]
            ],
            [
                [HinnyUpgrades.crackShot, 2, 6],
                [HinnyUpgrades.shieldUpgrade, 3, 12],
                [HinnyUpgrades.predator, 4, 14],
                [HinnyUpgrades.afterburners, 5, 16],
                [HinnyUpgrades.juke, 6, 18],
                [HinnyUpgrades.soontirFel, 7, 20]
            ],
            [
                [HinnyUpgrades.stealthDevice, 2, 6],
                [HinnyUpgrades.ruthless, 3, 12],
                [HinnyUpgrades.valenRudor, 4, 14],
                [HinnyUpgrades.hullUpgrade, 5, 16],
                [HinnyUpgrades.outmaneuver, 6, 18],
                [HinnyUpgrades.scourgeSkutu, 5, 20]
            ],
            [
                [HinnyUpgrades.stealthDevice, 1, 5],
                [HinnyUpgrades.afterburners, 2, 10],
                [HinnyUpgrades.loneWolf, 3, 12],
                [HinnyUpgrades.elusive, 4, 14],
                [HinnyUpgrades.marksmanship, 5, 16],
                [HinnyUpgrades.seynMarana, 6, 18]
            ]
        ],
    TIESA:
        [
            [
                [HinnyUpgrades.protonBombs, 2, 6],
                [HinnyUpgrades.clusterMissiles, 3, 12],
                [HinnyUpgrades.saturationSalvo, 4, 14],
                [HinnyUpgrades.debrisGambit, 6, 15],
                [HinnyUpgrades.protonTorpedoes, 6, 18],
                [HinnyUpgrades.munitionFailsafe, 7, 20]
            ],
            [
                [HinnyUpgrades.plasmaTorpedoes, 2, 6],
                [HinnyUpgrades.connerNets, 3, 12],
                [HinnyUpgrades.captainJonus, 4, 14],
                [HinnyUpgrades.shieldUpgrade, 5, 16],
                [HinnyUpgrades.diamondBoronMissiles, 6, 18],
                [HinnyUpgrades.swarmTactics, 7, 20]
            ],
            [
                [HinnyUpgrades.protonBombs, 2, 6],
                [HinnyUpgrades.protonTorpedoes, 2, 10],
                [HinnyUpgrades.deathFire, 2, 10],
                [HinnyUpgrades.skilledBombardier, 4, 14],
                [HinnyUpgrades.electroProtonBomb, 4, 15],
                [HinnyUpgrades.ruthless, 6, 17]
            ],
            [
                [HinnyUpgrades.ionTorpedoes, 2, 6],
                [HinnyUpgrades.proximityMines, 3, 12],
                [HinnyUpgrades.skilledBombardier, 3, 13],
                [HinnyUpgrades.connerNets, 4, 16],
                [HinnyUpgrades.concussionMissiles, 5, 17],
                [HinnyUpgrades.elusive, 6, 19]
            ],
            [
                [HinnyUpgrades.clusterMissiles, 2, 6],
                [HinnyUpgrades.majorRhymer, 3, 12],
                [HinnyUpgrades.advancedProtonTorpedoes, 3, 13],
                [HinnyUpgrades.bombletGenerator, 4, 15],
                [HinnyUpgrades.marksmanship, 5, 17],
                [HinnyUpgrades.shieldUpgrade, 6, 19]
            ],
            [
                [HinnyUpgrades.barrageMissiles, 2, 6],
                [HinnyUpgrades.munitionFailsafe, 2, 10],
                [HinnyUpgrades.swarmTactics, 3, 12],
                [HinnyUpgrades.advancedProtonTorpedoes, 4, 13],
                [HinnyUpgrades.proximityMines, 4, 15],
                [HinnyUpgrades.trickShot, 5, 17]
            ]
        ],
    //todo Hinny did not list ini and xps for despoiler, the values were eye-balled
    VT49:
        [
            [
                [HinnyUpgrades.despoiler, 1, 19],
                [HinnyUpgrades.veteranTurretGunner, 2, 21],
                [HinnyUpgrades.deathTroopers, 2, 23],
                [HinnyUpgrades.captainOicunn, 3, 25],
                [HinnyUpgrades.ruthless, 4, 27],
                [HinnyUpgrades.protonBombs, 4, 29]
            ],
            [
                [HinnyUpgrades.despoiler, 1, 19],
                [HinnyUpgrades.veteranTurretGunner, 2, 21],
                [HinnyUpgrades.deathTroopers, 2, 23],
                [HinnyUpgrades.captainOicunn, 3, 25],
                [HinnyUpgrades.ruthless, 4, 27],
                [HinnyUpgrades.protonBombs, 4, 29]
            ],
        ],
});

const communityUpgrades = Object.freeze({
    TIELN:
        [
            [
                [{skillName: "-", skillDescription: "No upgrade equipped."}, 1, 2]
            ]
        ],
    TIEIN:
        [
            [
                [CommunityUpgrades.autothrusters, 1, 4],
                [CommunityUpgrades.stealthDevice, 3, 6],
                [CommunityUpgrades.expertHandling, 3, 6],
                [CommunityUpgrades.whisper, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.darkCurse, 6, 6],
            ],
            [
                [CommunityUpgrades.hullUpgrade, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.expose, 3, 6],
                [CommunityUpgrades.targetingComputer, 4, 6],
                [CommunityUpgrades.opportunist, 5, 6],
                [CommunityUpgrades.turrPhennir, 6, 6],
            ],
            [
                [CommunityUpgrades.autothrusters, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.pushTheLimit, 3, 6],
                [CommunityUpgrades.captainKagi, 4, 6],
                [CommunityUpgrades.expertHandling, 5, 6],
                [CommunityUpgrades.soontirFell, 6, 6],
            ],
            [
                [CommunityUpgrades.stealthDevice, 1, 4],
                [CommunityUpgrades.autothrusters, 3, 6],
                [CommunityUpgrades.predator, 3, 6],
                [CommunityUpgrades.rexlerBrath, 4, 6],
                [CommunityUpgrades.loneWolf, 5, 6],
                [CommunityUpgrades.maulerMithel, 6, 6],
            ],
            [
                [CommunityUpgrades.hullUpgrade, 1, 4],
                [CommunityUpgrades.autothrusters, 3, 6],
                [CommunityUpgrades.outmaneuver, 3, 6],
                [CommunityUpgrades.backstabber, 4, 6],
                [CommunityUpgrades.calculation, 5, 6],
                [CommunityUpgrades.rearAdmiralChiraneau, 6, 6],
            ],
            [
                [CommunityUpgrades.stealthDevice, 1, 4],
                [CommunityUpgrades.hullUpgrade, 3, 6],
                [CommunityUpgrades.squadLeader, 3, 6],
                [CommunityUpgrades.experimentalInterface, 4, 6],
                [CommunityUpgrades.swarmTactics, 5, 6],
                [CommunityUpgrades.commanderKenkirk, 6, 6],
            ],
        ],
    TIESA:
        [
            [
                [CommunityUpgrades.homingMissiles, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.calculation, 3, 6],
                [CommunityUpgrades.lieutenantColzet, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
            [
                [CommunityUpgrades.clusterMissiles, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.marksmanship, 3, 6],
                [CommunityUpgrades.commanderAlozen, 4, 6],
                [CommunityUpgrades.predator, 5, 6],
                [CommunityUpgrades.majorRhymer, 6, 6],
            ],
            [
                [CommunityUpgrades.clusterMissiles, 1, 4],
                [CommunityUpgrades.experimentalInterface, 3, 6],
                [CommunityUpgrades.outmaneuver, 3, 6],
                [CommunityUpgrades.redline, 4, 6],
                [CommunityUpgrades.ruthless, 5, 6],
                [CommunityUpgrades.kirKanos, 6, 6],
            ],
            [
                [CommunityUpgrades.ionPulseMissiles, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.swarmTactics, 3, 6],
                [CommunityUpgrades.howlrunner, 4, 6],
                [CommunityUpgrades.outmaneuver, 5, 6],
                [CommunityUpgrades.darkCurse, 6, 6],
            ],
            [
                [CommunityUpgrades.advancedProtonTorpedoes, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.majorRhymer, 4, 6],
                [CommunityUpgrades.opportunist, 5, 6],
                [CommunityUpgrades.commanderKenkirk, 6, 6],
            ],
            [
                [CommunityUpgrades.protonTorpedoes, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.calculation, 3, 6],
                [CommunityUpgrades.nightBeast, 4, 6],
                [CommunityUpgrades.predator, 5, 6],
                [CommunityUpgrades.kathScarlet, 6, 6],
            ],
        ],
    TIEADVX:
        [
            [
                [CommunityUpgrades.advancedTargetingComputer, 1, 4],
                [CommunityUpgrades.stealthDevice, 3, 6],
                [CommunityUpgrades.expose, 3, 6],
                [CommunityUpgrades.experimentalInterface, 4, 6],
                [CommunityUpgrades.whisper, 5, 6],
                [CommunityUpgrades.opportunist, 6, 6],
            ],
            [
                [CommunityUpgrades.accuracyCorrector, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.swarmTactics, 3, 6],
                [CommunityUpgrades.colonelJendon, 4, 6],
                [CommunityUpgrades.squadLeader, 5, 6],
                [CommunityUpgrades.howlrunner, 6, 6],
            ],
            [
                [CommunityUpgrades.sensorJammer, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.expertHandling, 3, 6],
                [CommunityUpgrades.captainKagi, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.carnorJax, 6, 6],
            ],
            [
                [CommunityUpgrades.advancedSensors, 1, 4],
                [CommunityUpgrades.protonRockets, 3, 6],
                [CommunityUpgrades.zertikStrom, 3, 6],
                [CommunityUpgrades.pushTheLimit, 4, 6],
                [CommunityUpgrades.intimidation, 5, 6],
                [CommunityUpgrades.maulerMithel, 6, 6],
            ],
        ],
    TIEDEF:
        [
            [
                [CommunityUpgrades.ionCannon, 1, 4],
                [CommunityUpgrades.stealthDevice, 3, 6],
                [CommunityUpgrades.elusiveness, 3, 6],
                [CommunityUpgrades.whisper, 4, 6],
                [CommunityUpgrades.loneWolf, 5, 6],
                [CommunityUpgrades.nightBeast, 6, 6],
            ],
            [
                [CommunityUpgrades.ionCannon, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.outmaneuver, 3, 6],
                [CommunityUpgrades.backstabber, 4, 6],
                [CommunityUpgrades.swarmTactics, 5, 6],
                [CommunityUpgrades.howlrunner, 6, 6],
            ],
            [
                [CommunityUpgrades.heavyLaserCannon, 1, 4],
                [CommunityUpgrades.hullUpgrade, 3, 6],
                [CommunityUpgrades.pushTheLimit, 3, 6],
                [CommunityUpgrades.kirKanos, 4, 6],
                [CommunityUpgrades.outmaneuver, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
            [
                [CommunityUpgrades.heavyLaserCannon, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.calculation, 3, 6],
                [CommunityUpgrades.kathScarlet, 4, 6],
                [CommunityUpgrades.ruthless, 5, 6],
                [CommunityUpgrades.rearAdmiralChiraneau, 6, 6],
            ],
        ],
    TIEPH:
        [
            [
                [CommunityUpgrades.maraJade, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.sensorJammer, 3, 6],
                [CommunityUpgrades.maulerMithel, 4, 6],
                [CommunityUpgrades.predator, 5, 6],
                [CommunityUpgrades.carnorJax, 6, 6],
            ],
            [
                [CommunityUpgrades.reconSpecialist, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.sensorJammer, 3, 6],
                [CommunityUpgrades.loneWolf, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.darkCurse, 6, 6],
            ],
            [
                [CommunityUpgrades.gunner, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.fireControlSystem, 3, 6],
                [CommunityUpgrades.backstabber, 4, 6],
                [CommunityUpgrades.outmaneuver, 5, 6],
                [CommunityUpgrades.soontirFell, 6, 6],
            ],
            [
                [CommunityUpgrades.tactician, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.advancedSensors, 3, 6],
                [CommunityUpgrades.expose, 4, 6],
                [CommunityUpgrades.captainKagi, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
        ],
    LAMBDA:
        [
            [
                [CommunityUpgrades.antiPursuitLasers, 1, 4],
                [CommunityUpgrades.enhancedScopes, 3, 6],
                [CommunityUpgrades.maraJade, 3, 6],
                [CommunityUpgrades.zertikStrom, 4, 6],
                [CommunityUpgrades.tactician, 5, 6],
                [CommunityUpgrades.carnorJax, 6, 6],
            ],
            [
                [CommunityUpgrades.sensorJammer, 1, 4],
                [CommunityUpgrades.flightInstructor, 3, 6],
                [CommunityUpgrades.drawTheirFire, 3, 6],
                [CommunityUpgrades.captainKagi, 4, 6],
                [CommunityUpgrades.rebelCaptive, 5, 6],
                [CommunityUpgrades.elusiveness, 6, 6],
            ],
            [
                [CommunityUpgrades.fleetOfficer, 1, 4],
                [CommunityUpgrades.advancedSensors, 3, 6],
                [CommunityUpgrades.tacticalJammer, 3, 6],
                [CommunityUpgrades.captainYorr, 4, 6],
                [CommunityUpgrades.swarmTactics, 5, 6],
                [CommunityUpgrades.howlrunner, 6, 6],
            ],
            [
                [CommunityUpgrades.weaponsEngineer, 1, 4],
                [CommunityUpgrades.advancedSensors, 3, 6],
                [CommunityUpgrades.squadLeader, 3, 6],
                [CommunityUpgrades.colonelJendon, 4, 6],
                [CommunityUpgrades.gunner, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
        ]
});

/*
XPs: 2xp / threat level (TL), which roughly corresponds to the players' initiative
NES = non-elite SHIP, ES = elite ship, LN = tie-fighter, PC = pilot card, UL = upgrade level
TL1: LN without PC, NES no PC, ES UL = lowest + 1
TL2-4: LN without PC, NES UL = lowest, ES UL = lowest + 1
TL5: LN without PC, NES UL = lowest, ES UL = lowest + 2
TL6: LN without PC, NES UL = lowest + 1, ES UL = lowest + 2, TIELN have Shield Upgrade
7+: LN UL = lowest, NES UL = lowest + 1, ES UL = lowest + 2, TIELN have Shield Upgrade and Shield Regenerator
*/
//todo no xp for TIE/ln without PC!
const fgaUpgrades = Object.freeze({
    TIELN:
        [
            [
                [HinnyUpgrades.nightBeast, 2, 2],
                [HinnyUpgrades.predator, 2, 2],
                [HinnyUpgrades.shieldUpgrade, 2, 2],
                [HinnyUpgrades.hullUpgrade, 2, 2]
            ],
            [
                [HinnyUpgrades.outmaneuver, 3, 2],
                [HinnyUpgrades.shieldUpgrade, 3, 2],
                [HinnyUpgrades.hullUpgrade, 3, 2]
            ],
        ],
    TIEIN:
        [
            [
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.hullUpgrade, 1, 2],
                [HinnyUpgrades.soontirFel, 6, 4],
                [HinnyUpgrades.outmaneuver, 6, 4],
                [HinnyUpgrades.whisper, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.hullUpgrade, 1, 2],
                [HinnyUpgrades.shieldUpgrade, 4, 4],
                [HinnyUpgrades.outmaneuver, 4, 4],
                [HinnyUpgrades.gideonHask, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.stealthDevice, 1, 2],
                [HinnyUpgrades.soontirFel, 6, 4],
                [HinnyUpgrades.hullUpgrade, 6, 4],
                [HinnyUpgrades.scourgeSkutu, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
                [HinnyUpgrades.predator, 7, 6],
            ],
            [
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.stealthDevice, 1, 2],
                [HinnyUpgrades.nightBeast, 5, 4],
                [HinnyUpgrades.hullUpgrade, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.maulerMithel, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgrades.hullUpgrade, 1, 2],
                [HinnyUpgrades.stealthDevice, 1, 2],
                [HinnyUpgrades.pureSabaac, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.nightBeast, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.hullUpgrade, 1, 2],
                [HinnyUpgrades.stealthDevice, 1, 2],
                [HinnyUpgrades.captainOicunn, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.intimidation, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
        ],
    TIEADVX:
        [
            [
                [HinnyUpgrades.concussionMissiles, 1, 2],
                [HinnyUpgrades.marekSteele, 5, 4],
                [HinnyUpgrades.outmaneuver, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.fireControlSystem, 5, 4],
                [HinnyUpgrades.soontirFel, 7, 6],
                [HinnyUpgrades.outmaneuver, 7, 6],
            ],
            [
                [HinnyUpgrades.fireControlSystem, 3, 2],
                [HinnyUpgrades.zertikStrom, 3, 4],
                [HinnyUpgrades.outmaneuver, 3, 4],
                [HinnyUpgrades.shieldUpgrade, 3, 4],
                [HinnyUpgrades.clusterMissiles, 3, 4],
                [HinnyUpgrades.maulerMithel, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.clusterMissiles, 1, 2],
                [HinnyUpgrades.munitionFailsafe, 1, 2],
                [HinnyUpgrades.marekSteele, 5, 4],
                [HinnyUpgrades.hullUpgrade, 5, 4],
                [HinnyUpgrades.whisper, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.fireControlSystem, 3, 2],
                [HinnyUpgrades.gideonHask, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.clusterMissiles, 5, 4],
                [HinnyUpgrades.hullUpgrade, 7, 6],
                [HinnyUpgrades.outmaneuver, 7, 6],
                [HinnyUpgrades.predator, 7, 6],
            ],
        ],
    TIESA:
        [
            [
                [HinnyUpgrades.protonTorpedoes, 1, 2],
                [HinnyUpgrades.clusterMissiles, 1, 2],
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.captainJonus, 4, 4],
                [HinnyUpgrades.clusterMissiles, 4, 4],
                [HinnyUpgrades.shieldUpgrade, 4, 4],
                [HinnyUpgrades.munitionFailsafe, 4, 4],
                [HinnyUpgrades.maulerMithel, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.advancedProtonTorpedoes, 1, 2],
                [HinnyUpgrades.concussionMissiles, 1, 2],
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.gideonHask, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.predator, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.protonTorpedoes, 1, 2],
                [HinnyUpgrades.ionMissiles, 1, 2],
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.majorRhymer, 4, 4],
                [HinnyUpgrades.intimidation, 4, 4],
                [HinnyUpgrades.shieldUpgrade, 4, 4],
                [HinnyUpgrades.hullUpgrade, 4, 4],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.protonTorpedoes, 1, 2],
                [HinnyUpgrades.concussionMissiles, 1, 2],
                [HinnyUpgrades.shieldUpgrade, 1, 2],
                [HinnyUpgrades.whisper, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.soontirFel, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
        ],
    TIEDEF:
        [
            [
                [HinnyUpgrades.heavyLaserCannor, 1, 2],
                [HinnyUpgrades.rexlerBrath, 7, 4],
                [HinnyUpgrades.captainOicunn, 7, 6],
                [HinnyUpgrades.fireControlSystem, 7, 6],
                [HinnyUpgrades.concussionMissiles, 7, 6],
                [HinnyUpgrades.munitionFailsafe, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgrades.fireControlSystem, 3, 2],
                [HinnyUpgrades.nightBeast, 7, 4],
                [HinnyUpgrades.maulerMithel, 7, 6],
                [HinnyUpgrades.clusterMissiles, 7, 6],
                [HinnyUpgrades.munitionFailsafe, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.concussionMissiles, 1, 2],
                [HinnyUpgrades.gideonHask, 7, 4],
                [HinnyUpgrades.fireControlSystem, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.clusterMissiles, 1, 2],
                [HinnyUpgrades.pureSabaac, 6, 4],
                [HinnyUpgrades.predator, 6, 4],
                [HinnyUpgrades.fireControlSystem, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
            ],
        ],
    TIEPH:
        [
            [
                [HinnyUpgrades.collisionDetector, 1, 2],
                [HinnyUpgrades.echo, 4, 4],
                [HinnyUpgrades.outmaneuver, 4, 4],
                [HinnyUpgrades.stealthDevice, 4, 4],
                [HinnyUpgrades.shieldUpgrade, 4, 4],
                [HinnyUpgrades.pureSabaac, 7, 6],
            ],
            [
                [HinnyUpgrades.advancedSensors, 1, 2],
                [HinnyUpgrades.whisper, 5, 4],
                [HinnyUpgrades.juke, 5, 4],
                [HinnyUpgrades.hullUpgrade, 5, 4],
                [HinnyUpgrades.rexlerBrath, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgrades.advancedSensors, 1, 2],
                [HinnyUpgrades.captainOicunn, 5, 4],
                [HinnyUpgrades.intimidation, 5, 4],
                [HinnyUpgrades.hullUpgrade, 5, 4],
                [HinnyUpgrades.maulerMithel, 7, 6],
                [HinnyUpgrades.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.initiative, 4, 2],
                [HinnyUpgrades.captainFeroph, 4, 4],
                [HinnyUpgrades.darthVader, 4, 4],
                [HinnyUpgrades.collisionDetector, 4, 4],
                [HinnyUpgrades.juke, 4, 4],
                [HinnyUpgrades.majorRhymer, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.fireControlSystem, 1, 2],
                [HinnyUpgrades.echo, 4, 4],
                [HinnyUpgrades.stealthDevice, 4, 4],
                [HinnyUpgrades.perceptiveCopilot, 4, 4],
                [HinnyUpgrades.captainFeroph, 7, 6],
                [HinnyUpgrades.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgrades.initiative, 4, 2],
                [HinnyUpgrades.whisper, 5, 4],
                [HinnyUpgrades.fireControlSystem, 5, 4],
                [HinnyUpgrades.juke, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.shieldUpgrade, 5, 4],
                [HinnyUpgrades.gideonHask, 7, 6],
                [HinnyUpgrades.stealthDevice, 7, 6],
            ],
        ],
    LAMBDA:
        [
            [
                [HinnyUpgrades.heavyLaserCannor, 1, 2],
                [HinnyUpgrades.electronicBaffle, 1, 2],
                [HinnyUpgrades.captainOicunn, 4, 4],
                [HinnyUpgrades.admiralSloane, 4, 4],
                [HinnyUpgrades.hullUpgrade, 4, 4],
            ],
            [
                [HinnyUpgrades.perceptiveCopilot, 1, 2],
                [HinnyUpgrades.howlRunner, 4, 4],
                [HinnyUpgrades.heavyLaserCannor, 4, 4],
                [HinnyUpgrades.hullUpgrade, 4, 4],
            ],
        ],
    VT49:
        [
            [
                [HinnyUpgrades.veteranTurretGunner, 1, 2],
                [HinnyUpgrades.advancedProtonTorpedoes, 1, 2],
                [HinnyUpgrades.captainOicunn, 3, 4],
                [HinnyUpgrades.admiralSloane, 3, 4],
                [HinnyUpgrades.perceptiveCopilot, 3, 4],
                [HinnyUpgrades.tacticalScrambler, 3, 4],
                [HinnyUpgrades.ruthless, 3, 4],
                [HinnyUpgrades.whisper, 3, 4],
            ],
            [
                [HinnyUpgrades.captainOicunn, 3, 2],
                [HinnyUpgrades.veteranTurretGunner, 3, 2],
                [HinnyUpgrades.hullUpgrade, 5, 4],
                [HinnyUpgrades.howlRunner, 5, 4],
                [HinnyUpgrades.protonTorpedoes, 5, 4],
                [HinnyUpgrades.munitionFailsafe, 5, 4],
                [HinnyUpgrades.admiralSloane, 5, 4],
            ],
        ]
});

//todo use or remove
/*const skillVars = Object.freeze(
    {
        CHARGE: "charge",
        RECHARGE: "recharge rate",
        ATTACK: "attack",
        RANGE: "attack range"

    }
);*/

export function getAdjustedRandomNumber(upgradesLength) {
    const upgradeRandNum = Math.floor(Math.random() * 10) + 1;

    /* random number is adjusted to the number of upgrades the ship type has */
    let adjustedRandNum = Math.round(upgradeRandNum / 10 * upgradesLength) - 1;

    /* some numbers may be rounded down to - 1 (todo rewrite) */
    if (adjustedRandNum < 0) {
        adjustedRandNum = 0
    }
    return adjustedRandNum;
}

function getFgaUpgrades(xpLevel, upgrades) {
    if (xpLevel === 1) {
        // eslint-disable-next-line no-unused-vars
        for (const upgrade of upgrades) {
            return upgrades.filter(upgrade => upgrade[2] < 4)
        }
    } else if (xpLevel === 2) {
        // eslint-disable-next-line no-unused-vars
        for (const upgrade of upgrades) {
            return upgrades.filter(upgrade => upgrade[2] < 6)
        }
    } else if (xpLevel === 3) {
        return upgrades
    } else {
        console.log("Function getFgaUpgrades received unacceptable parameter xpLevel: " + xpLevel)
    }
}