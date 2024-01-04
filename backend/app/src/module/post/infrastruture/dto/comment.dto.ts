import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CommentEntity } from '../../domain/post.entity';


@InputType()
export class CommentDto implements CommentEntity {

    @Field({ nullable: true })
    uuid?: string;

    @Field(() => String)
    @IsString({ message: '' })
    author: string;

    @Field(() => String)
    @IsString({ message: '' })
    content: string;
    
}