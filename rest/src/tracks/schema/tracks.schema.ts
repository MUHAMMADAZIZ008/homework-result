import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tracks {
  @Prop({ required: true })
  name: string;
}

export const TracksSchema = SchemaFactory.createForClass(Tracks);
