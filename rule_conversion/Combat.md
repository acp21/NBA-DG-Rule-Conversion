---
tags:
  - system
  - incomplete
---
The core of Combat is based on Delta Green's combat system. The following are the modifications added by NBA.

# Damage
Damage is determined by the damage die of the weapon used, along with the melee damage modifier based on your strength score. Past 24 [[STR]], damage continues to increase at a rate of +1 every 3 STR points. For weapon damage, see [[Weapons Tables]].

| 1-4 | 5-8 | 9-12 | 13-16 | 17-20 | 21-24 |
| --- | --- | ---- | ----- | ----- | ----- |
| -2  | -1  | 0    | +1    | +2    | +3    | 

# Base Rules
These are the base rules of combat as detailed on pages 50-54 of the Agent's Handbook
## Actions
### Aim
Sacrifice turn to aim, get +20% on an attack next turn. Bonus lost if damaged before attack is made
### Attack
Any attack made using a weapon. A roll for the appropriate skill must be made, and if it passes, the attack hits. Damage is decided based on the damage die of the weapon as defined on the [[Weapons Tables]]. Attacking with a Melee Weapon or Unarmed Combat means your agent is also [[#Blocking And Parrying]]
### Called Shot
Attack a particular body part to ignore cover and armor at a penalty. -20% for partial (half body) cover, -40% for most cover (all but limb or head).
### Suppress
**Firearms** to designate 1 meter radius in which targets become suppressed. On Critical, one target is damaged, suppression still occurs
### Disarm
**Unarmed Combat** roll to make a target drop an object. Only possible if agent has both hands free.
### Pin
Immobilize a target on the ground or up against something. **Unarmed Combat** roll, requires both hands free. All **Unarmed Combat** or **Melee Weapons** attacks against a pinned target are at +20%. An agent pinning a target can attack that target in later turns. A pinned target can only attempt to [[#Escape]] once per turn and may make no other action.
### Escape
**STRx5** or **Unarmed Combat** to escape being pinned, opposed by pinning characters attack roll if the pinning agent is attacking, or **Unarmed Combat** or **STRx5** if the pinning agent is not attacking
### Switch Weapons
Switching, holstering, or drawing a weapon takes 1 action. If you already have a weapon drawn, holstering it and drawing another weapons is considered 1 action.
### Move
Move a significant distance, 10 meters jogging, 20 meters running, 30 meters sprinting. An agent can move 3 meters and do another action. **DEXx5** to keep footing when running or sprinting on rough terrain to avoid falling prone. Getting up after falling prone takes one action. A Running or Sprinting agent has -20% on attack roles against them
### Wait
Choose to not take an action. This character can insert their turn after the end of another characters turn when they so choose.
## Defense
The following actions can be declared to prevent an oncoming attack. Using them before your turn uses your turn for that round. You cannot fight back or dodge if you are unaware an attack is coming, cant see or hear the attacker, or are pinned
### Dodge
Opposed **Dodge** roll or **DEXx5** roll against incoming attack roll to avoid harm. The specifics of which depend on if the attack was melee or ranged
#### Dodging Melee Attacks and Thrown Weapons
A dodge roll opposes *all* melee attack rolls that turn. If the opposed role succeeds, the agent avoid any harm. This behavior is identical for thrown weapons.
#### Dodging Firearms Attacks
Dodging to avoid firearms manifests as preemptively scrambling for cover. The results are outlined by the below table. If the initial **Firearms** roll fails, the shot misses regardless of the result of the dodge.

| Dodge | Opposing Roll Winner | Result                                                      |
| ----- | -------------------- | ----------------------------------------------------------- |
| Pass  | Dodge                | Agent gets behind cover and takes no damage                 |
| Pass  | Firearms             | Agent gets behind cover, *then* is shot, taking cover armor | 
| Fail  | Firearms             | Agent is shot on the way to cover                           |
### Fight Back
An **Unarmed Combat** or **Melee Weapons** roll can be used to oppose on oncoming melee attack (or firearms attack at point blank range). The roll will oppose *all* incoming attacks on that turn. You may choose *one* offensive action against a single attacker, if your roll wins, you attack that attacker and you take no damage. If you are holding a two handed weapon, this comes in the form of a **Melee Weapons** roll to strike your opponent with the butt of the weapon, or if you are holding a pistol, this comes as an **Unarmed Combat** roll to strike them with your free hand.
### Blocking And Parrying
Any agent who makes a melee attack, a disarm action, or a pin *attempt* is automatically blocking further incoming melee attacks. The Agent's initial attack roll opposes all incoming melee attacks, any roll that does not overcome the attack roll does no harm to the agent. An agent who has *successfully* pinned a target cannot block incoming attacks.
## Lethality Rating
Highly dangerous weapons have a lethality rating. Roll a 1d100 for damage for these weapons, if the result is less than the lethality rating, the target instantly dies, if the lethality rating fails, add the individual values of the two die for total damage. Nonhuman targets are not guaranteed to die on successful lethality rolls.
### Kill Radius
Weapons with a Kill Radius require the targets to be within the kill radius to inflict a lethality roll. The center of the kill radius is the initial target of the attack.
### Suppression
Being inside of an attempted kill radius (even if the attack fails) supresses a character. The character must spend 1 SAN or be forced to go prone or find cover during their next action.
# Combat Pool
For every 20% an agent has in a given combat skill (Melee Weapons, Unarmed Combat, Firearms), they receive 1 Combat Pool point for that ability per combat. This is similar to the [[Chases#Chase Pool|Chase Pool]] rules.
### Extra Attacks
Spending 3 Combat Pool points for Unarmed Combat and Melee Weapons or 4 Combat Pool points for Firearms will let you take a second attack in a round of combat. If the second attack is against a different target, roll with -20%. Requires 80% in the given combat ability
### Feints
Using Unarmed Combat Or Melee Weapons, you can spend up to 3 Combat Pool points to raise any other attacks against a given enemy in a turn by 10% times the number of spent Combat Pool points. You cannot apply multiple Feints to the same target
### Jumping In
Spending 3 points of any Combat Pool ability will allow you to jump forward in the turn order and act at the end of the current character's action. You may forgo your action and Jump In without paying any points at any time (this is identical to Delta Green's Wait action).
### Martial Arts
Once per fight you may refresh 3 Unarmed Combat pool points by describing your actions. Requires 80% Unarmed Combat
### Mook Shield
TODO: See how this compares with DG's Pin ability
### Reckless Attacks
TODO: This uses Athletics points, see how this compares to chase pool, may ignore
### Smashes And Throws
Spending 2 Unarmed Combat pool points allows you to Smash or Throw an opponent. You must still succeed on the Unarmed Combat roll to hit the opponent
#### Smash
Smash your opponent into something, a breakable or hard object does X damage, a hard and protruding object does Y damage TODO: Figure out good damage numbers
#### Throw
Throwing a character at a hard or breakable object does X damage. Throwing a character into a hard and projecting object does Y damage (both of these should be slightly less than their Smash counterparts). A character can be thrown up to 2 meters away and must make a [[Core Stats|DEX]] test to avoid landing prone. On a critical, a character can be thrown through a window or other small gap. A DEXx3 test can be used to attempt to grab the frame and avoid the fall. TODO: Find damage numbers for all this.
### Special Weapons Training
TODO: Decide if this should be incorporated, and if so, how to get the training
### Support Moves
Not using
### Technothriller Monologue
Regain 3 Firearms Combat Pool points per fight by describing your actions. Requires 80% in Firearms