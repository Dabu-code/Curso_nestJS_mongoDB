import { Field, ObjectType } from "@nestjs/graphql";
import { CommentEntity } from "../../domain/post.entity";



@ObjectType()
export class CommentSchema implements CommentEntity {

    @Field()
    uuid: string;

    @Field(() => String)
    author: string;

    @Field(() => String)
    content: string;

}


