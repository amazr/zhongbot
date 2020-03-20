const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();

//Global vars
let prefix = '!';

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}vocabq14`) {
        let fullLines;
        let brokenLines = [];
        let questionOrder = [];
        fs.readFile('vocab14', 'utf8', function(err, contents) {
            fullLines = contents.split('\n');
            for (let i = 0; i < fullLines.length; i++) {
                questionOrder.push(i);
                brokenLines.push(fullLines[i].split('->'));
            }
            console.log(brokenLines);
            questionOrder = shuffle(questionOrder);
            console.log(questionOrder);
        });
    }
});

client.login(process.env.DISCORD);