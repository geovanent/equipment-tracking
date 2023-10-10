import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiBody({
    description: 'Create User',
    type: User,
  })
  create(@Body() body): Promise<User> {
    const { firstName, lastName, email, password } = body;
    return this.userService.create(firstName, lastName, email, password);
  }
}
