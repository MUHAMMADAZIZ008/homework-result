import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UserActiveEnum, UserRoleEnum } from 'src/enums/user.enum';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  full_name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  avatar: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserActiveEnum)),
    allowNull: false,
  })
  @Default(UserActiveEnum.INACTIVE)
  isActive: UserActiveEnum;

  @Column({
    type: DataType.ENUM(...Object.values(UserRoleEnum)),
    allowNull: false,
  })
  @Default(UserRoleEnum.USER)
  role: UserRoleEnum;
}
