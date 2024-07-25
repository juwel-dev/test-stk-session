import { DataSource } from "typeorm";

export const Datasource: DataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "test",
  migrations: ["migrations/*.ts"],
  entities: ["src/**/*.Entity.ts"],
});

