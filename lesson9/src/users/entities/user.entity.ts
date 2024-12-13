import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop({
    unique: true,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
