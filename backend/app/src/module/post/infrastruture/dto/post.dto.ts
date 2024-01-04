import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

import { CommentDto } from './comment.dto';
import { PostEntity } from '../../domain/post.entity';

@InputType()
export class PostDto implements PostEntity {


    @Field({ nullable: true })
    uuid: string;

    @Field(() => String)
    @IsString({ message: '' })
    title: string;

    @Field(() => String)
    @IsString({ message: '' })
    author: string;

    @Field(() => String)
    @IsString({ message: '' })
    content: string;
    @Field(() => [CommentDto])
    comments: CommentDto[];
}