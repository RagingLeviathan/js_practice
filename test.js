// musicPlayerModule.js

var musicPlayer = function () {
    // Let's make sure no one can directly access our songList
    var songList = ['California Girls', 'California Dreaming', 'Hotel California'];  
  
    // We'll expose all these functions to the user
    function play () {
      console.log('Im playing the next song!');
    }
  
    function pause () {
      console.log('Im paused!');
    }
  
    function addTrackToMusicQueue (track) {
      songList.push(track);
      console.log('I added a song');
    }
  
    function showNextTrack () {
      console.log('My next track is', songList[0]);
    }
  
    // Let's hide this function
    function loadSong() {
      filesystem.loadNextSong();
    }
  
    return {
      playMusic: play,
      pauseMusic: pause,
      showNextTrack: showNextTrack,
      addTrack: addTrackToMusicQueue
    }
  }
  
  const musicModule = musicPlayer(); // invoke our musicPlayer to return it's object (module)
  musicModule.playMusic(); // 'Im playing the next song!'
  musicModule.pauseMusic(); // 'I'm paused!'
  musicModule.showNextTrack(); // 'The next track is California Girls'
  
  // Things we can't access...
  /*
  musicModule.loadSong(); // error: not a function
  musicModule.songList.push('White Rabbit'); // undefined error*/