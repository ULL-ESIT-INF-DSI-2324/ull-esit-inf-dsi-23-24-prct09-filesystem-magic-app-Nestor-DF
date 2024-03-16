/**
 * Enum for card colors
 */
export enum Color {
  White = 'White',
  Blue = 'Blue',
  Black = 'Black',
  Red = 'Red',
  Green = 'Green',
  Colorless = 'Colorless',
  Multicolor = 'Multicolor',
}

/**
 * Enum for card types
 */
export enum Type {
  Land = 'Land',
  Creature = 'Creature',
  Enchantment = 'Enchantment',
  Sorcery = 'Sorcery',
  Instant = 'Instant',
  Artifact = 'Artifact',
  Planeswalker = 'Planeswalker',
}

/**
 * Enum for card rarity
 */
export enum Rarity {
  Common = 'Common',
  Uncommon = 'Uncommon',
  Rare = 'Rare',
  Mythic = 'Mythic',
}

/**
 * Definition of the Card class
 */
export class MagiCard {
  id: number;
  name: string;
  manaCost: number;
  color: Color;
  type: Type;
  rarity: Rarity;
  rulesText: string;
  marketValue: number;
  powerAndToughness?: [number, number];
  loyaltyMarks?: number;

  constructor(
    id: number,
    name: string,
    manaCost: number,
    color: Color,
    type: Type,
    rarity: Rarity,
    rulesText: string,
    marketValue: number,
    powerAndToughness?: [number, number],
    loyaltyMarks?: number,
  ) {
    this.id = id;
    this.name = name;
    this.manaCost = manaCost;
    this.color = color;
    this.type = type;
    this.rarity = rarity;
    this.rulesText = rulesText;
    this.marketValue = marketValue;
    if (type === Type.Creature) {
      this.powerAndToughness = powerAndToughness;
    } else if (type === Type.Planeswalker) {
      this.loyaltyMarks = loyaltyMarks;
    }
  }
}
