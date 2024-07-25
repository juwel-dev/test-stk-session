import { AppController } from "@/App/App.Controller";
import { Module } from "@nestjs/common";

/**
 * The module that includes the application functionality e.g. health check
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
