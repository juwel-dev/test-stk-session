import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurEntity } from "@/DinosaurManagement/Infrastructure/Entity/Dinosaur.Entity";

export const DinosaurEntityMapper = {
  toDomain: (entity: DinosaurEntity) => {
    return DinosaurModel.builder
      .id(entity.id)
      .name(entity.name)
      .age(entity.age)
      .build();
  },
};
