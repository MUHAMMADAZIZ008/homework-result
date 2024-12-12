import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Albums {
  @Prop({ required: true })
  photoPath: string;

  @Prop({ required: true })
  photoYear: Date;
}

export const AlbumsSchema = SchemaFactory.createForClass(Albums);
