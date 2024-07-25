import { DinosaurResourceMapper } from "@/DinosaurManagement/Application/Mapper/DinosaurResourceMapper";
import { DinosaurResource } from "@/DinosaurManagement/Application/Resource/Dinosaur.Resource";
import {DinosaurModel} from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import {CreateDinosaurUseCase} from "@/DinosaurManagement/Domain/UseCase/CreateDinosaurUseCase";
import { FindAllDinosaursUseCase } from "@/DinosaurManagement/Domain/UseCase/FindAllDinosaurs.UseCase";
import { ErrorHandler } from "@/Framework/Application/ErrorHandler";
import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { v4 as uuidv4 } from 'uuid';


@Controller("dinosaur-management/dinosaur")
@ApiTags("dinosaur-management/dinosaur")
export class DinosaurController {
  private logger = new Logger(DinosaurController.name);

  constructor(
    private readonly createDinosaurUseCase: CreateDinosaurUseCase,
    private readonly findAllDinosaursUseCase: FindAllDinosaursUseCase,
    private readonly errorHandler: ErrorHandler,
  ) {}

  @ApiResponse({
    status: 200,
    description: "Returns the list of Dinosaurs",
    type: DinosaurResource,
    isArray: true,
  })
  @Get()
  public async getDinosaurs() {
    try {
      this.logger.log("Get Dinosaurs");
      const response = await this.findAllDinosaursUseCase.execute();
      return response.map(DinosaurResourceMapper.toResource);
    } catch (error) {
      this.errorHandler.handle(error as Error);
    }
  }

  @Post()
  public async createDinosaur(
    @Body() request: DinosaurResource
  ) {
    try {
      this.logger.log("Create Dinosaur");
      const model = DinosaurModel.builder
        .id(request.id || uuidv4())
        .name(request.name)
        .age(request.age)
        .build();

      const dinoCreated = await this.createDinosaurUseCase.execute(model);
      return DinosaurResourceMapper.toResource(dinoCreated);
    } catch (error) {
      this.errorHandler.handle(error as Error);
    }
  }
}
