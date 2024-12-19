import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from 'src/user/entities/user.entity';

export class Sequelize {
  static connect(): SequelizeModuleOptions {
    console.log('Connecting to database with config:', {
      host: process.env.PG_HOST,
      port: process.env.DB_PORT,
      username: process.env.PG_USER,
      database: process.env.PG_DATABASE,
    });

    return {
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      models: [User],
      autoLoadModels: true,
      logging: false,
      synchronize: true,
    };
  }
}
