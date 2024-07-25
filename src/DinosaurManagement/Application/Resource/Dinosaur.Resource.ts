import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { StrictBuilder } from "builder-pattern";

export class DinosaurResource {
  public static get builder() {
    return StrictBuilder<DinosaurResource>();
  }
  private constructor() {}

  @ApiProperty({ type: "string" })
  public id = "";

  @ApiProperty({ type: "string" })
  public name = "";

  @ApiProperty({ type: "number" })
  public age = 0;
}
