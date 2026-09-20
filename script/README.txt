SANZU COMMAND PACK
==================

This ZIP is designed for the Sanzu-ai repository's /script folder.
The loader in auto.js supports command files exporting:
  config: { name, aliases, role, hasPrefix, description, usage, credits }
  run(ctx)
  handleEvent(ctx) [optional]

Included:
- Dynamic help/menu/commands
- Economy: balance, daily, work, pay
- Shop: shop, buy, sell, inventory
- Auction: createauction, auction, bid, mybids, endauction
- Games and fun commands
- User/group/utility/media command stubs
- Master mode: /master on|off|status

IMPORTANT:
1. Back up your existing script folder before copying this pack.
2. Merge these files into your existing script folder; do not delete your current commands.
3. Economy data is stored in data/sanzu_economy.json.
4. Master mode checks read-like event names exposed by the installed ws3-fca fork.
5. Put your GIF at public/master.gif for the GIF response. If it is missing, the text still sends.
6. Some broad commands are intentionally lightweight stubs so they register in /help; replace their run() bodies with your preferred implementation.
