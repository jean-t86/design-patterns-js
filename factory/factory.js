/**
 * Implementation based on a digest of the following articles:
 *
 * https://en.wikipedia.org/wiki/Factory_method_pattern#Structure_2
 * https://refactoring.guru/design-patterns/factory-method
 * https://www.dofactory.com/javascript/design-patterns/factory-method
 */

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
     * An attack method for the NPC. In practice, this would be a state
     * transition to the Attack state in the AI's FSM.
     */
    attack() {
      console.log('Attacking!');
    }

    /**
     * A method to determine if the player is within line of sight
     * @return {boolean} True if NPC can see player, false otherwise
     */
    isPlayerInSight() {
      return true;
    }
  }

  /**
   * A Ninja NPC
   */
  class Ninja extends Npc {
    /**
     * An attack method for the Ninja. In practice, this would be a state
     * transition to the Attack state in the AI's FSM.
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
     * An attack method for the Soldier. In practice, this would be a state
     * transition to the Attack state in the AI's FSM.
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
