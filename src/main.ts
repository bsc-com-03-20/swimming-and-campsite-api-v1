import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
   const config = new DocumentBuilder()
 .setTitle('Malawi swimming and campsite ')
 .setDescription('This app will be used to book different pitches and campsites')
 .setVersion('1.0')//leave this version as it is
 .addTag('Developed By Emmanuel Kamanga') //add any tag or leave blank
 .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

 
  await app.listen(3333);
}
bootstrap();
