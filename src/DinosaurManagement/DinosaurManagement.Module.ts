import { FindAllDinosaursUseCase } from "@/DinosaurManagement/Domain/UseCase/FindAllDinosaurs.UseCase";

import { AppModule } from "@/App/App.Module";
import { DinosaurController } from "@/DinosaurManagement/Application/Controller/Dinosaur.Controller";
import { CreateDinosaurUseCase } from "@/DinosaurManagement/Domain/UseCase/CreateDinosaurUseCase";
import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import { Module } from "@nestjs/common";

@Module({
  imports: [AppModule],
  controllers: [DinosaurController],
  providers: [
    CreateDinosaurUseCase,
    FindAllDinosaursUseCase,
    DinosaurRepository,
  ],
})
export class DinosaurManagementModule {}
