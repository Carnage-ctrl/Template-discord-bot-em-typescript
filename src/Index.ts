import Discord, { Client } from 'discord.js';
import { loginSettings } from './connySettings';
import { setConnyStatus } from './handlers/connyStatus';
import { messageReady } from './handlers/messageReady';
import { pingCommand } from './handlers/ping';

export const connyClient = new Client();

export async function connyLogin() {
      connyClient.on("ready", messageReady);
      connyClient.on("message", pingCommand);
      return connyClient.login(loginSettings.token);
}

export async function connyStatus() {
      connyClient.on('ready', setConnyStatus);
};

setTimeout(() => { 
      connyLogin();
      connyStatus();
}, 300);