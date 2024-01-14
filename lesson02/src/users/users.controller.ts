import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

interface IUser {
  id: string;
  name: string;
}

@Controller('users')
export class UsersController {
  /*
  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */
  @Get() //Get all users or /users?role=value
  findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
    return [];
  }

  @Get(':id') //Get a single user
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() //Create a user
  create(@Body() user: IUser) {
    return user;
  }

  @Patch(':id') //Update a user
  update(@Param('id') id: string, @Body() userUpdate: IUser) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //Delete a user
  delete(@Param('id') id: string) {
    return { id };
  }
}
