import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostEnum } from '../../enum/post.enum';
import { PostDBRepository } from '../../repository/post.repository';
import { PostService } from '../service/post.service';
import { PostResolver } from '../resolver/post.resolver';
import { PostModel, PostFactory } from '../../model/post.model';


@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: PostModel.name, schema: PostFactory, collection: PostEnum.post }],
            PostEnum.collection
        ),
    ],
    providers: [
        PostDBRepository, PostService, PostResolver,
    ]
})
export class PostModule { }