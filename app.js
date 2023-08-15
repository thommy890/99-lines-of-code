// Function to generate the song lyrics for a friend
function generateSongLyrics(name, lines) {
  let lyrics = '';
  for (let i = lines; i > 0; i--) {
    let lyric = `${i} line${i !== 1 ? 's' : ''} of code in the file, ${i} line${i !== 1 ? 's' : ''}; `;
    lyric += `${name} strikes one out, clears it all out, ${i - 1} line${i - 1 !== 1 ? 's' : ''} of code in the file`;
    lyrics += `<p>${lyric}</p>`;
  }
  return lyrics;
}

// Array of friend names
const friends = ["John", "Jane", "Alice", "Bob", "Eva"];

// Get the container div
const container = document.querySelector('.container');

// Function to create friend div and song lyrics
function createFriendDivWithLyrics(name) {
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('friend');

  const friendName = document.createElement('h3');
  friendName.textContent = name;

  friendDiv.appendChild(friendName);

  const friendLyrics = generateSongLyrics(name, 99);
  friendDiv.innerHTML += friendLyrics;

  return friendDiv;
}

// Function to display lyrics when the button is clicked
function singButtonClicked() {
  for (const friend of friends) {
    const friendDiv = createFriendDivWithLyrics(friend);
    container.appendChild(friendDiv);
  }
}

// Attach event listener to the Sing! button
const singButton = document.getElementById('singButton');
singButton.addEventListener('click', singButtonClicked);
