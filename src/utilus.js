// Функция получения рандомного числаб.
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomNumber;
