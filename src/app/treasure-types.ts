export interface Loot {
    itemName: string;
    itemValue?: number;
    saleValue: number;
    notes: string;
};

export interface Hoard {
    name: string;
    timeStamp: string;
    encounterLevel?: string;
    budget?: number;
    items: Loot[];
    totalValue: number;
    totalSaleValue: number;
    remainder?: number;
};

export interface HoardSetup {
    name: string;
    encounterLevel?: string;
    budget: number;
    timeStamp: string;
}

export interface EncounterBudget {
    label: string;
    budget: number;
    slowBudget?: number;
    fastBudget?: number;
}

export interface Sell {
    item: Loot;
    checked: boolean;
}

export type GetLoot = (rolls: Loot[]) => string[];

export type Encounter = (treasures: Loot[], next: Loot) => Loot[];

export type TreasureHistory = (history: Hoard[], newTreasure: Hoard) => Hoard[];

export const hoardSaleValuesOnly = (items: Loot[]) => items.filter(
    x => x.itemValue === undefined).reduce(
        (acc, x) => acc + x.saleValue, 0
    );

export const hoardItemValuesOnly = (items: Loot[]) => items.filter(
    x => x.itemValue).reduce((acc, y) => acc + (y.itemValue ?? 0 ), 0);

export const fullHoardValue = (items: Loot[]) => {
    const x = hoardSaleValuesOnly(items);
    const y = hoardItemValuesOnly(items);
    return x + y;
};

export const sellWholeHoard = (items: Loot[]) => items.reduce(
    (acc, x) => acc + x.saleValue, 0
);

export const forgeHistory: TreasureHistory = (exists, add) => [...exists, add];

export const firstRoll = (charts: Loot[][]) => {
    let makeRando = Math.floor(
        Math.random() * charts.length);
    let putsOut = charts[makeRando];
    return putsOut;
};

export const secondRoll = (chart: Loot[]) => {
    let makeRando = Math.floor(Math.random() * chart.length);
    let putOut = chart[makeRando];
    return putOut;
};

export const collectLoot: Encounter = (pile, item) => {
    return pile.some(x => x.saleValue == 0) && item.saleValue == 0 ? pile : [ ...pile, item ]
};

export const gatherLoot = (charts: Loot[][], budget: number) => {
    let remainder = budget;
    let chest: Loot[] = [];
    do {
        let rolledItem = secondRoll(firstRoll(charts));
        let useValue = rolledItem.itemValue != undefined 
            ? rolledItem.itemValue 
            : rolledItem.saleValue;
        if (useValue <= (budget * 0.3)) {
            if ((remainder - useValue) < (budget * 0.02)) {
                return [chest, remainder] as const;
            }
            chest = collectLoot(chest, rolledItem);
            remainder = remainder - useValue;
        } else {
            remainder = remainder;
        }
    }
    while (remainder >= (budget * 0.05));
    return [chest, remainder] as const;
};