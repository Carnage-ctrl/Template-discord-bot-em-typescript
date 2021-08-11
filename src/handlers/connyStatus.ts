import { connyClient } from "../Index";

export async function setConnyStatus() {
      connyClient.user?.setStatus('dnd');

      connyClient.user?.setActivity("Pulando de alegria!", {
            type: "STREAMING",
            url: "https://www.twitch.tv/ricksanchez"
      });
};