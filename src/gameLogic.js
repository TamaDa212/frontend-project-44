import readlineSync from 'readline-sync';

export const roundsNumber = 3;

const runGameLogic = (rounds, descriptoin) => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  // описание
  console.log(descriptoin);
  // сама игра
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, answer] = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      // проигрыш
      console.log(`'${userAnswer}' is wrong answer ;( Correct answer was '${answer}'.)`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  // поздравление с победой
  console.log(`Congratulations, ${name}!`);
};

export default runGameLogic;
