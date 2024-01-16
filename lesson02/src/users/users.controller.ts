import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
type IUser = {
  name: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
};

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() //Get all users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //Get a single user
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post() //Create a user
  create(@Body() user: IUser) {
    return this.usersService.create(user);
  }

  @Patch(':id') //Update a user
  update(@Param('id') id: string, @Body() userUpdate: IUser) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') //Delete a user
  delete(@Param('id') id: string) {
    return this.delete(id);
  }
}
