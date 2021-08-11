<p>
  <div align="center">
    <h1> Crie o seu bot discord utilizando o meu template feito totalmente em Typescript! </h1>
    </div>
        <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/21181/cover-0521-TypeScriptDependencyInjectionDiscord-Bots-Luke_Newsletter-b449a98148dde3b7c5bfd2c4a094f57b.png"></img>
</p>

<!-- Passos a se seguir -->

<p>
  <div align="left">
    <h3><code>Primeiros passos:</code></h3>
    <h4>Instale todas as dependências existentes do arquivo package.json utilizando o comando <code>npm install -y</code><br></br><code>npm install -y</code><br></br> Só um detalhe, para você ter que fazer isso, você tem que inicializar o npm antes com o comando <code> npm init -y</code></h4>
  </div>
</p>

<p>
   <div align="left">
     <h3><code>Alterando o token do bot:</code></h3>
     <h4> Para alterar o token do bot basta você ir no arquivo connySettings.ts (src/connySettings.ts).
       Procure pela parte do código na qual está escrito a seguinte coisa:</h4>
   </div>
</p>

      const loginSettings: connySettings = {
            nome: "Conny",
            prefix: "$",
            token: "SEU_TOKEN_AQUI",
      };

