
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PostModel } from "../model/post.model";
import { PostEnum } from "../enum/post.enum";
import { PostUtils } from "./utils/post.utils";
import { PostEntity } from "../../domain/post.entity";


export class PostDBRepository {

    constructor(
        @InjectModel(PostModel.name, PostEnum.collection)
        private repository: Model<PostModel>,
    ) { }


    public async find(): Promise<PostEntity[]> {
        try {
            const listed = await this.repository.find().exec();
            if (!listed) return [];
            return listed.map<PostEntity>(item => PostUtils.get(item));
        } catch (error: any) {
            throw error;
        }
    }

    public async findById(uuid: string): Promise<PostEntity> {
        try {
            const geted: PostModel = await this.repository.findById(PostUtils.uuid(uuid)).exec();
            if (!geted) return PostUtils.data;
            return PostUtils.get(geted);
        } catch (error: any) {
            throw error;
        }
    }

    public async create(data: PostEntity): Promise<PostEntity> {
        try {
            console.log('SI LLEGA')
            console.log(data)
            const new_data = new this.repository(data);
            const created: PostModel = await new_data.save();
            if (!created) return PostUtils.data;
            return PostUtils.get(created);
        } catch (e: any) {
            throw e;
        }
    }

    public async update(data: PostEntity): Promise<PostEntity> {
        try {
            const updated: PostModel = await this.repository.findByIdAndUpdate(data['_id'], data, { new: true });
            if (!updated) return PostUtils.data;
            return PostUtils.get(updated);
        } catch (e: any) {
            throw e;
        }
    }

    public async delete(uuid: string): Promise<PostEntity> {
        try {
            const deleted: PostModel = await this.repository.findOneAndDelete(PostUtils.uuid(uuid));
            if (!deleted) return PostUtils.data;
            return PostUtils.get(deleted);
        } catch (e: any) {
            return e;
        }
    }


}