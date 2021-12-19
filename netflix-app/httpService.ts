import { BaseModel } from "./baseModel";

export class HttpService<A extends BaseModel> {
    add(record:A) {
        console.log("add api call");
    }

    update(record:A) {
        console.log("update data");
    }

    delete(id:A) {
        console.log("it is deleted");
    }
}