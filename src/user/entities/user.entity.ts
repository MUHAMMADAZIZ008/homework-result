import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/interface/interface';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({ type: DataType.ENUM(...Object.values(Role)), allowNull: false })
  role: Role;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_Active: boolean;

  
}
