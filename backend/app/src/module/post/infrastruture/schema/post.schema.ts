import { Field, ObjectType } from "@nestjs/graphql";
import { PostEntity } from "../../domain/post.entity";
import { CommentSchema } from "./comment.schema";


@ObjectType()
export class PostSchema implements PostEntity {

    @Field()
    uuid: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    author: string;

    @Field(() => String)
    content: string;

    @Field(() => [CommentSchema])
    comments: CommentSchema[];


}


