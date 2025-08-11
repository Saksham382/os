const AI = document.querySelector('[data-name="stc"]');
const chatbox = document.getElementById('chatbox');
const overlay = document.getElementById('overlay');
const sendButton = document.getElementById('send');
const messageInput = document.getElementById('message');

AI.onclick = () => {
    chatbox.style.display = 'block';
    overlay.style.display = 'block';
    chatbox.classList.add('animate__slideInUp');
    overlay.classList.add('animate__fadeIn');
    messageInput.focus();
};

overlay.onclick = () => {
    chatbox.classList.add('animate__slideOutDown');
    overlay.classList.add('animate__fadeOut');
    setTimeout(() => {
        chatbox.style.display = 'none';
        overlay.style.display = 'none';
        chatbox.classList.remove('animate__slideOutDown');
        overlay.classList.remove('animate__fadeOut');
    }, 300);
};

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim().toLowerCase();
    
    if (messageText) {
        appendMessage(messageText, 'user');
        messageInput.value = '';

        switch (messageText) {
            case 'close':
                chatbox.classList.add('animate__slideOutDown');
                overlay.classList.add('animate__fadeOut');
                setTimeout(() => {
                    chatbox.style.display = 'none';
                    overlay.style.display = 'none';
                    chatbox.classList.remove('animate__slideOutDown');
                    overlay.classList.remove('animate__fadeOut');
                }, 300);
                break;
            case 'shutdown':
                appendMessage('Shutting down...', 'bot');
                setTimeout(() => {
                    window.location.href = '/htmls/shutdown.html';
                }, 2000);
                break;
            case 'restart':
                appendMessage('Restarting...', 'bot');
                setTimeout(() => {
                    window.location.href = '/htmls/shutdown.html';
                    setTimeout(() => {
                        window.location.href = '/htmls/boot.html';
                    }, 1000);
                }, 2000);
                break;
            default:
                setTimeout(() => {
                    appendMessage('Invalid command. Try "close", "shutdown", or "restart".', 'bot');
                }, 500);
        }
    }
});

function appendMessage(text, type) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type} animate__animated animate__fadeIn`;
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});