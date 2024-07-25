import { AppModule } from "@/App/App.Module";
import { DinosaurManagementModule } from "@/DinosaurManagement/DinosaurManagement.Module";
import { Module } from "@nestjs/common";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
    }),

    AppModule,
    DinosaurManagementModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
