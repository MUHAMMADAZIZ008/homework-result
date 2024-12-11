import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Artist {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  grammy: boolean;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
