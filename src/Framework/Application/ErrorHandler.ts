import { Forbidden } from "@/Framework/Error/Forbidden";
import { NotFound } from "@/Framework/Error/NotFound";
import { HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class ErrorHandler {
  public handle(error: Error): never {
    if (error instanceof NotFound) {
      throw new HttpException(error.message, 404);
    }

    if (error instanceof Forbidden) {
      throw new HttpException(error.message, 403);
    }

    throw new HttpException(error.message, 500);
  }
}
