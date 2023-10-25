import { seeder } from 'nestjs-seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from '../app.module';

seeder({
  imports: [AppModule, TypeOrmModule.forFeature([])],
}).run([]);
