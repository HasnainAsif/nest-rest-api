import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  //   private readonly items: Item[] = [
  //     {
  //       id: '26734562354',
  //       name: 'Item One',
  //       qty: 100,
  //       description: 'This is item one',
  //     },
  //     {
  //       id: '267345623512',
  //       name: 'Item Two',
  //       qty: 100,
  //       description: 'This is item two',
  //     },
  //   ];

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findById(id);
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    const saveItem = await newItem.save();
    return saveItem;
  }

  async delete(id: string): Promise<string> {
    const deletedItem = await this.itemModel.findByIdAndDelete(id);
    return `${deletedItem.name} deleted successfully`;
  }

  async update(id: string, item: Item): Promise<string> {
    console.log(5);
    if (1) {
    }
    const updatedItem = await this.itemModel.findByIdAndUpdate(id, item, {
      new: true,
    });
    return `Item updated successfully`;
  }
}
