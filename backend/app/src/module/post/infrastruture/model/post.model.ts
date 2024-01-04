import { Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PostEnum } from '../enum/post.enum';
import { CommentModel } from './comment.model';
import { PostEntity } from '../../domain/post.entity';

@Schema({ collection: PostEnum.post })
export class PostModel implements PostEntity {


    @Prop()
    @Field(() => ID)
    _id?: string;

    @Prop()
    @Field(() => String)
    title: string;

    @Prop()
    @Field(() => String)
    author: string;

    @Prop()
    @Field(() => String)
    content: string;

    @Prop()
    @Field(() => [CommentModel])
    comments: CommentModel[];

}


export type PostDocument = HydratedDocument<PostModel>;
export const PostFactory = SchemaFactory.createForClass(PostModel);

