import { Column, DataType, Default, Model, Table } from 'sequelize-typescript';
import { UserActiveEnum, UserRoleEnum } from 'src/enums/user.enum';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column
  full_name: string;

  @Column
  email: string;

  @Column
  password: string;

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
