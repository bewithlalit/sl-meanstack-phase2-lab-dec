export class Tweet{
    id: number;
    tweeterID: number;
    body: string;
    hearts: number;
    replies: Tweet[];
    noOfRetweets: number;
    timeStamp: Date;
}