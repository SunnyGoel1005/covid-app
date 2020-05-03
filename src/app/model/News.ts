export class News{
    id : number;
    title : string;
    description : string;
    summary : string;
    message : string;

    constructor(title : string, description : string, summary : string, message : string){
        this.title = title;
        this.description = description;
        this.summary = summary;
        this.message = message;
    }
}