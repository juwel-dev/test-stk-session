import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurEntity } from "@/DinosaurManagement/Infrastructure/Entity/Dinosaur.Entity";
import { DinosaurEntityMapper } from "@/DinosaurManagement/Infrastructure/Mapper/DinosaurEntityMapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DinosaurRepository {
  async findAll(): Promise<DinosaurModel[]> {
    const collection = await DinosaurEntity.find();
    return collection.map(DinosaurEntityMapper.toDomain);
  }
}
