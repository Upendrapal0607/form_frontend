import React, { useState, useEffect } from "react";
import "./Song.css"; // Import your CSS file

const Song = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    // Fetch songs data from your backend API
    fetch(" http://localhost:8080/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);
console.log(songs,"songs")
  const playSong = () => {
    const audio = document.getElementById("audio");
    audio.src = songs[currentSongIndex].audio;
    audio.play();
  };


  const stopSong = () => {
    const audio = document.getElementById("audio");
    audio.src = songs[currentSongIndex].audio;
    audio.pause();
  };



  const nextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const previousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <div className="song-container">

        {songs.length>0?(<div>
            <h1>{songs[currentSongIndex].title}</h1>
      <img src={songs[currentSongIndex].avatar} alt="Song Avatar" />
      <audio id="audio" controls />
      <div className="button-container">
        <button className="play-button" onClick={playSong}>
          Play
        </button>
        <button className="play-button" onClick={stopSong}>
        Pause
        </button>
        <button className="nav-button" onClick={previousSong}>
          Previous
        </button>
        <button className="nav-button" onClick={nextSong}>
          Next
        </button>
      </div>
        </div>):(<h1>No Data</h1>)}
      
    </div>
  );
};

export default Song;
