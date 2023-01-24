import { send } from '../utils';
import type { Command } from '.';

export const xxx: Command = {
  aliases: ['xxx'],
  exec: async (input, args, user) => {
    if (args.join(' ').length === 1) {
      send(
        `@${user.username} ama ${args.join(" ")}... excessivamente... aqui não @${user.username}... tem crianças aqui.`
      );
    } else if (args.join(' ').length > 1) {
      send(`@${user.username} é a belle belinha`); // pegou herpes????
    } else {
      send(`@${user.username} ${getOffense}`);
    }
  },
};
