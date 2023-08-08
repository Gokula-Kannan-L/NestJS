import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CustomInterceptor } from './Interceptor/custom.interceptor';
import { ReportModule } from './modules/report/report.module';
import { SummaryModule } from './modules/summary/summary.module';

@Module({
  imports: [ReportModule, SummaryModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: CustomInterceptor
  }],
})
export class AppModule {}
