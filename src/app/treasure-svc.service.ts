import { 
  Loot, 
  Hoard,
  forgeHistory,
  EncounterBudget
} from './treasure-types';
import { Injectable } from '@angular/core';
import { 
  GameResult,
  leaderboard,
  addGameResult,
  getPlayerNames
} from './repl-type-definitions';

@Injectable({
providedIn: 'root'
})
export class TreasureSvcService {

constructor() { }

  grs: GameResult[] = [];
  testH: Hoard[] = [];
  elTrack: EncounterBudget[] = encounterLevels;
  charts = lootItems;

  passHoard: Hoard = {
    name: '',
    timeStamp: '',
    items: [],
    totalValue: 0,
    totalSaleValue: 0
  };

  leaderboard = () => leaderboard(this.grs);

  forgeHistory = (adding: Hoard) => {
    this.testH = forgeHistory(this.testH, adding);
  }

  addGameResult = (adding: GameResult) => {
    this.grs = addGameResult(this.grs, adding);
  };

  getPlayerNames = () => getPlayerNames(this.grs);

  setupInfo: {
    start: string;
    players: string[]
  } = { 
    start: "",
    players: []
  };

  hoardSetup: {
    name: string;
    encounterLevel: string;
    budget: number;
    timeStamp: string;
  } = {
    name: "",
    encounterLevel: "",
    budget: 0,
    timeStamp: ""
  }; 
};

const cursedItems: Loot[] = [
    {
      itemName: "Boots of Striding and Kicking",
      saleValue: 0,
      notes: "Quality boots help you walk faster, but you kick yourself in the neck once in a while. Great if you don't have a neck..."
  },
  {
      itemName: "Potion of Diminution",
      saleValue: 0,
      notes: "A small vial of greenish liquid - curses the drinker to be 6in tall!"
  },
  {
    itemName: "Periapt of Disease",
    saleValue: 0,
    notes: "gives the wearer a constant disease which renews even if cured"
  },
  {
    itemName: "Backbiting Longsword",
    saleValue: 0,
    notes: "On a roll fo natural 1 this +1 longsword strikes the wielder"
  }
]

