import { CommentEntity, PostEntity } from "../domain/post.entity";
import { PostRepository } from "../domain/post.repository";
import { PostValue } from "../domain/post.value";



export class PostUseCase implements PostRepository {


    constructor(private readonly repository: PostRepository) { }

    public async find(): Promise<PostEntity[]> {
        try {
            const listed = await this.repository.find();
            return listed;
        } catch (error: any) {
            throw error;
        }
    }

    public async findById(uuid: string): Promise<PostEntity> {
        try {
            const geted = await this.repository.findById(uuid);
            return geted;
        } catch (error: any) {
            throw error;
        }
    }

    public async create(data: PostEntity): Promise<PostEntity> {
        try {
            const new_data: PostValue = new PostValue(data);
            const created: PostEntity = await this.repository.create(new_data);
            return created;
        } catch (error: any) {
            throw error;
        }
    }

    public async update(data: PostEntity): Promise<PostEntity> {
        try {
            const update_data: PostValue = new PostValue(data);
            const updated: PostEntity = await this.repository.update(update_data);
            return updated;
        } catch (error: any) {
            throw error;
        }
    }

    public async delete(uuid: string): Promise<PostEntity> {
        try {
            const deleted: PostEntity = await this.repository.delete(uuid);
            return deleted;
        } catch (error: any) {
            throw error;
        }
    }

    public async createComment(uuidPost: string, data: CommentEntity): Promise<PostEntity> {
        try {
            const geted: PostEntity = await this.findById(uuidPost);
            geted.comments.push(data);
            return await this.update(geted);
        } catch (error: any) {
            throw error;
        }
    }

    public async updateComment(uuidPost: string, data: CommentEntity): Promise<PostEntity> {
        try {
            const geted: PostEntity = await this.findById(uuidPost);
            geted.comments = geted.comments.filter(fil => fil.uuid !== data.uuid);
            geted.comments.push(data);
            return await this.update(geted);
        } catch (error: any) {
            throw error;
        }
    }

    public async deleteComment(uuidPost: string, uuid: string): Promise<PostEntity> {
        try {
            const geted: PostEntity = await this.findById(uuidPost);
            geted.comments = geted.comments.filter(fil => fil.uuid !== uuid);
            return await this.update(geted);
        } catch (error: any) {
            throw error;
        }
    }



}