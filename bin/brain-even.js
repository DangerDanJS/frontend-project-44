import readlineSync from 'readline-sync';

const even = () => {
    console.log('Welcome to the Brain Games!');

    const Name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${Name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    let correctAnswers = 0;

    for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        const isEven = number % 2 === 0;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question("Your answer: ").trim();
        const isAnswerCorrect = (isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no');

        if (isAnswerCorrect) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
            console.log(`Let's try again, ${Name}!`);
            return;
        }
        
    };
        console.log(`Congratulations, ${Name}!`);
};
even();


