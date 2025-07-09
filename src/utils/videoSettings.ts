// utils/playVideo.ts
export function playVideoById(
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  videoId: string = "video"
) {
  const videoElement = document.getElementById(videoId) as HTMLVideoElement | null;

  if (videoElement) {
    videoElement.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.error("Erro ao tentar dar play no vídeo:", error);
      });
  } else {
    console.warn(`Elemento com id '${videoId}' não encontrado.`);
  }
}

export function pauseVideoById(
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
  videoId: string = "video"
) {
  const videoElement = document.getElementById(videoId) as HTMLVideoElement | null;

  if (videoElement) {
    videoElement.pause();
    setIsPlaying(false);
  } else {
    console.warn(`Elemento com id '${videoId}' não encontrado.`);
  }
}