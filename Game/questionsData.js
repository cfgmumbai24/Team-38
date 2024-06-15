import bankImage from '../images/bank.avif';
import hospitalImage from '../images/hospital.png';
import lockerImage from '../images/locker.jpeg';
import atmImage from '../images/atm.avif';
import petrolImage from '../images/petrol.jpeg';
import creditImage from '../images/credit.avif';
import foodImage from '../images/food.jpeg';

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
