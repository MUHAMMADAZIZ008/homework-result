import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  password: string;

  @Prop()
  lastNmae: string;

  @Prop({
    unique: true,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
