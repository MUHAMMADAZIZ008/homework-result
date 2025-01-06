import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserStatusEnum } from 'src/common/util/enum';

@Schema()
export class User extends Document {
  @Prop()
  fullname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: String,
    enum: UserStatusEnum,
    default: UserStatusEnum.ACTIVE,
  })
  status: UserStatusEnum;
}

export const userSchema = SchemaFactory.createForClass(User);
