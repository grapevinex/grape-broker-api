import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AnnouncementsController } from './announcements.controller'
import { AnnouncementService } from './service/announcement.service'

@Module({
  imports: [HttpModule],
  providers: [AnnouncementService],
  controllers: [AnnouncementsController],
})
export class AnnouncementsModule {}
