import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from './entities/post.entity';
import { PostsRepository } from './repository/posts.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostsSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsRepository, PostsService],
})
export class PostsModule {}
