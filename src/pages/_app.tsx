import "../styles/globals.scss";

import { Header } from "../components/Header";
import { PlayerContext } from "../contexts/PlayerContext";
import styles from "../styles/app.module.scss";
import { useState } from "react";
import { Player } from "../components/Player";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }
  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPlaying,
        togglePlay,
        setPlayingState,
      }}
    >
      <div className={styles.wrapper}>
        <main>
          <Header />

          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
