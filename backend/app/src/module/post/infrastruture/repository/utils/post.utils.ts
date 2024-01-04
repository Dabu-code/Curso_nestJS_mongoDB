
import { PostEntity } from "src/module/post/domain/post.entity"
import { PostModel } from "../../model/post.model"



export class PostUtils {

    public static data: PostEntity = {
        uuid: "",
        author: "",
        title: "",
        content: "",
        comments: []
    }

    public static uuid(uuid: string): { _id: string } {
        return { _id: uuid }
    }


    public static get(value: PostModel): PostEntity {
        return {
            uuid: value._id,
            title: value.title,
            author: value.author,
            content: value.content,
            comments: value.comments
        }
    }

}