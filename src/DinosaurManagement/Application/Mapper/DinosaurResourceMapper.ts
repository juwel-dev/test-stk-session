import { DinosaurResource } from "@/DinosaurManagement/Application/Resource/Dinosaur.Resource";
import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";

export const DinosaurResourceMapper = {
  toResource(model: DinosaurModel) {
    return DinosaurResource.builder
      .id(model.id)
      .name(model.name)
      .age(model.age)
      .build();
  },
};
