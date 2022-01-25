import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
// DTO is data transfer object
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Object> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<string> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: string,
  ): Promise<string> {
    // console.log(updateItemDto);
    return this.itemsService.update(id, updateItemDto);
  }

  @Get('query')
  findAllWithQueryParams(@Query() query): string {
    console.log(query);
    return 'Get items by query params';
  }

  @Get('express-style')
  findAllExpressStyle(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Get all items in express style');
  }
}
