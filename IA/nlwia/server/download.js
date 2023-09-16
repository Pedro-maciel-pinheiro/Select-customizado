import ytdl from "ytdl-core";
import fs from "fs";
import { error } from "console";

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId;
  console.log("Realizando o download do vídeo:", videoId);

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000;

      if (seconds > 60) {
        throw new Error("A duração deste vídeo é maior do que 60 segundos ");
      }
    }).on("end", () => {
    
      console.log("download do video finalizado.");
    }).on("error", (error) => {
    
      console.log(
        "Nao foi possivel fazer o download do video. Detalhes do erro:",
        error
      );
    }).pipe(fs.createWriteStream("./tmp/audio.mp4"));
    
};
