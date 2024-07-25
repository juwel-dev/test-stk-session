import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurEntity } from "@/DinosaurManagement/Infrastructure/Entity/Dinosaur.Entity";
import { DinosaurEntityMapper } from "@/DinosaurManagement/Infrastructure/Mapper/DinosaurEntityMapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DinosaurRepository {
  public async findAll(): Promise<DinosaurModel[]> {
    const collection = await DinosaurEntity.find();
    return collection.map(DinosaurEntityMapper.toDomain);
  }

  public async findById(id: string): Promise<DinosaurModel | null> {
    const entity = await DinosaurEntity.findOne({ where: { id } });
    return entity ? DinosaurEntityMapper.toDomain(entity) : null;
  }

  public async create(model: DinosaurModel): Promise<DinosaurModel> {
    const entity = DinosaurEntityMapper.toEntity(model);
    await entity.save();
    return DinosaurEntityMapper.toDomain(entity);
  }
}
