const userInfo = require("./information.js");
console.log(`mon nom ai ${userInfo.nom} et mon campus et ${userInfo.campus}`);

const cowsay = require("cowsay");
console.log(cowsay.say({
    text : `${userInfo.nom}`,
    e : "oO",
    T : "U "
}));
