let bot = new RiveScript();

let quotebot = [
    './quotebot.rive'
];
bot.loadFile(quotebot).then(botReady).catch(botNotReady);


let messageContainer = document.getElementById('messages');
let form = document.getElementById('form');
let inputBox = document.getElementById('input');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    selfReply(inputBox.value);
    inputBox.value = '';
});

function botReply(message) {
    messageContainer.innerHTML += `<div class="bot">Bot: ${message}</div>`;
    location.href = '#edge';
}

function selfReply(message) {
    messageContainer.innerHTML += `<div class="self">You: ${message}</div>`;
    location.href = '#edge';

    bot.reply("local-user", message).then(function (reply) {
        botReply(reply);
    });
}

function botReady() {
    bot.sortReplies();
    botReply('Hello');
}

function botNotReady(err) {
    console.log("An error has occurred.", err);
}