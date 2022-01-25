import * as mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});

export { ItemSchema };
