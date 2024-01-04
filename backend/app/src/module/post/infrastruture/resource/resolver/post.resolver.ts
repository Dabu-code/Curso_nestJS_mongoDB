import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostSchema } from '../../schema/post.schema';
import { PostService } from '../service/post.service';
import { PostEntity } from '../../../domain/Post.entity';
import { PostDto } from '../../dto/post.dto';
import { CommentDto } from '../../dto/comment.dto';

@Resolver()
export class PostResolver {

    constructor(
        private readonly service: PostService,
    ) { }

    @Query(() => [PostSchema])
    public async listPost(): Promise<PostEntity[]> {
        return await this.service.find();
    }


    @Query(() => PostSchema)
    public async getPost(@Args("uuid") uuid: string): Promise<PostEntity> {
        return await this.service.findById(uuid);
    }


    @Mutation(() => PostSchema)
    public async createPost(@Args("data") data: PostDto): Promise<PostEntity> {
        return await this.service.create(data);
    }


    @Mutation(() => PostSchema)
    public async updatePost(@Args("data") data: PostDto): Promise<PostEntity> {
        return await this.service.update(data);
    }

    @Mutation(() => PostSchema)
    public async deletePost(@Args("uuid") uuid: string): Promise<PostEntity> {
        return await this.service.delete(uuid);
    }

    @Mutation(() => PostSchema)
    public async createPostComment(@Args("uuidPost") uuidPost: string, @Args("data") data: CommentDto): Promise<PostEntity> {
        return await this.service.createComment(uuidPost, data);
    }

    @Mutation(() => PostSchema)
    public async updatePostComment(@Args("uuidPost") uuidPost: string, @Args("data") data: CommentDto): Promise<PostEntity> {
        return await this.service.updateComment(uuidPost, data);
    }

    @Mutation(() => PostSchema)
    public async deletePostComment(@Args("uuidPost") uuidPost: string, @Args("uuid") uuid: string): Promise<PostEntity> {
        return await this.service.deleteComment(uuidPost, uuid);
    }

}