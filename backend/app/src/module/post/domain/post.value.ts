import { v4 as uuid } from 'uuid';
import { PostEntity, CommentEntity } from './post.entity';


export class PostValue implements PostEntity {
    public _id: string;
    public uuid: string;
    public title: string;
    public author: string;
    public content: string;
    public comments: CommentEntity[];
    constructor(value: PostEntity) {
        this._id = value.uuid ?? uuid();
        this.title = value.title;
        this.author = value.author;
        this.content = value.content;
        this.comments = value.comments.map((res) => { return { uuid: res.uuid ?? uuid(), ...res } });
    }



}