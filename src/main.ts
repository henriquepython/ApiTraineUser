import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //swagger config
  const documentBuilder = new DocumentBuilder()
    .setTitle('Users')
    .setDescription('The Users API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, document);
  
  app.enableCors({ origin: '*' });
  await app.listen(3000);
}
bootstrap();
