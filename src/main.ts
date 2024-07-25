import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import "source-map-support/register";
import { MainModule } from "@/Main.Module";

import "./Datasource";
import { HttpStatus, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().build(),
  );
  SwaggerModule.setup("api", app, document);
  await app.listen(8090);
}

bootstrap();
