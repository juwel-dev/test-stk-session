import { DinosaurResourceMapper } from "@/DinosaurManagement/Application/Mapper/DinosaurResourceMapper";
import { DinosaurResource } from "@/DinosaurManagement/Application/Resource/Dinosaur.Resource";
import { FindAllDinosaursUseCase } from "@/DinosaurManagement/Domain/UseCase/FindAllDinosaurs.UseCase";
import { Controller, Get } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller("dinosaur-management/dinosaur")
@ApiTags("dinosaur-management/dinosaur")
export class DinosaurController {
  constructor(
    private readonly findAllDinosaursUseCase: FindAllDinosaursUseCase,
  ) {}

  @ApiResponse({
    status: 200,
    description: "Returns the list of Dinosaurs",
    type: DinosaurResource,
    isArray: true,
  })
  @Get()
  public async getDinosaurs(): Promise<DinosaurResource[]> {
    try {
      const response = await this.findAllDinosaursUseCase.execute();
      return response.map(DinosaurResourceMapper.toResource);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
