import { StrictBuilder } from "builder-pattern";

export class DinosaurModel {
  public static get builder() {
    return StrictBuilder<DinosaurModel>();
  }

  private constructor() {}

  public id = "";
  public name = "";
  public age = 0;
}
