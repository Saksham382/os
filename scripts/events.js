document.addEventListener('DOMContentLoaded', () => {
    const contextMenu = document.getElementById('contextMenu');
    const selectionBox = document.getElementById('selectionBox');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const changeBG = document.getElementById('changeBG');
    const changeTheme = document.getElementById('changeTheme');
    let startX, startY;

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.display = 'block';
        contextMenu.classList.add('animate__fadeIn');
    });

    document.addEventListener('click', () => {
        contextMenu.style.display = 'none';
    });

    document.addEventListener('mousedown', (event) => {
        startX = event.clientX;
        startY = event.clientY;
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        selectionBox.style.width = '0px';
        selectionBox.style.height = '0px';
        selectionBox.style.display = 'block';
    });

    document.addEventListener('mousemove', (event) => {
        if (startX !== undefined && startY !== undefined) {
            const width = event.clientX - startX;
            const height = event.clientY - startY;
            selectionBox.style.width = `${Math.abs(width)}px`;
            selectionBox.style.height = `${Math.abs(height)}px`;
            selectionBox.style.left = `${Math.min(startX, event.clientX)}px`;
            selectionBox.style.top = `${Math.min(startY, event.clientY)}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        startX = undefined;
        startY = undefined;
        selectionBox.style.display = 'none';
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Meta' || event.key === 'd') {
            document.getElementById('chatbox').style.display = 'block';
            overlay.style.display = 'block';
            overlay.classList.add('animate__fadeIn');
        }
    });

    function showPopup() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        popup.classList.add('animate__zoomIn');
    }

    function closePopup() {
        popup.classList.add('animate__zoomOut');
        overlay.classList.add('animate__fadeOut');
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
            popup.classList.remove('animate__zoomOut');
            overlay.classList.remove('animate__fadeOut');
        }, 300);
    }

    changeBG.addEventListener('click', showPopup);
    document.getElementById('close').addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);

    changeTheme.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
});