import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: '',
      database: 'meal_plan_dev',
      entities: [User],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard('jwt'),
    // },
  ],
})
export class AppModule {}
