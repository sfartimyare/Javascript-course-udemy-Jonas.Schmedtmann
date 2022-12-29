'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)Destructuring players into two groups!
const [players1, players2] = game.players;
console.log(players1, players2);

//2) first player goalKeeper and then the rest of the players
const [gk, ...fieldPlayers] = players1;
const [gk2, ...fieldPlayers2] = players2;
console.log(gk, fieldPlayers);
console.log(gk2, fieldPlayers2);

console.log('---3step----');
// 3) allPlayers Array containing both teams!
const allPLayers = [...players1, ...players2];
console.log(allPLayers);

console.log('---step4---');
// 4)Create new Array with Substitute players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'perisic'];
console.log(players1Final);
//5)Create one variable for each odd!
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6) function that recieves arbitrary number of players and prints each on the console along with the number of goals that were scored in total.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals('davis', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('davis', 'Mueller');
printGoals(...game.scored);

// 7)Print on the console which team is more likely to win!
team1 < team2 && console.log(`team 1 is more likely to win`);
team1 > team2 && console.log(`team 2 is more likely to win!`);
