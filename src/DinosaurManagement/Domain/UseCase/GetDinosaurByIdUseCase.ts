import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import { IUseCase } from "@/Framework/Domain/IUseCase";
import { NotFound } from "@/Framework/Error/NotFound";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetDinosaurByIdUseCase implements IUseCase<string, DinosaurModel> {
  public constructor(private readonly repository: DinosaurRepository) {}

  async execute(id: string): Promise<DinosaurModel> {
    const dinosaur = await this.repository.findById(id);

    if (!dinosaur) {
      throw new NotFound("Dinosaur not found");
    }

    return dinosaur;
  }
}
