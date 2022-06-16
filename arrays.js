/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];

backpack.push('Lightsaber');
backpack.push('Robe', 'Food');

//console.log(backpack);

let belt = backpack.shift();

backpack.splice(1, 0, 'Fur Coat');

let bag = []

bag.unshift('Flint', 'Blanket', 'Toothbrush');


backpack.push(bag.slice(0, 3))

//console.log(backpack)

for(let i = 0; i < bag.length; i++){
    console.log(bag[i])
}

for(let i = 0; i < 3; i++){
    console.log(backpack[i])
}