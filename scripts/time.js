const Dtime = document.getElementById('time');
const Dtime2 = document.getElementById('time2');

function updateTime() {
    const now = new Date();
    let hour = now.getHours();
    const minutes = now.getMinutes();
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    const month = now.toLocaleString('en-US', { month: 'long' });
    const date = now.getDate();
    const year = now.getFullYear();
    const period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    Dtime.textContent = `${hour}:${formattedMinutes} ${period}`;
    Dtime2.textContent = `${day}, ${month} ${date}, ${year}`;
}

updateTime();
setInterval(updateTime, 60000);