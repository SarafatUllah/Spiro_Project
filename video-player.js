var player = videojs("videoPlayer", {
  //   autoplay: "muted",
  controls: true,
  poster: "https://picsum.photos/800/450",
  loop: false,
  playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
  plugins: {
    hotkeys: {
      enableModifiersForNumbers: false,
      seekStep: 30,
    },
  },
});

player.watermark({
  file: "https://picsum.photos/50/50",
  xpos: 0,
  ypos: 0,
  opacity: 0.6,
  clickable: true,
  url: "https://verkkonet.com",
});

player.thumbnails({
  0: {
    src:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  },
  30: {
    src:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
  },
});

player.playlist([
  {
    sources: [
      {
        src:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
    poster:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  },
  {
    sources: [
      {
        src:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        type: "video/mp4",
      },
    ],
    poster:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
  },
]);

player.playlist.autoadvance(0);

player.rotate(player);

// videojs("videoPlayer").black_skin({
//   bigButton: false,
//   stopButton: true,
//   frameNavigation: true,
//   frameRate: 24,
//   smpte: true,
//   socialShare: true,
//   skinStyle: "classic",
// });
