import { send } from '../utils';
import type { Command } from '.';

const offenses = [
  "se abraça <3 tomara que fique só nisso...",
  "abraça um fantasmiha <3",
  "não tomou o remédio de esquizofrenia hoje <3",
  "abraça a amiguinha imaginária",
  "bebeu pra dedeu e errou o abraço LUL",
  "abraça um estranho na rua. Ele gosta TehePelo"
]

const getOffense = () => offenses[Math.floor(Math.random() * offenses.length)]

export const hug: Command = {
  aliases: ['hug', 'abraço'],
  exec: async (input, args, user) => {
    if (args.join(' ').length === 1) {
      send(`@${user.username} abraça ${args.join(' ')} <3`);
    } else if (args.join(' ').length > 1) {
      send(`o trouxa que faz as frases aleatorias do bot não tem criatividade o bastante pra zoar abraçoso coletivos... volte quando ele criar vergonha na cara e fizer essa feature`);
    } else {
      send(`@${user.username} ${getOffense}`);
    }
  },
};
