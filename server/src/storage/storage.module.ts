import { Module } from '@nestjs/common'
import { BucketController } from './bucket.controller'
import { MinioService } from './minio/minio.service'
import { StorageService } from './storage.service'
import { ApplicationService } from 'src/application/application.service'
import { BucketService } from './bucket.service'
import { GatewayModule } from 'src/gateway/gateway.module'
import { BucketTaskService } from './bucket-task.service'
import { BundleService } from 'src/application/bundle.service'

@Module({
  imports: [GatewayModule],
  controllers: [BucketController],
  providers: [
    MinioService,
    StorageService,
    ApplicationService,
    BucketService,
    BucketTaskService,
    BundleService,
  ],
  exports: [StorageService, MinioService, BucketService],
})
export class StorageModule {}
