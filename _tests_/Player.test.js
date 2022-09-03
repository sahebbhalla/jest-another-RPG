

const { JestHook } = require('jest-watcher');
const Player = require('../lib/Player');
const Potions = require('../lib/_mocks_/Potions');

jest.mock('../lib/Potion');
console.log(new Potions());
test("Creates a player Object",()=>{
    const player = new Player("Dave");

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
})