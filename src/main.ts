import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Model } from 'mongoose';

async function bootstrap() {
  console.log('asdasd');
  console.log(5);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
