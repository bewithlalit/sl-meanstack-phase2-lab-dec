import { iVideo } from "./iVideo";

export class PlayVideo implements iVideo{
    videoStart() {
        console.log("Playing Video on request");
    }
}