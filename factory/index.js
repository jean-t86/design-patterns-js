const {NpcFactory, NpcType} = require('./factory.js');

const npcs = [];

npcs.push(NpcFactory.make(NpcType.Ninja));
npcs.push(NpcFactory.make(NpcType.Soldier));

npcs.forEach((npc) => {
  if (npc.isPlayerInSight()) {
    npc.attack();
  }
});
