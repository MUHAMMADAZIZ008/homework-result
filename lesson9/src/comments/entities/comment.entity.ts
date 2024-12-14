import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Comments {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  })
  userId: string;

  @Prop()
  content: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
  })
  postId: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
