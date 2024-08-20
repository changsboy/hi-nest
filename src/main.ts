//name 변경 불가
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 어플리케이션호출
  await app.listen(3000); // 어플의 포트
}
bootstrap();
