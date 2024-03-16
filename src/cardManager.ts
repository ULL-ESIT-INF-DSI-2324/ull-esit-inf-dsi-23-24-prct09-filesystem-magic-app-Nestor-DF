import fs from 'fs';
import { MagiCard } from './magiCard.js';

class CardManager {
  private static instance: CardManager;

  private constructor() {}

  public static getInstance(): CardManager {
    if (!CardManager.instance) {
      CardManager.instance = new CardManager();
    }
    return CardManager.instance;
  }

  public addCard(user: string, card: MagiCard): void {
    const cardData = JSON.stringify(card);
    if (!fs.existsSync(`./${user}`)) {
      fs.mkdirSync(`./${user}`, { recursive: true });
    }
    fs.writeFileSync(`./${user}/${card.id}_${card.name}.json`, cardData);
  }
}

export default CardManager.getInstance();
