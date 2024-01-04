import { Module } from '@nestjs/common';
import { PostModule } from './module/post.module';


@Module({
    imports: [PostModule]
})
export class PostGeneralModule { }