const {NpcFactory, NpcType} = require('./factory.js');

const ninja = NpcFactory.make(NpcType.Ninja);
ninja.attack();

const soldier = NpcFactory.make(NpcType.Soldier);
soldier.attack();
