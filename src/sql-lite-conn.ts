import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const DATABASE_NAME_FOR_DEV = "pija"

const sqliteConfig: SqliteConnectionOptions = {
  type: "sqlite",
  database: DATABASE_NAME_FOR_DEV,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: [__dirname + "/libs/shared/src/db-migrations/*{.ts,.js}"],
  }

  export default sqliteConfig;