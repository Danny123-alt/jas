document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');

    const playlistItems = document.querySelectorAll('#playlist-section ul li');

    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.toLowerCase();

      playlistItems.forEach(item => {
        const songName = 
        item.textContent.toLowerCase();
        item.style.display =
        songName.includes(searchText) ? '':
         'none';
      });
    });
    // Music Player Controls
    const playButton = 
    document.getElementById('play');
    const pauseButton = 
    document.getElementById('pause');
    const nextButton = 
    document.getElementById('next');
    const prevButton = 
    document.getElementById('prev');
    const shuffleButton = 
    document.getElementById('shuffle');
    const repeatButton = 
    document.getElementById('repeat');
    const nowPlaying = 
    document.getElementById('current-song');

    const audioPlayer = new audio()
    //create an audio player instance
    let currentSongIndex = 0;
    const songs = ['Song 1', 'Song 2', 'Song 3'];
    //fetching song data from playlist
    playlistItems.forEach((item, index) => {
      const songSrc =
      item.getAttribute('data-src');
      if (songSrc) songs.push(songSrc);

      item.addEventListener('click', () => {
      currentSongIndex = index,
      playSong(song[currentsongindex]);
      });
    });

   function playsong(songSrc) {
    if (!songSrc) return;
    audioPlayer.src = songSrc;
    audioPlayer.play();
    nowPlaying.textContent =
    songSrc.split('/').pop();
   }
    playButton.addEventListener('click', () => audioPlayer.play());
    pauseButton.addEventListener('click', () =>audioPlayer.pause());
    nextButton.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSong(songs[currentSongIndex]);
      updateNowPlaying();
    });
    prevButton.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      updateNowPlaying();
    });
    shuffleButton.addEventListener('click', () => {
      currentSongIndex = Math.floor(Math.random() * songs.length);
      updateNowPlaying();
    });
    repeatButton.addEventListener('click', () => {
      audioPlayer.currentTime=0;
      audioPlayer.play();
       updateNowPlaying();
    });
   
    // Download Analytics
    const downloadLinks = document.querySelectorAll('#download-section a');
    downloadLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const songName=
        link.getAttribute('href').split('/').pop();
        console.log(`Downloaded: ${songName}`);
        alert(`You downloaded: ${songName}`);
      });
    });
    // Form Validation
    const contactForm = 
    document.getElementById('contact-form');
    const errorMessage =
    document.createElement('p');
    errorMessage.style.color = 'red';
    contactForm.appendChild(errorMessage);
    
    
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent form submission
      const name = 
      contactForm.name.value.trim();
      const email = 
      contactForm.email.value.trim();
      const message = 
      contactForm.message.value.trim();

      if (!name || !email || !message) {
        errorMessage.textContent ='Please fill in all fields.';
      } else if (!/\S+@\S+\.\S+/.test(email)) 
        {
        errorMessage.textContent ='Please enter a valid email address.';
      } else {
        errorMessage.textContent = 'Message sent successfully!';
        contactForm.reset(); // Reset the form
      }
    });
  });