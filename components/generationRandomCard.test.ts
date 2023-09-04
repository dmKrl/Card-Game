import { it, expect } from '@jest/globals';
const { generationRandomCard, cards } = require('./generationRandomCard');

it('should generate random cards', () => {
  const cardsArray: string[] = Array.from(cards);
  const generateCard: string = generationRandomCard();

  const findCard = cardsArray.find((item) => item === generateCard) as
    | string
    | undefined;

  expect(findCard).toBe(generateCard);
});
