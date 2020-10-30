<div align="center">
  <img src="https://cdn.glitch.com/3e9304e0-23b6-4d34-8ca4-92f7ba536183%2Fhyoukakk.jpg?v=1602441076647" width="300" style="border-radius: 50%;"">
</div>
<h1 align="center">Hyouka</h1>

<p align="center">
  Um bot open-source feito em Node.js, sendo Discord.js como lib principal, MongoDB como banco de dados, e express para servidor-web
</p>
<h5>Como iniciar o projeto:</h5>

```
  BOT_TOKEN=Token do seu bot
  DASHBOARD_CLIENT_ID=Client Id
  DASHBOARD_CLIENT_SECRET=Client Secret do seu bot(Em general information)
  DASHBOARD_CALLBACK_URL=/auth/discord/redirect
  MONGOURI=Url do seu cluster no mongo

```
>Coloque isso em seu arquivo .env na raiz do projeto

<div align="center">
  <h6>Na sua aplicação crie um redirect</h6>
  <img src="https://media.discordapp.net/attachments/754154558631968778/771538584528224286/unknown.png?width=905&height=533" ">
</div>

Caso você se separe com o erro **Invalid Ouath Redirect** em seu dashboard_callback_uri coloque seu url inteiro exemplo:
```
DASHBOARD_CALLBACK_URL=https://hyouka-web.glitch.me/auth/discord/redirect/
```
