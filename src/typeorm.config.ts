import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'alpaca',
  synchronize: true,
  entities: ['src/entity/**/*{.js,.ts}'],
  migrations: ['src/migration/**/*{.js,.ts}'],
  subscribers: ['src/subscriber/**/*{.js,.ts}'],
};

export = typeOrmConfig;
