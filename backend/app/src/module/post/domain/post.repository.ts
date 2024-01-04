import { CommentEntity, PostEntity } from "./post.entity";


export interface PostRepository {
    find(): Promise<PostEntity[]>;
    findById(uuid: string): Promise<PostEntity>;
    create(data: PostEntity): Promise<PostEntity>;
    update(data: PostEntity): Promise<PostEntity>;
    delete(uuid: string): Promise<PostEntity>;
}