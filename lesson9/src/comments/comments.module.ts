import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, CommentsSchema } from './entities/comment.entity';
import { CommentsRepository } from './repository/comments.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Comments.name,
        schema: CommentsSchema,
      },
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsRepository, CommentsService],
})
export class CommentsModule {}
