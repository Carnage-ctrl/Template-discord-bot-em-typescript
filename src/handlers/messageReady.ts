/* */

import { connyClient } from '../Index';
import { connyLogin } from '../Index';
import { loginSettings } from '../connySettings';

export async function messageReady() {
      console.log(`${loginSettings.nome} iniciada!`);
      return;
};