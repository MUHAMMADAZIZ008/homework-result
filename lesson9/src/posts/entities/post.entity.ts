import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Posts {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  })
  userId: string;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  slug: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
