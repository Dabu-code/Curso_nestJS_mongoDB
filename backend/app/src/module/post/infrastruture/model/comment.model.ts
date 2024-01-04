import { Field } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';


@Schema()
export class CommentModel {

    @Prop()
    @Field(() => String)
    uuid: string;

    @Prop()
    @Field(() => String)
    author: string;

    @Prop()
    @Field(() => String)
    content: string;

}


