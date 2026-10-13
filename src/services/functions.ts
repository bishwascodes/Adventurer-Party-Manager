import type {Adventurer} from "../types/Adventurer.ts";

export function displayAdventurer(adventurer: Adventurer): void{
const displayText = `Name: ${adventurer.name}
Class: ${adventurer.className}
Level: ${adventurer.level}
Health: ${adventurer.health}
Status: ${adventurer.isActive ? "Active" : "InActive"}
${adventurer.nickname ? `Nickname: ${adventurer.nickname}` : ""}
                `;
console.log(displayText);
}

export function findAdventurer(name: string, adventurerList: Adventurer[]): Adventurer | undefined {
const searchResult = adventurerList.find(item => item.name == name);
return searchResult;
}

export function onlyActiveAdventurer(adventurerList: Adventurer[]) : Adventurer[] {
const filtered = adventurerList.filter(item => item.isActive == true);
return filtered;
}

export function levelFiveOrMoreAdventurer(adventurerList: Adventurer[]) : Adventurer[] {
const filtered = adventurerList.filter(item => item.level >= 5);
return filtered;
}

export function printSummary(adventurerList: Adventurer[]) : string[] {
const summaryArray : string[] = [];
adventurerList.map(item=>{
summaryArray.push(`${item.name} - Level ${item.level} ${item.className}`);
})
return summaryArray;
}

export function takeDamage(adventurer: Adventurer, damage: number): void {
adventurer.health = Math.max(0, adventurer.health - damage);
if(adventurer.health == 0){
adventurer.isActive = false;
}
}

export function getAverageLevel(party: Adventurer[]): number{
return (party.reduce((accumulator, item) => accumulator + item.level, 0) / party.length);
}

export function getActiveCount(party: Adventurer[]): number{
return (party.filter(item=>item.isActive==true).length);
}

export function getHealth(name: string, party : Adventurer[]): number | undefined {
    return (party.find(item=>item.name==name)?.health);
}

