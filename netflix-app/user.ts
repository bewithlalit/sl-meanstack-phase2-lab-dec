import { BaseModel } from "./baseModel";
import { Genre } from "./genre";
import { HttpService } from "./httpService";
import { iVideo } from "./iVideo";

export class User extends BaseModel {
    name: string;
    email: string;
    age: number;
    mobileNumber: string;
    profileType: string;
    profilePic: string;
    dateOfBirth: Date;
    genre: Genre[];
    
    playVideo: iVideo;

    add() {
        new HttpService().add(new User());
    }

    update() {
        new HttpService().update(new User());
    }

    delete() {
        new HttpService().delete(new User());
    }

    videoStarting() {
        this.playVideo.videoStart();
    }
}





