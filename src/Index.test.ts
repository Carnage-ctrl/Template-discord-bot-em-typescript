/* */

// import { Message } from 'discord.js';
import { connyLogin } from './Index';
import { connyClient } from './Index';
import { messageReady } from '../src/handlers/messageReady';

describe("Verificando se o Client loga perfeitamente", (() => {
      it("Primeiro teste", (() => {
            jest.fn(connyLogin);
            expect(connyLogin.length).toBe(0);
      }));
}));