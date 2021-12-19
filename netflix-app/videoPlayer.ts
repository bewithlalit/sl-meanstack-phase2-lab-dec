import { iVideo } from "./iVideo";

export class VideoPlayer implements iVideo{
    videoStart() {
        console.log("Playing Video on request");
    }
}