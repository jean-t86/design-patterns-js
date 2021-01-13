const NpcType = {
  Ninja: 1,
  Soldier: 2,
};
Object.freeze(NpcType);

const NpcFactory = (function() {
  /**
   * Base NPC class
   */
  class Npc {
    /**
     * An attack method for the NPC
     */
    attack() {
      console.log('Attacking!');
    }
  }

  /**
   * A Ninja NPC
   */
  class Ninja extends Npc {
    /**
     * The attack method for the Ninja
     */
    attack() {
      this.throwShuriken();
    }

    /**
     * An attack specific to the Ninja
     */
    throwShuriken() {
      console.log('Tzing!');
    }
  }

  /**
   * A soldier NPC
   */
  class Soldier extends Npc {
    /**
     * The attack method for the Soldier
     */
    attack() {
      this.shoot();
    }

    /**
     * An attack specific to the Soldier
     */
    shoot() {
      console.log('Tatatata!');
    }
  }

  return {
    make(npcType) {
      switch (npcType) {
        case NpcType.Ninja:
          return new Ninja();
        case NpcType.Soldier:
          return new Soldier();
        default:
          return new Npc();
      }
    },
  };
})();

module.exports = {NpcFactory, NpcType};
