import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import {IUseCase} from "@/Framework/Domain/IUseCase";
import { Forbidden } from "@/Framework/Error/Forbidden";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class CreateDinosaurUseCase implements IUseCase<DinosaurModel, DinosaurModel> {
  private logger = new Logger(CreateDinosaurUseCase.name);

  constructor(private readonly repository: DinosaurRepository) {}

  async execute(modelToCreate: DinosaurModel): Promise<DinosaurModel> {
    this.logger.log("Create Dinosaur Use Case");

    const existingDinosaur = await this.repository.findById(modelToCreate.id);
    if (existingDinosaur) {
      throw new Forbidden("Dinosaur already exists");
    }

    return this.repository.create(modelToCreate);
  }
}
