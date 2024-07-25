import { FindAllDinosaursUseCase } from "@/DinosaurManagement/Domain/UseCase/FindAllDinosaurs.UseCase";

import { AppModule } from "@/App/App.Module";
import { DinosaurController } from "@/DinosaurManagement/Application/Controller/Dinosaur.Controller";
import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import { Module } from "@nestjs/common";

@Module({
  imports: [AppModule],
  controllers: [DinosaurController],
  providers: [FindAllDinosaursUseCase, DinosaurRepository],
})
export class DinosaurManagementModule {}
