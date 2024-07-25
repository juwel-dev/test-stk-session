import {Controller, Get} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller("/app")
export class AppController {

  @ApiTags("health-check")
  @ApiResponse({status: 200, description: "Returns OK if the service is running"})
  @ApiOperation({summary: "Health check"})
  @Get("/health-check",)
  public healthCheck(): string {
    return "OK";
  }

}