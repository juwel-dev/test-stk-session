import { AppController } from "@/App/Application/Controller/App.Controller";
import {ErrorHandler} from "@/Framework/Application/ErrorHandler";
import { Module } from "@nestjs/common";

/**
 * The module that includes the application functionality e.g. health check
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [ErrorHandler],
  exports: [ErrorHandler],
})
export class AppModule {}
