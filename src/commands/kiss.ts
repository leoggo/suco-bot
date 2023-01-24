import { send } from '../utils';
import type { Command } from '.';

const offenses = [
  "beija o espelho",
  "beija o fantasminha",
  "beija a própria cabeça de baixo",
  "beija o chão"
]

const getOffense = () => offenses[Math.floor(Math.random() * offenses.length)]

export const kiss: Command = {
  aliases: ['kiss', 'beijo'],
  exec: async (input, args, user) => {
    if (args.join(' ').length === 1) {
      send(`@${user.username} beija ${args.join(' ')} <3`);
    } else if (args.join(' ').length > 1) {
      send(`@${user.username} é a belle belinha`); // pegou herpes????
    } else {
      send(`@${user.username} ${getOffense}`);
    }
  },
};
