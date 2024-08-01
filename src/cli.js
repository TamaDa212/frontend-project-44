import readlineSync from 'readline-sync';

export function greeting() {
    const text = 'Welcome to the Brain Games!\nMay I have your name?'
    console.log(text);
    const nameUser = readlineSync.question(`Your name: `)
    const greeting = `Hello, ${nameUser}!`
    return greeting
}


