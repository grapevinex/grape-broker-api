import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const typeOrmConfig = (): TypeOrmModuleOptions => ({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: ['src/entity/**/*{.js,.ts}'],
  migrations: ['src/migration/**/*{.js,.ts}'],
  subscribers: ['src/subscriber/**/*{.js,.ts}'],
})

export default typeOrmConfig
