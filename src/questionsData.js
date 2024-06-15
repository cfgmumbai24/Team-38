import bankImage from './bank.avif';
import hospitalImage from './hospital.png';
import lockerImage from './locker.jpeg';
import atmImage from './atm.avif';
import petrolImage from './petrol.jpeg';
import creditImage from './credit.avif';
import foodImage from './food.jpeg';

export const questionsData = [
  {
    question: 'What is a Bank?',
    options: [
      { image: hospitalImage, answer: false },
      { image: bankImage, answer: true }
    ]
  },
  {
    question: 'Where will you keep your money?',
    options: [
      { image: bankImage, answer: true },
      { image: lockerImage, answer: false }
    ]
  },
  {
    question: 'Identify the ATM?',
    options: [
      { image: atmImage, answer: true },
      { image: petrolImage, answer: false }
    ]
  },
  {
    question: 'Identify the Credit card?',
    options: [
      
      { image: foodImage, answer: false },
      { image: creditImage, answer: true }
    ]
  },
  // Add more questions as needed
];
