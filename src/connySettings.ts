/* Específicações da Conny */

interface connySettings {
      nome: string,
      prefix: number | any,
      token: string,
};

const loginSettings: connySettings = {
      nome: "Conny",
      prefix: "$",
      token: "SEU_TOKEN_AQUI",
};

export {connySettings, loginSettings};
