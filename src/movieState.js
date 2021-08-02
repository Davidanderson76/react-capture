//Import Images
// import athlete from "./img/athlete-small.png";
// import goodtimes from "./img/goodtimes-small.png";
// import theracer from "./img/theracer-small.png";
// import athlete2 from "./img/athlete2.png";
// import goodtimes2 from "./img/good-times2.jpg";
// import theracer2 from "./img/the-racer2.jpg";
import audioPlayer from "./img/audioPlayer.png";
import audioPlayer2 from "./img/audioPlayer2.png";
import chategories from "./img/chategories.png";
import chategories2 from "./img/chategories2.png";
import pokememory from "./img/pokememory.png";
import pokememory2 from "./img/pokememory2.png";

// import styled from "styled-components";
// import { motion } from "framer-motion";

import "./movieState.css";

export const MovieState = () => {
  return [
    {
      title: "Audio Player",
      mainImg: audioPlayer2,
      secondaryImg: audioPlayer,
      url: "/work/audio-player",
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "“A mobile responsive React app music player with a clean and clear user interface.”",
        },
        {
          title: "Deployed App Here",
          description: (
            <a
              href="https://davidanderson.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              React Audio Player
            </a>
          ),
        },
        {
          title: "GitHub Code Repository Here",
          description: (
            <a href="https://github.com/Davidanderson76/react-musicplayer">
              GitHub Repo
            </a>
          ),
        },
      ],
    },
    {
      title: "Chategories",
      mainImg: chategories,
      url: "/work/chategories",
      secondaryImg: chategories2,
      awards: [
        {
          title: "Truly A Masterpiece",
          description:
            "“An open discussion chat app with forum posting and direct messaging functionality! Simple and secure sign in authorization using your google account.”",
        },
        {
          title: "Deployed App Here",
          description: (
            <a
              href="https://chategories-57274.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Chategories App
            </a>
          ),
        },
        {
          title: "GitHub Code Repository Here",
          description: (
            <a href="https://github.com/nmckenzie1/chategories">GitHub Repo</a>
          ),
        },
      ],
    },
    {
      title: "Pokémemory",
      mainImg: pokememory2,
      url: "/work/Pokememory",
      secondaryImg: pokememory,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Match your favorite Pokémon characters in this exciting memory game. Pokémon Memory Game is an app that hides pairs of random Pokémon characters under 24 Poké Balls. Use your memory abilities to match each pair before time runs out!”",
        },
        {
          title: "Deployed App Here",
          description: (
            <a
              href="https://polar-escarpment-17006.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              PokéMemory Game
            </a>
          ),
        },
        {
          title: "GitHub Code Repository Here",
          description: (
            <a href="https://github.com/Davidanderson76/pokeMemory">
              GitHub Repo
            </a>
          ),
        },
      ],
    },
  ];
};

// const appLink = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
//   a {
//     font-size: xx-large;
//     cursor: pointer;
//     text-decoration: none;
//     color: white;
//     /* border-bottom: 1px solid #377de6; */
//   }
//   a:hover {
//     border-bottom: 0;
//     padding-bottom: 0.3em;
//     border-bottom: 1px solid #377de6;
//   }
// `;
