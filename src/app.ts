
import type { Adventurer } from './types/Adventurer.ts'

// importing all the functions from the functions.ts
import {
    displayAdventurer,
    findAdventurer,
    onlyActiveAdventurer,
    levelFiveOrMoreAdventurer,
    printSummary,
    takeDamage,
    getAverageLevel,
    getActiveCount,
    getHealth
} from './services/functions.js'

const party: Adventurer[] = [
    {
        name: "Thorin",
        className: "Warrior",
        level: 5,
        health: 85,
        isActive: true,
        nickname: "The Shield"
    },
    {
        name: "Lyra",
        className: "Mage",
        level: 7,
        health: 80,
        isActive: true,
        nickname: "Starcaller",
    },
    {
        name: "Finn",
        className: "Rogue",
        level: 3,
        health: 60,
        isActive: true,
    },
    {
        name: "Grom",
        className: "Barbarian",
        level: 6,
        health: 120,
        isActive: false,
    }
]


console.log("=== PARTY === \n");
console.log("Our First Adventurer In the List is:");

const firstAdventurer = party[0];

if (firstAdventurer !== undefined) {
    displayAdventurer(firstAdventurer);
}

console.log("\n=== Summary So Far === \n");

printSummary(party).map(item => {
    console.log(item);
});


console.log("\n=== Finding Adventurers === \n");
const searchList: string[] = ["Grom", "bishwas"];

searchList.map((item) => {
    let result = findAdventurer(item, party);
    if (result != undefined) {
        console.log(`Adventurer with the name "${item}" found. `);
    } else {
        console.log(`Adventurer with the name "${item}" not found.`)
    }

})

console.log("=== BATTLE ===");
console.log(`Thorin has current health: ${getHealth("Thorin", party)}`);
const thorin = findAdventurer("Thorin", party);
if (thorin != undefined) {
    takeDamage(thorin, 30)
    console.log("Thorin took 30 damage.")
    console.log(`Thorin has ${getHealth("Thorin", party)} health remaining.`);
    console.log(thorin.isActive ? "Thorin is Still Alive" : "Thorin has been defeated");



    takeDamage(thorin, 100)
    console.log("Thorin took 100 damage.")
    console.log(`Thorin has ${getHealth("Thorin", party)} health remaining.`);
    console.log(thorin.isActive ? "Thorin is Still Alive" : "Thorin has been defeated");
}





console.log("\n=== Active Adventurers === \n");

onlyActiveAdventurer(party).map(item => {
    console.log(item.name);
});

console.log("\n=== HIGH LEVEL ADVENTURERS === \n");

levelFiveOrMoreAdventurer(party).map(item => {
    console.log(item.name);
});

console.log("\n=== PARTY STATS === \n");
console.log(`
Average Level: ${getAverageLevel(party)}
Active Adventurers: ${getActiveCount(party)}
    `)