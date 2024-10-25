const messages = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('send');

function sendMessage(sender, text) {
    addMessage(sender, text);
}

sendButton.onclick = function() {
    const userText = input.value;
    if (userText) {
        sendMessage('user', userText);
        input.value = '';
        handleUserInput(userText);
    }
};

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;

    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon ' + (sender === 'user' ? 'userIcon' : 'botIcon');
    iconDiv.textContent = sender === 'user' ? 'U' : 'B'; // 'U' for User, 'B' for Bot

    const textDiv = document.createElement('div');
    textDiv.textContent = text;

    if (sender === 'user') {
        textDiv.style.marginLeft = '10px'; // Add space specifically for user messages
    }

    messageDiv.appendChild(sender === 'user' ? textDiv : iconDiv);
    messageDiv.appendChild(sender === 'user' ? iconDiv : textDiv);
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function handleUserInput(text) {
    let response = '';
    loadingAnimation(true); // Show loading animation

    setTimeout(() => {
        if (text.toLowerCase() === 'start') {
            response = 'Welcome to the Car Insurance Chatbot! Here are some options you can explore:\n';
            response += '1. What is car insurance?\n';
            response += '2. How much does it cost?\n';
            response += '3. What is liability insurance?\n';
            response += '4. How do I file a claim?\n';
            response += 'Please enter the number of your choice.';
        } else if (text === '1') {
            response = 'Car insurance is a contract that protects you against financial loss in the event of an accident or theft.';
        } else if (text === '2') {
            response = 'The cost varies based on factors like your age, driving history, and the type of coverage you select.';
        } else if (text === '3') {
            response = 'Liability insurance covers damages to other people or property if you are at fault in an accident.';
        } else if (text === '4') {
            response = 'To file a claim, contact your insurance provider directly and provide details about the incident.';
        } else if (text.toLowerCase().includes('what is car insurance')) {
            response = 'Car insurance is a contract that protects you against financial loss in the event of an accident or theft.';
        } else if (text.toLowerCase().includes('how much does it cost')) {
            response = 'The cost varies based on factors like your age, driving history, and the type of coverage you select.';
        } else if (text.toLowerCase().includes('what is liability insurance')) {
            response = 'Liability insurance covers damages to other people or property if you are at fault in an accident.';
        } else {
            response = 'I didn\'t understand that. Type "start" to see the options.';
        }

        loadingAnimation(false);
        sendMessage('bot', response);
    }, 1000);
}

function loadingAnimation(show) {
    const loading = document.getElementById('loading');
    if (show) {
        loading.style.display = 'block';
    } else {
        loading.style.display = 'none';
    }
}

window.onload = function() {
    sendMessage('bot', 'Welcome to the Car Insurance Chatbot! Type "start" to see your options.');
};