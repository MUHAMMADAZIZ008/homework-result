import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { userRoleEnum, userStatusEnum } from 'src/utils/enum';

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

  @Prop({
    enum: userRoleEnum,
    default: userRoleEnum.USER,
  })
  role: string;

  @Prop({
    enum: userStatusEnum,
    default: userStatusEnum.INACTIVE,
  })
  status: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
