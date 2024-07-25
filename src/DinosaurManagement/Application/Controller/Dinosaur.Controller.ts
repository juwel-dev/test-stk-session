import { DinosaurResourceMapper } from "@/DinosaurManagement/Application/Mapper/DinosaurResourceMapper";
import { CreateDinosaurRequest } from "@/DinosaurManagement/Application/Request/CreateDinosaur.Request";
import { UpdateDinosaurRequest } from "@/DinosaurManagement/Application/Request/UpdateDinosaur.Request";
import { DinosaurResource } from "@/DinosaurManagement/Application/Resource/Dinosaur.Resource";
import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { CreateDinosaurUseCase } from "@/DinosaurManagement/Domain/UseCase/CreateDinosaurUseCase";
import { DeleteDinosaurUseCase } from "@/DinosaurManagement/Domain/UseCase/DeleteDinosaurUseCase";
import { FindAllDinosaursUseCase } from "@/DinosaurManagement/Domain/UseCase/FindAllDinosaurs.UseCase";
import { GetDinosaurByIdUseCase } from "@/DinosaurManagement/Domain/UseCase/GetDinosaurByIdUseCase";
import { UpdateDinosaurUseCase } from "@/DinosaurManagement/Domain/UseCase/UpdateDinosaurUseCase";
import { ErrorHandler } from "@/Framework/Application/ErrorHandler";
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { v4 as uuidv4 } from "uuid";

@Controller("dinosaur-management/dinosaur")
@ApiTags("dinosaur-management/dinosaur")
export class DinosaurController {
  private logger = new Logger(DinosaurController.name);

  constructor(
    private readonly createDinosaurUseCase: CreateDinosaurUseCase,
    private readonly deleteDinosaurUseCase: DeleteDinosaurUseCase,
    private readonly findAllDinosaursUseCase: FindAllDinosaursUseCase,
    private readonly getDinosaurByIdUseCase: GetDinosaurByIdUseCase,
    private readonly updateDinosaurUseCase: UpdateDinosaurUseCase,
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
    @Body() request: CreateDinosaurRequest,
  ): Promise<DinosaurResource> {
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

  @Put()
  public async updateDinosaur(
    @Body() request: UpdateDinosaurRequest,
  ): Promise<DinosaurResource> {
    try {
      this.logger.log("Update Dinosaur");
      const model = DinosaurModel.builder
        .id(request.id)
        .name(request.name)
        .age(request.age)
        .build();

      const dinoUpdated = await this.updateDinosaurUseCase.execute(model);
      return DinosaurResourceMapper.toResource(dinoUpdated);
    } catch (error) {
      this.errorHandler.handle(error as Error);
    }
  }

  @Delete(":id")
  public async deleteDinosaur(@Param("id") id: string): Promise<void> {
    try {
      this.logger.log("Delete Dinosaur");
      await this.deleteDinosaurUseCase.execute(id);
    } catch (error) {
      this.errorHandler.handle(error as Error);
    }
  }

  @Get(":id")
  public async getDinosaurById(
    @Param("id") id: string,
  ): Promise<DinosaurResource> {
    try {
      this.logger.log("Get Dinosaur By Id");
      const dino = await this.getDinosaurByIdUseCase.execute(id);
      return DinosaurResourceMapper.toResource(dino);
    } catch (error) {
      this.errorHandler.handle(error as Error);
    }
  }
}