const wondrousItems: Loot[] = [
  {
      itemName: "Anchor Feather Token"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "see core book"
  }
  , {
      itemName: "Dust of Tracelessness"
  ,	itemValue: 200
  ,	saleValue: 100
  ,	notes: "see core book"
  }
  , {
      itemName: "Silversheen"
  ,	itemValue: 250
  ,	saleValue: 125
  ,	notes: "see core book"
  }
  , {
      itemName: "Whip Feather Token"
  ,	itemValue: 500
  ,	saleValue: 250
  ,	notes: "see core book"
  }
  , {
      itemName: "Pearl of Power 1"
  ,	itemValue: 1000
  ,	saleValue: 500
  ,	notes: "Prepared caster may recall a 1st level spell 1/day"
  }
  , {
      itemName: "Dust of Illusion"
  ,	itemValue: 1200
  ,	saleValue: 600
  ,	notes: "see core book"
  }
  , {
      itemName: "Pipes of Sounding"
  ,	itemValue: 1800
  ,	saleValue: 900
  ,	notes: "see core book"
  }
  , {
      itemName: "Air Elemental Gem"
  ,	itemValue: 2250
  ,	saleValue: 1125
  ,	notes: "see core book"
  }
  , {
      itemName: "Boots of the Winterlands"
  ,	itemValue: 2500
  ,	saleValue: 1250
  ,	notes: "see core book"
  }
  , {
      itemName: "Golembane Scarab"
  ,	itemValue: 2500
  ,	saleValue: 1250
  ,	notes: "see core book"
  }
  , {
      itemName: "Horseshoes of Speed"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "see core book"
  }
  , {
      itemName: "Druid Vestments"
  ,	itemValue: 3750
  ,	saleValue: 1875
  ,	notes: "see core book"
  }
  , {
      itemName: "Bracers of Armor +2"
  ,	itemValue: 4000
  ,	saleValue: 2000
  ,	notes: "Wearer gains +2 armor bonus to AC"
  }
  , {
      itemName: "Headband of Intelligence +2"
  ,	itemValue: 4000
  ,	saleValue: 2000
  ,	notes: "+2 intelligence while worn. Also grants ranks in a specific skill."
  }
  , {
      itemName: "Stone Salve"
  ,	itemValue: 4000
  ,	saleValue: 2000
  ,	notes: "see core book"
  }
  , {
      itemName: "Amulet of Mighty Fists +1"
  ,	itemValue: 5000
  ,	saleValue: 2500
  ,	notes: "Wearer gains +1 enhancement bonus to natural and unarmed attacks."
  }
  , {
      itemName: "Vest of Escape"
  ,	itemValue: 5200
  ,	saleValue: 2600
  ,	notes: "see core book"
  }
  , {
      itemName: "Wind Fan"
  ,	itemValue: 5500
  ,	saleValue: 2750
  ,	notes: "see core book"
  }
  , {
      itemName: "Minor Crown of Blasting"
  ,	itemValue: 6480
  ,	saleValue: 3240
  ,	notes: "see core book"
  }
  , {
      itemName: "Bottle of Air"
  ,	itemValue: 7250
  ,	saleValue: 3625
  ,	notes: "see core book"
  }
  , {
      itemName: "Incandescent blue sphere ioun stone"
  ,	itemValue: 8000
  ,	saleValue: 4000
  ,	notes: "see core book"
  }
  , {
      itemName: "Deck of Illusions"
  ,	itemValue: 8100
  ,	saleValue: 4050
  ,	notes: "see core book"
  }
  , {
      itemName: "Necklace of Fireballs 7"
  ,	itemValue: 8700
  ,	saleValue: 4350
  ,	notes: "see core book"
  }
  , {
      itemName: "Pearl of Power 3"
  ,	itemValue: 9000
  ,	saleValue: 4500
  ,	notes: "Prepared caster may recall 3rd level spell 1/day"
  }
  , {
      itemName: "Bronze Griffin Figurine"
  ,	itemValue: 10000
  ,	saleValue: 5000
  ,	notes: "see core book"
  }
  , {
      itemName: "Cape of the Mountebank"
  ,	itemValue: 10080
  ,	saleValue: 5040
  ,	notes: "see core book"
  }
  , {
      itemName: "Goggles of Night"
  ,	itemValue: 12000
  ,	saleValue: 6000
  ,	notes: "see core book"
  }
  , {
      itemName: "Lyre of building"
  ,	itemValue: 13000
  ,	saleValue: 6500
  ,	notes: "see core book"
  }
  , {
      itemName: "Pearl of the sirines"
  ,	itemValue: 15300
  ,	saleValue: 7650
  ,	notes: "see core book"
  }
  , {
      itemName: "Belt of Constitution +4"
  ,	itemValue: 16000
  ,	saleValue: 8000
  ,	notes: "see core book"
  }
  , {
      itemName: "Headband of Charisma +4"
  ,	itemValue: 16000
  ,	saleValue: 8000
  ,	notes: "see core book"
  }
  , {
      itemName: "Scabbard of keen edges"
  ,	itemValue: 16000
  ,	saleValue: 8000
  ,	notes: "see core book"
  }
  , {
      itemName: "Amulet of natural armor +3"
  ,	itemValue: 18000
  ,	saleValue: 9000
  ,	notes: "see core book"
  }
  , {
      itemName: "Horn of Blasting"
  ,	itemValue: 20000
  ,	saleValue: 10000
  ,	notes: "see core book"
  }
  , {
      itemName: "Ivory Goats figurine"
  ,	itemValue: 21000
  ,	saleValue: 10500
  ,	notes: "see core book"
  }
  , {
      itemName: "Major crown of blasting"
  ,	itemValue: 23760
  ,	saleValue: 11880
  ,	notes: "see core book"
  }
  , {
      itemName: "Cloak of Resistance +5"
  ,	itemValue: 25000
  ,	saleValue: 12500
  ,	notes: "+5 resistance bonus to all saves"
  }
  , {
      itemName: "Iron bands of binding"
  ,	itemValue: 26000
  ,	saleValue: 13000
  ,	notes: "see core book"
  }
  , {
      itemName: "Manual of bodily health +1"
  ,	itemValue: 27500
  ,	saleValue: 13750
  ,	notes: "see core book"
  }
  , {
      itemName: "Tome of Understanding +1"
  ,	itemValue: 27500
  ,	saleValue: 13750
  ,	notes: "see core book"
  }
  , {
      itemName: "Obsidian steed figurine"
  ,	itemValue: 28500
  ,	saleValue: 14250
  ,	notes: "see core book"
  }
  , {
      itemName: "Amulet of Natural Armor +4"
  ,	itemValue: 32000
  ,	saleValue: 16000
  ,	notes: "see core book"
  }
  , {
      itemName: "Belt of dexterity +6"
  ,	itemValue: 36000
  ,	saleValue: 18000
  ,	notes: "see core book"
  }
  , {
      itemName: "Headband of intelligence +6"
  ,	itemValue: 36000
  ,	saleValue: 18000
  ,	notes: "see core book"
  }
  , {
      itemName: "Headband of mental prowess +4"
  ,	itemValue: 40000
  ,	saleValue: 20000
  ,	notes: "see core book"
  }
  , {
      itemName: "Amulet of mighty fists +3"
  ,	itemValue: 45000
  ,	saleValue: 22500
  ,	notes: "see core book"
  }
  , {
      itemName: "Pearl of power 7"
  ,	itemValue: 49000
  ,	saleValue: 24500
  ,	notes: "see core book"
  }
  , {
      itemName: "Crystal ball of detect thoughts"
  ,	itemValue: 51000
  ,	saleValue: 25500
  ,	notes: "see core book"
  }
  , {
      itemName: "Manual of gainful exercise +2"
  ,	itemValue: 55000
  ,	saleValue: 27500
  ,	notes: "see core book"
  }
  , {
      itemName: "Eyes of charming"
  ,	itemValue: 56000
  ,	saleValue: 28000
  ,	notes: "see core book"
  }
  , {
      itemName: "Belt of physical perfection +4"
  ,	itemValue: 64000
  ,	saleValue: 32000
  ,	notes: "see core book"
  }
  , {
      itemName: "Greater horn of blasting"
  ,	itemValue: 70000
  ,	saleValue: 35000
  ,	notes: "see core book"
  }
  , {
      itemName: "Mantle of faith"
  ,	itemValue: 76000
  ,	saleValue: 38000
  ,	notes: "see core book"
  }
  , {
      itemName: "Manual of bodily health +3"
  ,	itemValue: 82500
  ,	saleValue: 41250
  ,	notes: "see core book"
  }
  , {
      itemName: "Tome of understanding +3"
  ,	itemValue: 82500
  ,	saleValue: 41250
  ,	notes: "see core book"
  }
  , {
      itemName: "Mirror of opposition"
  ,	itemValue: 92000
  ,	saleValue: 46000
  ,	notes: "see core book"
  }
  , {
      itemName: "Tome of clear thought +4"
  ,	itemValue: 110000
  ,	saleValue: 55000
  ,	notes: "see core book"
  }
  , {
      itemName: "Amulet of mighty fists +5"
  ,	itemValue: 125000
  ,	saleValue: 62500
  ,	notes: "see core book"
  }
  , {
      itemName: "Tome of clear thought +5"
  ,	itemValue: 137500
  ,	saleValue: 68750
  ,	notes: "see core book"
  }
  , {
      itemName: "Efreeti bottle"
  ,	itemValue: 145000
  ,	saleValue: 72500
  ,	notes: "see core book"
  }
  , {
      itemName: "Mirror of Life Trapping"
  ,	itemValue: 200000
  ,	saleValue: 100000
  ,	notes: "see core book"
  }
]
const specificWeapons: Loot[] = [
  {
      itemName: "Sleep arrow"
  ,	itemValue: 132
  ,	saleValue: 66
  ,	notes: "+1 arrow deals nonlethal damage, Will DC 11 or target falls asleep"
  }
  , {
      itemName: "Screaming bolt"
  ,	itemValue: 267
  ,	saleValue: 133.5
  ,	notes: "see book"
  }
  , {
      itemName: "Masterwork silver dagger"
  ,	itemValue: 322
  ,	saleValue: 161
  ,	notes: "Alchemical silver bypasses silver damage reduction, such as werewolves"
  }
  , {
      itemName: "Masterwork cold iron longsword"
  ,	itemValue: 330
  ,	saleValue: 165
  ,	notes: "Bypasses cold iron damage reduction, costs more to enchant"
  }
  , {
      itemName: "Javelin of lightning"
  ,	itemValue: 1500
  ,	saleValue: 750
  ,	notes: "see book"
  }
  , {
      itemName: "Slaying arrow"
  ,	itemValue: 2282
  ,	saleValue: 1141
  ,	notes: "+1 arrow, specific creature type - like bane - takes 50 damage on failed Fort save DC 20"
  }
  , {
      itemName: "Adamantine dagger"
  ,	itemValue: 3002
  ,	saleValue: 1501
  ,	notes: "Bypass damage reduction of golems and object hardness"
  }
  , {
      itemName: "Adamantine battleaxe"
  ,	itemValue: 3010
  ,	saleValue: 1505
  ,	notes: "Bypass damage reduction of golems and object hardness"
  }
  , {
      itemName: "Greater slaying arrow"
  ,	itemValue: 4057
  ,	saleValue: 2028.5
  ,	notes: "+1 arrow deals 100 damage on failed Fort save DC 23"
  }
  , {
      itemName: "Shatterspike"
  ,	itemValue: 4315
  ,	saleValue: 2157.5
  ,	notes: "see book"
  }
  , {
      itemName: "Dagger of venom"
  ,	itemValue: 8302
  ,	saleValue: 4151
  ,	notes: "see book"
  }
  , {
      itemName: "Trident of warning"
  ,	itemValue: 10115
  ,	saleValue: 5057.5
  ,	notes: "see book"
  }
  , {
      itemName: "Assassin's dagger"
  ,	itemValue: 10302
  ,	saleValue: 5151
  ,	notes: "see book"
  }
  , {
      itemName: "Shifter's sorrow"
  ,	itemValue: 12780
  ,	saleValue: 6390
  ,	notes: "see book"
  }
  , {
      itemName: "Trident of fish command"
  ,	itemValue: 18650
  ,	saleValue: 9325
  ,	notes: "see book"
  }
  , {
      itemName: "Flame tongue"
  ,	itemValue: 20715
  ,	saleValue: 10357.5
  ,	notes: "Sword with fire abilities"
  }
  , {
      itemName: "Luck blade"
  ,	itemValue: 22060
  ,	saleValue: 11030
  ,	notes: "No wishes on this one"
  }
  , {
      itemName: "Sword of subtlety"
  ,	itemValue: 22310
  ,	saleValue: 11155
  ,	notes: "see book"
  }
  , {
      itemName: "Sword of the planes"
  ,	itemValue: 22315
  ,	saleValue: 11157.5
  ,	notes: "see book"
  }
  , {
      itemName: "Nine lives stealer"
  ,	itemValue: 23057
  ,	saleValue: 11528.5
  ,	notes: "see book"
  }
  , {
      itemName: "Oathbow"
  ,	itemValue: 25600
  ,	saleValue: 12800
  ,	notes: "see book"
  }
  , {
      itemName: "Sword of life stealing"
  ,	itemValue: 25715
  ,	saleValue: 12857.5
  ,	notes: "see book"
  }
  , {
      itemName: "Mace of terror"
  ,	itemValue: 38552
  ,	saleValue: 19276
  ,	notes: "see book"
  }
  , {
      itemName: "Life-drinker"
  ,	itemValue: 40320
  ,	saleValue: 20160
  ,	notes: "see book"
  }
  , {
      itemName: "Sylvan scimitar"
  ,	itemValue: 47315
  ,	saleValue: 23657.5
  ,	notes: "see book"
  }
  , {
      itemName: "Rapier of puncturing"
  ,	itemValue: 50320
  ,	saleValue: 25160
  ,	notes: "see book"
  }
  , {
      itemName: "Sun blade"
  ,	itemValue: 50335
  ,	saleValue: 25167.5
  ,	notes: "see book"
  }
  , {
      itemName: "Frost brand"
  ,	itemValue: 54475
  ,	saleValue: 27237.5
  ,	notes: "see book"
  }
  , {
      itemName: "Dwarven thrower"
  ,	itemValue: 60312
  ,	saleValue: 30156
  ,	notes: "see book"
  }
  , {
      itemName: "Luck blade"
  ,	itemValue: 62360
  ,	saleValue: 31180
  ,	notes: "see book, 1 wish"
  }
  , {
      itemName: "Mace of smiting"
  ,	itemValue: 75312
  ,	saleValue: 37656
  ,	notes: "see book"
  }
  , {
      itemName: "Luck blade"
  ,	itemValue: 102660
  ,	saleValue: 51330
  ,	notes: "see book, 2 wishes"
  }
  , {
      itemName: "Holy avenger"
  ,	itemValue: 120630
  ,	saleValue: 60315
  ,	notes: "see book"
  }
  , {
      itemName: "Luck blade"
  ,	itemValue: 142960
  ,	saleValue: 71480
  ,	notes: "see book, 3 wishes"
  }
]
const specificArmor: Loot[] = [
  {
      itemName: "Mithral shirt"
  ,	itemValue: 1100
  ,	saleValue: 550
  ,	notes: "Chain shirt made of mithral"
  }
  , {
      itemName: "Dragonhide plate"
  ,	itemValue: 3300
  ,	saleValue: 1650
  ,	notes: "see book"
  }
  , {
      itemName: "Elven chain"
  ,	itemValue: 5150
  ,	saleValue: 2575
  ,	notes: "see book"
  }
  , {
      itemName: "Rhino hide"
  ,	itemValue: 5165
  ,	saleValue: 2582.5
  ,	notes: "see book"
  }
  , {
      itemName: "Adamantine breastplate"
  ,	itemValue: 10200
  ,	saleValue: 5100
  ,	notes: "see book"
  }
  , {
      itemName: "Dwarven plate"
  ,	itemValue: 16500
  ,	saleValue: 8250
  ,	notes: "see book"
  }
  , {
      itemName: "Banded mail of luck"
  ,	itemValue: 18900
  ,	saleValue: 9450
  ,	notes: "see book"
  }
  , {
      itemName: "Celestial armor"
  ,	itemValue: 22400
  ,	saleValue: 11200
  ,	notes: "see book"
  }
  , {
      itemName: "Plate armor of the deep"
  ,	itemValue: 24650
  ,	saleValue: 12325
  ,	notes: "see book"
  }
  , {
      itemName: "Breastplate of command"
  ,	itemValue: 25400
  ,	saleValue: 12700
  ,	notes: "see book"
  }
  , {
      itemName: "Mithral full plate of speed"
  ,	itemValue: 26500
  ,	saleValue: 13250
  ,	notes: "see book"
  }
  , {
      itemName: "Demon armor"
  ,	itemValue: 52260
  ,	saleValue: 26130
  ,	notes: "see book"
  }
  , {
      itemName: "Darkwood buckler"
  ,	itemValue: 205
  ,	saleValue: 102.5
  ,	notes: "see book"
  }
  , {
      itemName: "Darkwood shield"
  ,	itemValue: 257
  ,	saleValue: 128.5
  ,	notes: "see book"
  }
  , {
      itemName: "Mithral heavy shield"
  ,	itemValue: 1020
  ,	saleValue: 510
  ,	notes: "see book"
  }
  , {
      itemName: "Caster's shield"
  ,	itemValue: 3153
  ,	saleValue: 1576.5
  ,	notes: "see book"
  }
  , {
      itemName: "Spined shield"
  ,	itemValue: 5580
  ,	saleValue: 2790
  ,	notes: "see book"
  }
  , {
      itemName: "Lion's shield"
  ,	itemValue: 9170
  ,	saleValue: 4585
  ,	notes: "see book"
  }
  , {
      itemName: "Winged shield"
  ,	itemValue: 17257
  ,	saleValue: 8628.5
  ,	notes: "see book"
  }
  , {
      itemName: "Absorbing shield"
  ,	itemValue: 50170
  ,	saleValue: 25085
  ,	notes: "see book"
  }
]
const wands: Loot[] = [
  {
      itemName: "Wand of Detect Magic",
      itemValue: 375,
      saleValue: 187.5,
      notes: "Find magic auras in 30ft cone in front of user, lasts 1 minute"
  }
  , {
      itemName: "Wand of Create Water",
      itemValue: 375,
      saleValue: 187.5,
      notes: "Produces 2 gallons of drinkable water"
  }
  , {
      itemName: "Wand of Light",
      itemValue: 375,
      saleValue: 187.5,
      notes: "Target item glows like a torch for 10 minutes"
  }
  , {
      itemName: "Wand of Ray of Frost",
      itemValue: 375,
      saleValue: 187.5,
      notes: "Ranged touch attack deals 1d3 cold damage"
  }
  , {
      itemName: "Wand of Purify Food and Drink",
      itemValue: 375,
      saleValue: 187.5,
      notes: "Removes rot, spoil, poison, disease and other contaminants from 1 cubic foot of food and/or drink"
  }
  , {
      itemName: "Wand of Magic Weapon",
      itemValue: 750,
      saleValue: 375,
      notes: "Touch a single weapon to grant +1 hit & damage for 1 minute"
  }
  , {
      itemName: "Wand of Mage Armor",
      itemValue: 750,
      saleValue: 375,
      notes: "+4 armor bonus for 1 hour, does not stack with physical armor"
  }
  , {
      itemName: "Wand of Detect Undead",
      itemValue: 750,
      saleValue: 375,
      notes: "Find undead within 60ft"
  }
  , {
      itemName: "Wand of Goodberry",
      itemValue: 750,
      saleValue: 375,
      notes: "2d4 freshly-picked berries feed a medium creature as a meal and heal 1hp. Each person may only eat 8 per day."
  }
  , {
      itemName: "Wand of Magic Missile",
      itemValue: 750,
      saleValue: 375,
      notes: "Missile hits a target for 1d4+1 damage"
  }
  , {
      itemName: "Wand of lesser restoration",
      itemValue: 1500,
      saleValue: 750,
      notes: "Removes magical ability penalty or heals 1d4 ability damage"
  }
  , {
      itemName: "Wand of Detect Snares and Pits",
      itemValue: 1500,
      saleValue: 750,
      notes: "Find natural and primitive traps"
  }
  , {
      itemName: "Wand of Spiritual Weapon",
      itemValue: 4500,
      saleValue: 2250,
      notes: "A weapon made of pure force deals 1d8+1 damage to foes you indicate, and lasts 3 rounds" 
  }
  , {
      itemName: "Wand of Remove Paralysis",
      itemValue: 4500,
      saleValue: 2250,
      notes: "Removes paralysis or slow effects for up to 4 targets within 30ft of each other"
  }
  , {
      itemName: "Wand of Flame Blade",
      itemValue: 4500,
      saleValue: 2250,
      notes: "A blade of fire stretches from your hand for 3 minutes. Melee touch attacks with it deal 1d8+1 fire damage"
  }
  , {
      itemName: "Wand of Snare",
      itemValue: 4500,
      saleValue: 2250,
      notes: "Create a magic trap to entangle a foe. To find it or escape it is DC 23"
  }
  , {
      itemName: "Wand of Spectral Hand",
      itemValue: 4500,
      saleValue: 2250,
      notes: "Give 1d4 of your hp to an incorporeal hand you may use to deliver touch attack spells up to 4th level, with +2 to attack"
  }
  , {
      itemName: "Wand of Alter Self",
      itemValue: 6000,
      saleValue: 3000,
      notes: "Turn yourself into a small or medium humanoid for 4 minutes and possibly benefit from its senses"
  }
  , {
      itemName: "Wand of Call Lightning",
      itemValue: 11250,
      saleValue: 5625,
      notes: "You have 5 minutes to use 5 lightning bolts to hit a square and a 30ft vertical line above it for 3d6 electrical damage, Ref DC 15"
  }
  , {
      itemName: "Wand of Cure Serious Wounds",
      itemValue: 11250,
      saleValue: 5625,
      notes: "Heals a touched target for 3d8+5 hp"
  }
  , {
      itemName: "Wand of Heal Mount",
      itemValue: 11250,
      saleValue: 5625,
      notes: "Heal your paladin mount as the heal spell"
  }
  , {
      itemName: "Wand of Tree Shape",
      itemValue: 11250,
      saleValue: 5625,
      notes: "Look like a tree for 5 hours"
  }
  , {
      itemName: "Wand of Flame Arrow",
      itemValue: 11250,
      saleValue: 5625,
      notes: "Up to 50 ammunition gain 1d6 fire damage. The enchantment lasts up to 50min on each piece or until it is used, whichever is first."
  }
  , {
      itemName: "Wand of Summon Monster 3",
      itemValue: 13500,
      saleValue: 6750,
      notes: "Summons a creature for 6 rounds: a fiendish ape, a celestial wolverine, a dretch or a lantern archon"
  }
  , {
      itemName: "Wand of Sculpt Sound",
      itemValue: 15750,
      saleValue: 7875,
      notes: "Objects produce a certain kind of sound instead of normal sounds, for 7 hours"
  }
  , {
      itemName: "Wand of Imbue With Spell Ability",
      itemValue: 21000,
      saleValue: 10500,
      notes: "Grant a person some of your prepared spells based on their HD: 1-2HD you may give a 1st level spell; 3-4HD 2 1st level spells; 5+HD 2 1st level and one 2nd level. The granted spells may only be used once, but last until they are used."
  }
  , {
      itemName: "Wand of Command Plants",
      itemValue: 21000,
      saleValue: 10500,
      notes: "Up to 14HD of plant creatures will aid you for 7 days"
  }
  , {
      itemName: "Wand of Dispel Evil",
      itemValue: 21000,
      saleValue: 10500,
      notes: "For up to 7 rounds, gain +4 deflection AC against evil creatures. You may discharge the spell - ending the AC bonus - in one of two ways: touch an evil outsider and send it home (Will DC 16 and spell resistance applay), or touch a creature to remove one evil spell or effect dispel magic could remove."
  }
  , {
      itemName: "Wand of Commune With Nature",
      itemValue: 21000,
      saleValue: 10500,
      notes: "When in a natural environment, learn 3 facts about the land within 7 miles - or 700ft underground. You may learn presence of natural or unnatural creatures, ground or terrain, plants, minerals, water, people, or general state of the area."
  }
  , {
      itemName: "Wand of Secure Shelter",
      itemValue: 21000,
      saleValue: 10500,
      notes: "Creates a crudely furnished 400-square-foot cottage with secure doors, windows and chimney, that looks appropriate to the landscape. It is treated as stone for all structure purposes. You must provide a heat source as needed, also your own food and water. It disappears after 14 hours."
  }
  , {
      itemName: "Wand of Greater Invisibility",
      itemValue: 24000,
      saleValue: 12000,
      notes: "You or a creature you touch is invisible for 8 rounds"
  }
  , {
      itemName: "Wand of Modify Memory",
      itemValue: 30000,
      saleValue: 15000,
      notes: "You spend up to 5 minutes altering an equal amount of time in the memories of a target creature. You must concentrate and they must be within 50ft the whole time. There are different possible effects: they can forget or perfectly recall the span of a personal experience; details of an event they experienced can be altered; you can plant a plausible event of new experience, but impluasible events are dismissed and thus ineffective. Will save DC 16 negates the effect."
  }
]
const potions: Loot[] = [
  {
      itemName: "Potion of Resistance"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Mending"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Stabilize"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Virtue"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Read Magic"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Detect Poison"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Bleed"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Protection from Good"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Mage Armor"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Identify"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Magic Aura"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Endure Elements"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Longstrider"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Speak With Animals"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Divine Favor"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Entropic Shield"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Protection from Law"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Detect Secret Doors"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Feather Fall"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Remove Fear"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 1"
  }
  , {
      itemName: "Potion of Protection From Evil"
  ,	itemValue: 100
  ,	saleValue: 50
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 2"
  }
  , {
      itemName: "Potion of Lesser Restoration"
  ,	itemValue: 100
  ,	saleValue: 50
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 2"
  }
  , {
      itemName: "Potion of Jump"
  ,	itemValue: 100
  ,	saleValue: 50
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 2"
  }
  , {
      itemName: "Potion of Resist Sonic"
  ,	itemValue: 100
  ,	saleValue: 50
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 2"
  }
  , {
      itemName: "Potion of Protection From Arrows"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Detect Thougts"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Blur"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of False Life"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Bear Endurance"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Bull Strength"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Cat Grace"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Eagle Splendor"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Fox Cunning"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Owl Wisdom"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Spider Climb"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Barkskin"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Undetectable Alignment"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Resist Acid"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Delay Poison"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Aid"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Align Weapon"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Remove Paralysis"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Cure Moderate Wounds"
  ,	itemValue: 300
  ,	saleValue: 150
  ,	notes: "A liquid producing the named spell effect on the person drinking it or what it's applied to, caster level 3"
  }
  , {
      itemName: "Potion of Alter Self"
  ,	itemValue: 400
  ,	saleValue: 200
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 4"
  }
  , {
      itemName: "Potion of Heroism"
  ,	itemValue: 400
  ,	saleValue: 200
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 4"
  }
  , {
      itemName: "Potion of Rage"
  ,	itemValue: 400
  ,	saleValue: 200
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 4"
  }
  , {
      itemName: "Potion of Cure Serious Wounds"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Inflict Serious Wounds"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Magic Vestment"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Remove Disease"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Speak With Dead"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Water Breathing"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Stone Shape"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Call Lightning"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Remove Curse"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Repel Vermin"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Protection From Fire"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Protection From Acid"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Protection From Cold"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Protection From Electricity"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Protection From Sonic"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Clairaudience/Clairvoyance"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Displacement"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Beast Shape 1"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Fly"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Keen Edge"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 5"
  }
  , {
      itemName: "Potion of Good Hope"
  ,	itemValue: 1050
  ,	saleValue: 525
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 7"
  }
  , {
      itemName: "Potion of Blink"
  ,	itemValue: 1050
  ,	saleValue: 525
  ,	notes: "A liquid producing the named spell effect on the person drinking or what it's applied to, caster level 7"
  }
]
const rings: Loot[] = [
  {
      itemName: "Ring of Protection +1",
      itemValue: 2000,
      saleValue: 1000,
      notes: "+1 deflection AC for wearer."
  }
  , {
      itemName: "Ring of Sustenance",
      itemValue: 2500,
      saleValue: 1250,
      notes: "Wear this for one week, after which you do not need food or water and only need 2 hours sleep each night - but you may only regain spells once per day."
  }
  , {
      itemName: "Ring of Swimming",
      itemValue: 2500,
      saleValue: 1250,
      notes: "Wearer gains +5 on swim checks"
  }
  , {
      itemName: "Ring of Mind Shielding",
      itemValue: 8000,
      saleValue: 4000,
      notes: "Wearer is immune to detect thoughts, discern lies, and all alignment detection."
  }
  , {
      itemName: "Ring of Force Shield",
      itemValue: 8500,
      saleValue: 4250,
      notes: "Creates a weightless +2 AC shield on wearer hand, with no check penalty or arcane failure chance"
  }
  , {
      itemName: "Improved Ring of Jumping",
      itemValue: 10000,
      saleValue: 5000,
      notes: "+10 to all checks made to jump"
  }
  , {
      itemName: "Ring of Resist Fire 10",
      itemValue: 12000,
      saleValue: 6000,
      notes: "Protects wearer from 10 points of fire damage from any source"
  }
  , {
      itemName: "Water Walking Ring",
      itemValue: 15000,
      saleValue: 7500,
      notes: "Wearer may walk on calm water"
  }
  , {
      itemName: "Wizardry Ring 1",
      itemValue: 20000,
      saleValue: 10000,
      notes: "Doubles the number of 1st level arcane spell slots granted by class levels"
  }
  , {
      itemName: "Ring of Protection +4",
      itemValue: 32000,
      saleValue: 16000,
      notes: "+4 deflection bonus to wearer AC"
  }
  , {
      itemName: "Ring of Free Movement",
      itemValue: 40000,
      saleValue: 20000,
      notes: "Continuous freedom of movement spell: cannot be grappled, automatically succeeds escape attempts, may move and attack freely underwater"
  }
  , {
      itemName: "Ring of Spell Storing",
      itemValue: 50000,
      saleValue: 25000,
      notes: "You may store up to 5 levels of spells in this ring - a single 5th level ring or a combination of lower-level spells totaling 5. You may cast these spells at any time after, expending them and freeing that number of levels. Casting time remains the same, but no motion is needed, so they do not fail from armor."
  }
  , {
      itemName: "Ring of regeneration",
      itemValue: 90000,
      saleValue: 45000,
      notes: "Regenerate 1hp each round of lethal and nonlethal damage taken while wearing the ring, and wearer is immune to bleed damage. Wearer may even regenrate lost limbs, if lost while wearing the ring."
  }
  , {
      itemName: "Wishing Ring",
      itemValue: 120000,
      saleValue: 60000,
      notes: "This ring holds 3 wishes, a finite number anyone who is wearing the ring may expend."
  }
  , {
      itemName: "Djinni Calling Ring",
      itemValue: 125000,
      saleValue: 62500,
      notes: "Summon a specific djinni to serve you one hour per day. If it dies, the ring is ruined."
  }
  , {
      itemName: "Water Command Ring",
      itemValue: 200000,
      saleValue: 100000,
      notes: "Wearer takes -2 penalty to saves against fire effects. Water elementals cannot attack or move within 5 feet of wearer. You may forego the protection against one to use a charm monster effect on it with a Will DC 17, but you cannot try twice and you are not protected if it fails. Creatures from the Plane of Water suffer -1 to hit you; you gain +4 morale to hit them, +2 resistance on saves against their attacks and abilities, and your weapons bypass their damage reduction. You may talk with them, and they know you wear the ring. You may cast create water, water walking and water breathing at will; wall of ice 1/day; ice storm and control water each 2/week."
  }

  , {
      itemName: "Major Spell Storing Ring",
      itemValue: 200000,
      saleValue: 100000,
      notes: "Stores up to 10 total spell levels. The spells may be used without motion, with the same casting time as normal for the spell."
  }
]
const rods: Loot[] = [
  {
      itemName: "Lesser Rod of Extend Spell",
      itemValue: 3000,
      saleValue: 1500,
      notes: "Hold the rod while casting a spell up to 3rd level and its duration is doubled. No effect on instant spells."
  }
  , {
      itemName: "Immovable Rod",
      itemValue: 5000,
      saleValue: 2500,
      notes: "Press a button on one end of the rod and it stays in place anywhere, maintaining position and orientation until the button is pressed again."
  }
  , {
      itemName: "Rod of Cancellation",
      itemValue: 11000,
      saleValue: 5500,
      notes: "Drain magic from one item the rod touches. It gets a Will save of DC 23. Successfully draining an item destroys this rod."
  }
  , {
      itemName: "Rod of Enlarge Spell",
      itemValue: 11000,
      saleValue: 5500,
      notes: "Hold this rod while casting a spell of to 6th level, and its area is doubled. No effect upon spells with specific targets."
  }
  , {
      itemName: "Python Rod",
      itemValue: 13000,
      saleValue: 6500,
      notes: "Good-aligned user can turn this rod into a constrictor snake with +1 enhancement to its attacks. If killed, it turns back into a rod for 3 days. Otherwise it is a +1 quarterstaff."
  }
  , {
      itemName: "Greater Extend Spell Rod",
      itemValue: 24500,
      saleValue: 12250,
      notes: "Hold the rod while casting a spell of up to 9th level to double its duration. Cannot affect instantaneous spell effects."
  }
  , {
      itemName: "Negation Rod",
      itemValue: 37000,
      saleValue: 18500,
      notes: "3/day it can fire a ray of greater dispel magic at a magic item, with a caster level of 15 for the dispel check."
  }
  , {
      itemName: "Greater Maximize Spell Rod",
      itemValue: 121500,
      saleValue: 60750,
      notes: "Hold this rod while casting any spell with a variable dice effect, and the spell produces the maximum possible result for your caster level. Examples: goodberry affects 8 berries, fireball deals 6 damage per die, cure critical wounds heals 32hp +1 per caster level."
  }
]
const staves: Loot[] = [
  {
      itemName: "Staff of Charming"
  ,	itemValue: 17600
  ,	saleValue: 8800
  ,	notes: "Spells: charm person 1 charge, charm monster 2 charges"
  }
  , {
      itemName: "Staff of Size Alteration"
  ,	itemValue: 26150
  ,	saleValue: 13075
  ,	notes: "Spells: enlarge or reduce person 1 charge; shrink item 2 charges; mass enlarge or reduce 3 charges"
  }
  , {
      itemName: "Staff of Defense"
  ,	itemValue: 62000
  ,	saleValue: 31000
  ,	notes: "Spells: shield, shield of faith, shield other 1 charge; shield of law 3 charges"
  }
  , {
      itemName: "Staff of Enchantment"
  ,	itemValue: 82000
  ,	saleValue: 41000
  ,	notes: "Spells: hideous laughter, sleep, suggestion 1 charge; crushing despair, mind fog 2 charges; mass suggestion 3 charges"
  }
  , {
      itemName: "Staff of Transmutation"
  ,	itemValue: 82000
  ,	saleValue: 41000
  ,	notes: "Spells: alter self, blink, expeditious retreat 1 charge; baleful polymorph, polymorph, 2 charges; disintegrate 3 charges"
  }
  , {
      itemName: "Staff of Passage"
  ,	itemValue: 206900
  ,	saleValue: 103450
  ,	notes: "Spells: dimension door, passwall 1 charge; greater teleport, phase door, astral projection 2 charges"
  }
]
const scrolls: Loot[] = [
  {
      itemName: "Scroll of Dancing Lights"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Ghost Sound"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Mage Hand"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Message"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Summon Instrument"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Resistance"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Detect Poison"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Mending"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Virtue"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Stabilize"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Read Magic"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Acid Splash"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Daze"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Disrupt Undead"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Arcane Mark"
  ,	itemValue: 12.5
  ,	saleValue: 6.25
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Alarm"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Grease"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Comprehend Languages"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Sleep"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Floating Disk"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Disguise Self"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Cause Fear"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Animate Rope"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Calm Animals"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Detect Animals"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Entangle"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Hide From Animals"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Magic Stone"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Shillelagh"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Bane"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Command"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Divine Favor"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Entropic Shield"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Hide From Undead"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Shield of Faith"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Lesser Confusion"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Obscure Object"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Silent Image"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Ventriloquism"
  ,	itemValue: 25
  ,	saleValue: 12.5
  ,	notes: "One casting of named spell, caster level 1"
  }
  , {
      itemName: "Scroll of Bless Weapon"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "One casting of named spell, caster level 2"
  }
  , {
      itemName: "Scroll of Pass Without Trace"
  ,	itemValue: 50
  ,	saleValue: 25
  ,	notes: "One casting of named spell, caster level 2"
  }
  , {
      itemName: "Scroll of Barkskin"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Owl's Wisdom"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Resist Energy"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Arcane Lock"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Glitterdust"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of See Invisibility"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Touch of Idiocy"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Continual Flame"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Misdirection"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of False Life"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Spider Climb"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Chill Metal"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Soften Earth and Stone"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Wood Shape"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Find Traps"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Eagle Splendor"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Shatter"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Zone of Truth"
  ,	itemValue: 150
  ,	saleValue: 75
  ,	notes: "One casting of named spell, caster level 3"
  }
  , {
      itemName: "Scroll of Enthrall"
  ,	itemValue: 200
  ,	saleValue: 100
  ,	notes: "One casting of named spell, caster level 4"
  }
  , {
      itemName: "Scroll of Silence"
  ,	itemValue: 200
  ,	saleValue: 100
  ,	notes: "One casting of named spell, caster level 4"
  }
  , {
      itemName: "Scroll of Suggestion"
  ,	itemValue: 200
  ,	saleValue: 100
  ,	notes: "One casting of named spell, caster level 4"
  }
  , {
      itemName: "Scroll of Bestow Curse"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Create Food and Water"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Inflict Serious Wounds"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Prayer"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Speak With Dead"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Greater Magic Fang"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Quench"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Spike Growth"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Water Breathing"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Daylight"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Remove Blindness/Deafness"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Diminish Plants"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Summon Nature's Ally 3"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Explosive Runes"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Stinking Cloud"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Arcane Sight"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Deep Slumber"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Tiny Hut"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Invisibility Sphere"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Halt Undead"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Gaseous Form"
  ,	itemValue: 375
  ,	saleValue: 167.5
  ,	notes: "One casting of named spell, caster level 5"
  }
  , {
      itemName: "Scroll of Crushing Despair"
  ,	itemValue: 525
  ,	saleValue: 262.5
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Glibness"
  ,	itemValue: 525
  ,	saleValue: 262.5
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Summon Monster 3"
  ,	itemValue: 525
  ,	saleValue: 262.5
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Chaos Hammer"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Dismissal"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Giant Vermin"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Neutralize Poison"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Unholy Blight"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Air Walk"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Blight"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Reincarnate"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Rusting Grasp"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Holy Sword"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Tree Stride"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Dimensional Anchor"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Minor Creation"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Arcane Eye"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Lesser Geas"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Resilient Sphere"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Hallucinatory Terrain"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Enervation"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Elemental Body 1"
  ,	itemValue: 700
  ,	saleValue: 350
  ,	notes: "One casting of named spell, caster level 7"
  }
  , {
      itemName: "Scroll of Break Enchantment"
  ,	itemValue: 1000
  ,	saleValue: 500
  ,	notes: "One casting of named spell, caster level 10"
  }
  , {
      itemName: "Scroll of Hold Monster"
  ,	itemValue: 1000
  ,	saleValue: 500
  ,	notes: "One casting of named spell, caster level 10"
  }
  , {
      itemName: "Scroll of Zone of Silence"
  ,	itemValue: 1000
  ,	saleValue: 500
  ,	notes: "One casting of named spell, caster level 10"
  }
  , {
      itemName: "Scroll of Breath of Life"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Mark of Justice"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Disrupting Weapon"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Spell Resistance"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Baleful Polymorph"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Insect Plague"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Wall of Thorns"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Mage's Private Sanctum"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Mage's Faithful Hound"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Contact Other Plane"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Feeblemind"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Interposing Hand"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Dream"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Waves of Fatigue"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Overland Flight"
  ,	itemValue: 1125
  ,	saleValue: 562.5
  ,	notes: "One casting of named spell, caster level 9"
  }
  , {
      itemName: "Scroll of Greater Dispel Magic"
  ,	itemValue: 1625
  ,	saleValue: 812.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Mirage Arcana"
  ,	itemValue: 1625
  ,	saleValue: 812.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Song of Discord"
  ,	itemValue: 1625
  ,	saleValue: 812.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Animate Objects"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Blade Barrier"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Heroes' Feast"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Word of Recall"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Antilife Shell"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Mass Bull Strength"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Ironwood"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Spellstaff"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Antimagic Field"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Planar Binding"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Analyze Dweomer"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Greater Heroism"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Freezing Sphere"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Shadow Walk"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Eyebite"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Mage's Lubrication"
  ,	itemValue: 1650
  ,	saleValue: 825
  ,	notes: "One casting of named spell, caster level 11"
  }
  , {
      itemName: "Scroll of Blasphemy"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Mass Cure Serious Wounds"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Greater Scrying"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Word of Chaos"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Animate Plants"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Creeping Doom"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Sunbeam"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Banishment"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Phase Door"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Greater Arcane Sight"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Power Word Blind"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Prismatic Spray"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Greater Shadow Conjuration"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Control Undead"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Statue"
  ,	itemValue: 2275
  ,	saleValue: 1137.5
  ,	notes: "One casting of named spell, caster level 13"
  }
  , {
      itemName: "Scroll of Mass Eagle Splendor"
  ,	itemValue: 2400
  ,	saleValue: 1200
  ,	notes: "One casting of named spell, caster level 16"
  }
  , {
      itemName: "Scroll of Irresitible Dance"
  ,	itemValue: 2400
  ,	saleValue: 1200
  ,	notes: "One casting of named spell, caster level 16"
  }
  , {
      itemName: "Scroll of Sympathetic Vibration"
  ,	itemValue: 2400
  ,	saleValue: 1200
  ,	notes: "One casting of named spell, caster level 16"
  }
  , {
      itemName: "Scroll of Fire Storm"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Mass Inflict Critical Wounds"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Greater Spell Immunity"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Animal Shapes"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Earthquake"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Whirlwind"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Mind Blank"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Maze"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Greater Prying Eyes"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Antipathy"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Greater Shout"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Screen"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Horrid Wilting"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Iron Body"
  ,	itemValue: 3000
  ,	saleValue: 1500
  ,	notes: "One casting of named spell, caster level 15"
  }
  , {
      itemName: "Scroll of Imprisonment"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Summon Monster 9"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Foresight"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Power Word Kill"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Meteor Swarm"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Weird"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Energy Drain"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Time Stop"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Elemental Swarm"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Shambler"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Storm of Vengeance"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Mass Heal"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Implosion"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
  , {
      itemName: "Scroll of Regenerate"
  ,	itemValue: 3825
  ,	saleValue: 1912.5
  ,	notes: "One casting of named spell, caster level 17"
  }
]
const simpleWeapons: Loot[] = [
  {
      itemName: "Masterwork Gauntlet"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "1lb, 1d3, B, simple"
  }
  , {
      itemName: "Masterwork Dagger"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "1lb, 1d4, PS, 10f, light, simple"
  }
  , {
      itemName: "Masterwork Punching Dagger"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "1lb, 1d4, P, x3, light, simple"
  }
  , {
      itemName: "Masterwork Spiked Gauntlet"
  ,	itemValue: 355
  ,	saleValue: 177.5
  ,	notes: "1lb, 1d4, P, light, simple"
  }
  , {
      itemName: "Masterwork Light Mace"
  ,	itemValue: 355
  ,	saleValue: 177.5
  ,	notes: "4lbs, 1d6, B, light, simple"
  }
  , {
      itemName: "Masterwork Sickle"
  ,	itemValue: 356
  ,	saleValue: 178
  ,	notes: "2lbs, 1d6, S, trip, light, simple"
  }
  , {
      itemName: "Masterwork Cudgel"
  ,	itemValue: 350
  ,	saleValue: 175
  ,	notes: "3lbs, 1d6, B, simple, 10ft"
  }
  , {
      itemName: "Masterwork Heavy Mace"
  ,	itemValue: 362
  ,	saleValue: 181
  ,	notes: "8lbs, 1d8, B, simple"
  }
  , {
      itemName: "Masterwork Morningstar"
  ,	itemValue: 358
  ,	saleValue: 179
  ,	notes: "6lbs, 1d8, BP, simple"
  }
  , {
      itemName: "Masterwork Shortspear"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "3lbs, 1d6, P, 20ft, simple"
  }
  , {
      itemName: "Masterwork Longspear"
  ,	itemValue: 355
  ,	saleValue: 177.5
  ,	notes: "9lbs, 1d8/x3, P, brace, reach, simple, two-handed"
  }
  , {
      itemName: "Masterwork Quarterstaff"
  ,	itemValue: 350
  ,	saleValue: 175
  ,	notes: "4lbs, double 1d6/1d6, B, monk, simple, two-handed"
  }
  , {
      itemName: "Masterwork Spear"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "6lbs, 1d8/x3, P, simple, brace, two-handed"
  }
  , {
      itemName: "Masterwork Blowgun"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "1lb, 1d2, P, 20ft, ranged, simple, blowgun darts, move action"
  }
  , {
      itemName: "Masterwork Blowgun Darts"
  ,	itemValue: 350
  ,	saleValue: 175
  ,	notes: "10 darts for loading a blowgun, ammunition"
  }
  , {
      itemName: "Masterwork Heavy Crossbow"
  ,	itemValue: 400
  ,	saleValue: 200
  ,	notes: "8lbs, 1d10/19-20, P, 120ft, ranged, simple, bolts, full-round action"
  }
  , {
      itemName: "Masterwork Light Crossbow"
  ,	itemValue: 385
  ,	saleValue: 192.5
  ,	notes: "4lbs, 1d8/19-20, P, 80ft, ranged, simple, bolts, move action"
  }
  , {
      itemName: "Masterwork Bolts"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "10 bolts for a crossbow, 1lb, ammunition"
  }
  , {
      itemName: "Masterwork Dart"
  ,	itemValue: 350
  ,	saleValue: 175
  ,	notes: "1/2lb, 1d4, P, 20ft, thrown, simple"
  }
  , {
      itemName: "Masterwork Javelin"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "2lbs, 1d6, P, 30ft, thrown, simple"
  }
  , {
      itemName: "Masterwork Sling"
  ,	itemValue: 350
  ,	saleValue: 175
  ,	notes: "1/4lb, 1d4, B, 50ft, ranged, strength, simple, stones or bullets, move action"
  }
  , {
      itemName: "Masterwork Sling Bullets"
  ,	itemValue: 350
  ,	saleValue: 175
  ,	notes: "10 bullets for a sling, 5lbs, ammunition"
  }
]
const martialWeapons: Loot[] = [
  {
      itemName: "Masterwork Light Hammer"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "2lbs, 1d4, B, 20ft, thrown, light, martial"
  }
  , {
      itemName: "Masterwork Throwing Axe"
  ,	itemValue: 358
  ,	saleValue: 179
  ,	notes: "2lbs, 1d6, S, 10ft, thrown, light, martial"
  }
  , {
      itemName: "Masterwork Handaxe"
  ,	itemValue: 356
  ,	saleValue: 178
  ,	notes: "3lbs, 1d6/x3, S, light, martial"
  }
  , {
      itemName: "Masterwork Kukri"
  ,	itemValue: 358
  ,	saleValue: 179
  ,	notes: "2lbs, 1d4/18-20/x2, S, light, martial"
  }
  , {
      itemName: "Masterwork Light Pick"
  ,	itemValue: 354
  ,	saleValue: 177
  ,	notes: "3lbs, 1d4/x4, P, light, martial"
  }
  , {
      itemName: "Masterwork Sap"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "2lbs, 1d6, B, nonlethal, light, martial"
  }
  , {
      itemName: "Masterwork Starknife"
  ,	itemValue: 374
  ,	saleValue: 187
  ,	notes: "3lbs, 1d4/x3, P, 20ft, thrown, light, martial"
  }
  , {
      itemName: "Masterwork Short Sword"
  ,	itemValue: 360
  ,	saleValue: 180
  ,	notes: "2lbs, 1d6/19-20, P, light. martial"
  }
  , {
      itemName: "Masterwork Battleaxe"
  ,	itemValue: 360
  ,	saleValue: 180
  ,	notes: "6lbs, 1d8/x3, S, martial"
  }
  , {
      itemName: "Masterwork Flail"
  ,	itemValue: 358
  ,	saleValue: 179
  ,	notes: "5lbs, 1d8, B, martial, disarm, trip"
  }
  , {
      itemName: "Masterwork Longsword"
  ,	itemValue: 365
  ,	saleValue: 182.5
  ,	notes: "4lbs, 1d8/19-20, S, martial"
  }
  , {
      itemName: "Masterwork Heavy Pick"
  ,	itemValue: 358
  ,	saleValue: 179
  ,	notes: "6lbs, 1d6/x4, P, martial"
  }
  , {
      itemName: "Masterwork Rapier"
  ,	itemValue: 370
  ,	saleValue: 185
  ,	notes: "2lbs, 1d6/18-20, P, martial, finesse"
  }
  , {
      itemName: "Masterwork Scimitar"
  ,	itemValue: 365
  ,	saleValue: 182.5
  ,	notes: "4lbs, 1d6/18-20, S, martial, finesse"
  }
  , {
      itemName: "Masterwork Trident"
  ,	itemValue: 365
  ,	saleValue: 182.5
  ,	notes: "4lbs, 1d8, P, 10ft, thrown, martial, brace"
  }
  , {
      itemName: "Masterwork Warhammer"
  ,	itemValue: 362
  ,	saleValue: 181
  ,	notes: "5lbs, 1d8/x3, B, martial"
  }
  , {
      itemName: "Masterwork Falchion"
  ,	itemValue: 425
  ,	saleValue: 212.5
  ,	notes: "8lbs, 2d4/18-20, S, martial, two-handed"
  }
  , {
      itemName: "Masterwork Glaive"
  ,	itemValue: 358
  ,	saleValue: 179
  ,	notes: "10lbs, 1d10/x3, S, martial, reach, two-handed"
  }
  , {
      itemName: "Masterwork Greataxe"
  ,	itemValue: 370
  ,	saleValue: 185
  ,	notes: "12lbs, 1d12/x3, S, martial, two-handed"
  }
  , {
      itemName: "Masterwork Greatclub"
  ,	itemValue: 355
  ,	saleValue: 177.5
  ,	notes: "8lbs, 1d10, B, martial, two-handed"
  }
  , {
      itemName: "Masterwork Heavy Flail"
  ,	itemValue: 365
  ,	saleValue: 182.5
  ,	notes: "10lbs, 1d10/19-20, B, martial, disarm, trip, two-handed"
  }
  , {
      itemName: "Masterwork Greatsword"
  ,	itemValue: 400
  ,	saleValue: 200
  ,	notes: "8lbs, 2d6/19-20, S, martial, two-handed"
  }
  , {
      itemName: "Masterwork Guisarme"
  ,	itemValue: 359
  ,	saleValue: 179.5
  ,	notes: "12lbs, 2d4/x3, S, reach, trip, martial, two-handed"
  }
  , {
      itemName: "Masterwork Halberd"
  ,	itemValue: 360
  ,	saleValue: 180
  ,	notes: "12lbs, 1d10/x3, P/S, brace, trip, martial, two-handed"
  }
  , {
      itemName: "Masterwork Lance"
  ,	itemValue: 360
  ,	saleValue: 180
  ,	notes: "10lbs, 1d8/x3, P, reach, martial, two-handed"
  }
  , {
      itemName: "Masterwork Ranseur"
  ,	itemValue: 360
  ,	saleValue: 180
  ,	notes: "12lbs, 2d4/x3, P, disarm, reach, martial, two-handed"
  }
  , {
      itemName: "Masterwork Scythe"
  ,	itemValue: 368
  ,	saleValue: 184
  ,	notes: "10lbs, 2d4/x4, P/S, trip, martial, two-handed"
  }
  , {
      itemName: "Masterwork Longbow"
  ,	itemValue: 425
  ,	saleValue: 212.5
  ,	notes: "3lbs, 1d8/x3, P, 100ft, ranged, martial, arrows"
  }
  , {
      itemName: "Masterwork Shortbow"
  ,	itemValue: 380
  ,	saleValue: 190
  ,	notes: "2lbs, 1d6/x3, P, 60ft, ranged, martial, arrows"
  }
  , {
      itemName: "Masterwork Composite Longbow"
  ,	itemValue: 450
  ,	saleValue: 225
  ,	notes: "3lbs, 1d8/x3, P, 110ft, ranged, martial, arrows"
  }
  , {
      itemName: "Masterwork Compopsite Shortbow"
  ,	itemValue: 425
  ,	saleValue: 212.5
  ,	notes: "2lbs, 1d6/x3, P, 70ft, ranged, martial, arrows"
  }
  , {
      itemName: "Masterwork Arrows"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "20 arrows for bows, 3lbs, ammunition"
  }
]
const exoticWeapons: Loot[] = [
  {
      itemName: "Masterwork Kama"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "2lbs, 1d6, S, monk, trip, light, exotic"
  }
  , {
      itemName: "Masterwork Nunchaku"
  ,	itemValue: 352
  ,	saleValue: 176
  ,	notes: "2lbs, 1d6, B, monk, disarm, light, exotic"
  }
  , {
      itemName: "Masterwork Sai"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "1lb, 1d4, B, monk, disarm, light, exotic"
  }
  , {
      itemName: "Masterwork Siangham"
  ,	itemValue: 353
  ,	saleValue: 176.5
  ,	notes: "1lb, 1d6, P, monk, exotic"
  }
  , {
      itemName: "Masterwork Bastard Sword"
  ,	itemValue: 385
  ,	saleValue: 192.5
  ,	notes: "6lbs, 1d10/19-20, S, exotic"
  }
  , {
      itemName: "Masterwork Dwarven Waraxe"
  ,	itemValue: 380
  ,	saleValue: 190
  ,	notes: "8lbs, 1d10/x3, S, exotic, dwarf"
  }
  , {
      itemName: "Masterwork Whip"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "2lbs, 1d3, S, disarm, reach, trip, exotic"
  }
  , {
      itemName: "Masterwork Double Axe"
  ,	itemValue: 410
  ,	saleValue: 205
  ,	notes: "15lbs, double 1d8/1d8/x3, S, exotic, orc"
  }
  , {
      itemName: "Masterwork Spiked Chain"
  ,	itemValue: 375
  ,	saleValue: 187.5
  ,	notes: "10lbs, 2d4, P, disarm, trip, exotic"
  }
  , {
      itemName: "Masterwork Curve Blade"
  ,	itemValue: 430
  ,	saleValue: 215
  ,	notes: "7lbs, 1d10/18-20, S, exotic, elf"
  }
  , {
      itemName: "Masterwork Dire Flail"
  ,	itemValue: 440
  ,	saleValue: 220
  ,	notes: "10lbs, double 1d8/1d8, disarm, trip, exotic"
  }
  , {
      itemName: "Masterwork Hooked Hammer"
  ,	itemValue: 370
  ,	saleValue: 185
  ,	notes: "3lbs, double 1d6/x3-B/1d4/x4-P, trip, exotic, gnome"
  }
  , {
      itemName: "Masterwork Two-Bladed Sword"
  ,	itemValue: 450
  ,	saleValue: 225
  ,	notes: "10lbs, double 1d8/1d8/19-20, S, exotic"
  }
  , {
      itemName: "Masterwork Urgrosh"
  ,	itemValue: 400
  ,	saleValue: 200
  ,	notes: "12lbs, double 1d8-P/1d6-S/x3, brace, exotic, dwarf"
  }
  , {
      itemName: "Masterwork Bolas"
  ,	itemValue: 355
  ,	saleValue: 177.5
  ,	notes: "2lbs, 1d4, B, 10ft, thrown, nonlethal, trip, exotic"
  }
  , {
      itemName: "Masterwork Hand Crossbow"
  ,	itemValue: 450
  ,	saleValue: 225
  ,	notes: "2lbs, 1d4/19-20, P, 30ft, ranged, exotic, hand crossbow bolts, move action"
  }
  , {
      itemName: "Masterwork Repeating Heavy Crossbow"
  ,	itemValue: 750
  ,	saleValue: 375
  ,	notes: "12lbs, 1d10/19-20, P, 120ft, ranged, exotic, bolts, full-round action"
  }
  , {
      itemName: "Masterwork Light Repeating Crossbow"
  ,	itemValue: 600
  ,	saleValue: 300
  ,	notes: "6lbs, 1d8/19-20, P, 80ft, ranged, exotic, bolts, full-round action"
  }
  , {
      itemName: "Masterwork Net"
  ,	itemValue: 370
  ,	saleValue: 185
  ,	notes: "6lbs, 10ft, thrown, entangle, exotic"
  }
  , {
      itemName: "Masterwork Shuriken"
  ,	itemValue: 351
  ,	saleValue: 175.5
  ,	notes: "5 shuriken, 1/2lb, 1d2, P, 10ft, thrown, ammunition, monk, exotic"
  }
  , {
      itemName: "Masterwork Sling Staff"
  ,	itemValue: 370
  ,	saleValue: 185
  ,	notes: "1.5lb, 1d6/x3, B, 80ft, ranged, strength, exotic, halfling, bullets, move action"
  }
]

const lootItems: Loot[][] = [
  wondrousItems,
  specificArmor,
  specificWeapons,
  wands,
  potions,
  rings,
  rods,
  staves,
  scrolls,
  simpleWeapons,
  martialWeapons,
  exoticWeapons,
  cursedItems
]

const encounterLevels: EncounterBudget[] = [
  {label: "1/8", budget: 35}
  , {label: "1/6", budget: 45}
  , {label: "1/4", budget: 65}
  , {label: "1/3", budget: 85}
  , {label: "1/2", budget: 130}
  , {label: "1", budget: 260}
  , {label: "2", budget: 550}
  , {label: "3", budget: 800}
  , {label: "4", budget: 1150}
  , {label: "5", budget: 1550}
  , {label: "6", budget: 2000}
  , {label: "7", budget: 2600}
  , {label: "8", budget: 3350}
  , {label: "9", budget: 4250}
  , {label: "10", budget: 5450}
  , {label: "11", budget: 7000}
  , {label: "12", budget: 9000}
  , {label: "13", budget: 11600}
  , {label: "14", budget: 15000}
  , {label: "15", budget: 19500}
  , {label: "16", budget: 25000}
  , {label: "17", budget: 32000}
  , {label: "18", budget: 41000}
  , {label: "19", budget: 53000}
  , {label: "20", budget: 67000}
  , {label: "21", budget: 84000}
  , {label: "22", budget: 104000}
  , {label: "23", budget: 127000}
  , {label: "24", budget: 155000}
  , {label: "25", budget: 185000}
  , {label: "26", budget: 220000}
  , {label: "27", budget: 260000}
  , {label: "28", budget: 305000}
  , {label: "29", budget: 360000}
  , {label: "30", budget: 420000}
]