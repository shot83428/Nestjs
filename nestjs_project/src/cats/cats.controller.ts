import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, Req, Header, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { Request } from 'express';
import { Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {Cat} from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Post('hello')
  @Header('Content-Type','application/x-www-form-urlencoded')
  hello(@Req() request:Request,@Res() res:Response) {

    res.send(request.body)
    //return this.catsService.create(createCatDto);
  }

  

  @Get()
  //@HttpCode(400)
  //important async => promise successed
  async findAll(@Req() requset:Request):Promise<Cat[]> {
    return this.catsService.findAll();
    //Response.status(400).send( this.catsService.findAll());
  }

  @Get('ab*cd')
  findabc(@Req() requset:Request,@Res() res:Response) {
    res.status(300)
    res.send(this.catsService.findAll())
    //return this.catsService.findAll()
    //Response.status(400).send( this.catsService.findAll());
  }

  @Get('abab')
  async findOne(@Param('id',ParseIntPipe) id: string) {
    console.log(id.split('=')[1])
    return this.catsService.findOne(+id.split('=')[1]);
    //return this.catsService.findOne(+id);
  }

  @Get(':uuid')
  async findOneuuid(@Param('uuid',ParseUUIDPipe) id: string) {
    console.log(id.split('=')[1])
    return this.catsService.findOne(+id.split('=')[1]);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
