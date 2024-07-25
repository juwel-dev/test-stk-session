import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import { IUseCase } from "@/Framework/Domain/IUseCase";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteDinosaurUseCase implements IUseCase<string, void> {
  constructor(private readonly dinosaurRepository: DinosaurRepository) {}

  async execute(id: string): Promise<void> {
    const existingDinosaur = await this.dinosaurRepository.findById(id);

    if (!existingDinosaur) {
      return;
    }

    await this.dinosaurRepository.delete(id);
  }
}
