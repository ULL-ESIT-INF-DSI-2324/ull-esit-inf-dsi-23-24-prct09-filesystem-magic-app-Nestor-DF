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
  constructor(
    private id: number,
    private name: string,
    private manaCost: number,
    private color: Color,
    private type: Type,
    private rarity: Rarity,
    private rulesText: string,
    private marketValue: number,
    private powerAndToughness?: [number, number],
    private loyaltyMarks?: number,
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
    } else {
      this.powerAndToughness = undefined;
      this.loyaltyMarks = undefined;
    }
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getManaCost(): number {
    return this.manaCost;
  }

  public getColor(): Color {
    return this.color;
  }

  public getType(): Type {
    return this.type;
  }

  public getRarity(): Rarity {
    return this.rarity;
  }

  public getRulesText(): string {
    return this.rulesText;
  }

  public getMarketValue(): number {
    return this.marketValue;
  }

  public getPowerAndToughness(): [number, number] | undefined {
    return this.powerAndToughness;
  }

  public getLoyaltyMarks(): number | undefined {
    return this.loyaltyMarks;
  }
}
