const reply=require("./lib/reply");
const items={
"energy_drink":1000,"pizza":1500,"burger":1200,"ramen":1800,"coffee":700,"cake":2500,
"dagger":8000,"iron_sword":15000,"battle_axe":18000,"katana":35000,"shadow_blade":75000,
"health_potion":5000,"energy_potion":6000,"luck_potion":10000,"power_potion":20000,
"silver":7500,"gold":15000,"diamond":50000,"ruby":40000,"emerald":45000,"obsidian":75000,
"game_ticket":2000,"lucky_dice":5000,"joker_card":12000,"tournament_pass":50000,
"crown":100000,"sanzu_gem":250000,"dragon_egg":500000,"void_relic":1000000,
"cat":25000,"dog":30000,"fox":50000,"wolf":75000,"dragon":1000000
};
module.exports={config:{name:"shop",aliases:["store"],version:"1.0.0",role:0,hasPrefix:true,description:"Browse the Sanzu shop.",usage:"{prefix}shop [item]",credits:"Sanzu"},
run:async({api,event,args})=>{
 if(args[0]&&items[args[0].toLowerCase()]) return reply(api,event,`🛒 ${args[0]} — $${items[args[0].toLowerCase()].toLocaleString()}\nBuy with /buy ${args[0]}`);
 const lines=Object.entries(items).map(([k,v],i)=>`${i+1}. ${k.replace(/_/g," ")} — $${v.toLocaleString()}`);
 return reply(api,event,"🛒 SANZU SHOP\n\n"+lines.join("\n")+"\n\nBuy: /buy <item> [quantity]");
}};
module.exports.items=items;
