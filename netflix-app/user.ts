import { Genre } from "./genre";
import { iVideo } from "./iVideo";

export class User {
    id: number;
    name: string;
    email: string;
    age: number;
    mobileNumber: string;
    profileType: string;
    profilePic: string;
    dateOfBirth: Date;
    genre: Genre[];
    
    playVideo: iVideo;

    videoStarting() {
        this.playVideo.videoStart();
    }
}





