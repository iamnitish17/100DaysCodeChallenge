function checkInternetConnection() {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = "https://www.example.com/favicon.ico";
  });
}

function updateStatus(online) {
  const statusDiv = document.getElementById('status');

  if (online) {
    statusDiv.textContent = "You are currently connected to the internet.";
    statusDiv.classList.remove('offline');
    statusDiv.classList.add('online');
  } else {
    statusDiv.textContent = "You are currently not connected to the internet.";
    statusDiv.classList.remove('online');
    statusDiv.classList.add('offline');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkInternetConnection()
    .then(() => updateStatus(true))
    .catch(() => updateStatus(false));
});
