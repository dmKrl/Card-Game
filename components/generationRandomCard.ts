const cards: string[] = [
  './static/image/sixHearts.png',
  './static/image/sevenHearts.png',
  './static/image/eightHearts.png',
  './static/image/nineHearts.png',
  './static/image/tenHearts.png',
  './static/image/jackHearts.png',
  './static/image/queenHearts.png',
  './static/image/kingHearts.png',
  './static/image/aceOfHearts.png',
  './static/image/sixClubs.png',
  './static/image/sevenClubs.png',
  './static/image/eightClubs.png',
  './static/image/nineClubs.png',
  './static/image/tenClubs.png',
  './static/image/jackClubs.png',
  './static/image/queenClubs.png',
  './static/image/kingClubs.png',
  './static/image/aceOfClubs.png',
  './static/image/sixDiamonds.png',
  './static/image/sevenDiamonds.png',
  './static/image/eightDiamonds.png',
  './static/image/nineDiamond.png',
  './static/image/tenDiamonds.png',
  './static/image/jackDiamond.png',
  './static/image/queenDiamonds.png',
  './static/image/kingDiamonds.png',
  './static/image/aceOfDiamonds.png',
  './static/image/sixSpades.png',
  './static/image/sevenSpades.png',
  './static/image/eightSpades.png',
  './static/image/nineSpades.png',
  './static/image/tenSpades.png',
  './static/image/jackSpades.png',
  './static/image/queenSpades.png',
  './static/image/kingSpades.png',
  './static/image/aceOfSpades.png',
];
function generationRandomCard(): string {
  const randomCard: number = Math.floor(Math.random() * 35);
  return cards[randomCard] as string;
}

export default generationRandomCard;
module.exports = { generationRandomCard, cards };
