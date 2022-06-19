import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MQTT_BROKER } from './constatns';
import { MQTT_BROKER_URL } from './url';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MQTT_BROKER,
        transport: Transport.MQTT,
        options: {
          url: MQTT_BROKER_URL,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
