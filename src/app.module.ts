import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { UserModule} from './entity/user.module';
import { TypeOrmConfig } from './connect';


@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
  ],
})
export class AppModule {}
