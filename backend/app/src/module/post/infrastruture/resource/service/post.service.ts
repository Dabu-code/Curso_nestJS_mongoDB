import { Injectable, Logger } from "@nestjs/common";
import { MessageCrudError, errorException } from "src/core/exception/error.exception";
import { PostUseCase } from "../../../application/post.use-case";
import { PostDBRepository } from "../../repository/post.repository";
import { CommentEntity, PostEntity } from "../../../domain/post.entity";
import { PostEnum } from "../../enum/post.enum";


@Injectable()
export class PostService {
    private readonly logger = new Logger(PostEnum.post);
    public use_case: PostUseCase;

    constructor(private readonly repository: PostDBRepository) {
        this.use_case = new PostUseCase(this.repository)
    }

    public async find(): Promise<PostEntity[]> {
        try {
            const listed = await this.use_case.find();
            if (listed.length === 0) errorException(MessageCrudError.find, 404, this.logger);
            return listed;
        } catch (error: any) {
            throw error;
        }
    }


    public async findById(uuid: string): Promise<PostEntity> {
        try {
            console.log(uuid)
            const geted = await this.use_case.findById(uuid);
            if (geted.uuid === undefined) throw new errorException(MessageCrudError.find, 404, this.logger);
            return geted;
        } catch (error: any) {
            throw error;
        }
    }


    public async create(data: PostEntity): Promise<PostEntity> {
        try {
            const created = await this.use_case.create(data);
            if (created.uuid === undefined) throw new errorException(MessageCrudError.create, 400, this.logger);
            return created;
        } catch (error: any) {
            throw error;
        }
    }

    public async update(data: PostEntity): Promise<PostEntity> {
        try {
            const updated = await this.use_case.update(data);
            if (updated.uuid === undefined) throw new errorException(MessageCrudError.update, 404, this.logger);
            return updated;
        } catch (error: any) {
            throw error;
        }
    }

    public async delete(uuid: string): Promise<PostEntity> {
        try {
            const deleted = await this.use_case.delete(uuid);
            if (deleted.uuid === undefined) throw new errorException(MessageCrudError.delete, 400, this.logger);
            return deleted;
        } catch (error: any) {
            throw error;
        }
    }


    public async createComment(uuidPost: string, data: CommentEntity): Promise<PostEntity> {
        try {
            const geted = await this.use_case.createComment(uuidPost, data);
            if (geted.uuid === undefined) throw new errorException(MessageCrudError.find, 422, this.logger);
            return geted;
        } catch (error: any) {
            throw error;
        }
    }

    public async updateComment(uuidPost: string, data: CommentEntity): Promise<PostEntity> {
        try {
            const geted = await this.use_case.updateComment(uuidPost, data);
            if (geted.uuid === undefined) throw new errorException(MessageCrudError.find, 422, this.logger);
            return geted;
        } catch (error: any) {
            throw error;
        }
    }

    public async deleteComment(uuidPost: string, uuid: string): Promise<PostEntity> {
        try {
            const geted = await this.use_case.deleteComment(uuidPost, uuid);
            if (geted.uuid === undefined) throw new errorException(MessageCrudError.find, 422, this.logger);
            return geted;
        } catch (error: any) {
            throw error;
        }
    }



}








