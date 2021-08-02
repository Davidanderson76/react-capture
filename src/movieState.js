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

export const MovieState = () => {
  return [
    {
      title: "Audio Player",
      mainImg: audioPlayer2,
      secondaryImg: audioPlayer,
      url: "/work/audio-player",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao. Funny AND engagging!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao. Funny AND engagging!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Pokememory",
      mainImg: pokememory2,
      url: "/work/Pokememory",
      secondaryImg: pokememory,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao...The pasta game will never be the same..",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
