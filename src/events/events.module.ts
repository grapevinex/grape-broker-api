import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './service/events.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
