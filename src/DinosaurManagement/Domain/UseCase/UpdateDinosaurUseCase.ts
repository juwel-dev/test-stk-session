import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import { IUseCase } from "@/Framework/Domain/IUseCase";
import { NotFound } from "@/Framework/Error/NotFound";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateDinosaurUseCase
  implements IUseCase<DinosaurModel, DinosaurModel>
{
  constructor(private readonly dinosaurRepository: DinosaurRepository) {}

  execute(modelToUpdate: DinosaurModel): Promise<DinosaurModel> {
    const existingDinosaur = this.dinosaurRepository.findById(modelToUpdate.id);

    if (!existingDinosaur) {
      throw new NotFound("Dinosaur not found");
    }

    return this.dinosaurRepository.update(modelToUpdate);
  }
}
