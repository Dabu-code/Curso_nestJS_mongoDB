import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { PostGeneralModule } from './module/post/infrastruture/resource/post.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/post', { connectionName: 'postdb' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/global/graphql/schema.gql'),
      sortSchema: true,
      installSubscriptionHandlers: true,
    }),
    PostGeneralModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
