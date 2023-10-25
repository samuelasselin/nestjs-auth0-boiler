import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async findOneOrCreate(createUserDto: CreateUserDto) {
    const { email, auth0_id } = createUserDto;

    const user = await this.usersRepository.findOneBy({
      auth0_id: auth0_id,
    });

    if (!user) {
      const u = new User();
      u.email = email;
      u.auth0_id = auth0_id;

      return await this.usersRepository.insert(u);
    }

    return user;
  }
}
