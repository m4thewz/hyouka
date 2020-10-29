const fetch = require('node-fetch');

const config = {
  interval: 5 * 60 * 1000,
  url: "https://hyouka-web.glitch.me"
}


let pings = 0;
setInterval(() => {
  pings++;
  
  fetch(config.url).then(() => console.log(`[${pings}] ${config.url}`));
}, config.interval);
