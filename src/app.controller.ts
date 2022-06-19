import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, MqttContext, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('esp/connect')
  onConnect(@Payload() payload: string, @Ctx() context: MqttContext) {
    console.log(`수신한 토픽 : ${context.getTopic()}`);
    console.log(`수신한 메시지 : ${payload}`);
    console.log(context.getPacket());
  }
}
