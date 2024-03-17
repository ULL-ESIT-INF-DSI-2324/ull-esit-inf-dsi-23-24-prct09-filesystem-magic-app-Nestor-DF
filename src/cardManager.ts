import chalk from 'chalk';
import fs from 'fs';
import { MagiCard } from './magiCard.js';

/**
 * Class to manage the card collection
 */
class CardManager {
  private static instance: CardManager;

  private constructor() {}

  /**
   * Method to get the instance of the CardManager
   * @returns the instance of the CardManager
   */
  public static getInstance(): CardManager {
    if (!CardManager.instance) {
      CardManager.instance = new CardManager();
    }
    return CardManager.instance;
  }

  /**
   * Method to add a card to the collection of a user
   * @param user The user to add the card to
   * @param card The card to add
   */
  public addCard(user: string, card: MagiCard): void {
    const userDirectory = `./${user}`;
    const cardFilePath = `${userDirectory}/${card.getId()}.json`;

    if (!fs.existsSync(userDirectory)) {
      fs.mkdirSync(userDirectory, { recursive: true });
    }

    if (fs.existsSync(cardFilePath)) {
      console.log(chalk.red.bold(`A card with the same ID already exists in ${user}'s collection`));
    } else {
      fs.writeFileSync(cardFilePath, JSON.stringify(card));
      console.log(chalk.green.bold(`Card added in ${user}'s collection`));
    }
  }

  /**
   * Method to modify a card in the collection of a user
   * @param user The user to modify the card for
   * @param card The card to modify
   */
  public updateCard(user: string, card: MagiCard): void {
    const cardFilePath = `./${user}/${card.getId()}.json`;

    if (fs.existsSync(cardFilePath)) {
      fs.writeFileSync(cardFilePath, JSON.stringify(card));
      console.log(chalk.green.bold(`Card updated in ${user}'s collection`));
    } else {
      console.log(chalk.red.bold(`Card not found at ${user}'s collection`));
    }
  }

  /**
   * Method to remove a card in the collection of a user
   * @param user The user to remove the card for
   * @param card The card to remove
   */
  public removeCard(user: string, cardID: number): void {
    const cardFilePath = `./${user}/${cardID}.json`;

    if (fs.existsSync(cardFilePath)) {
      fs.unlinkSync(cardFilePath);
      console.log(chalk.green.bold(`Card removed in ${user}'s collection`));
    } else {
      console.log(chalk.red.bold(`Card not found at ${user}'s collection`));
    }
  }
}

export default CardManager.getInstance();
