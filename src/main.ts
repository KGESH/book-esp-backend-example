import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MQTT_BROKER_URL } from './url';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: MQTT_BROKER_URL,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap();
