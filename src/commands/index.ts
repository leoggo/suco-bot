import type { ChatUserstate } from 'tmi.js';
import { alan } from './alan';
import { discord } from './discord';
import { evaluate } from './eval';
import { help } from './help';
import { overlay } from './overlay';
import { ping } from './ping';
import { pronouns } from './pronouns';
import { sh } from './sh';
import { social } from './social';
import { song } from './song';
import { specs } from './specs';
import { team } from './team';
import { tts } from './tts';

export type Command = {
  aliases?: string[];
  exec: (input: string, args: string[], user: ChatUserstate) => void;
};

export const commands: Command[] = [
  alan,
  discord,
  evaluate,
  help,
  overlay,
  ping,
  pronouns,
  sh,
  social,
  song,
  specs,
  team,
  tts,
];
