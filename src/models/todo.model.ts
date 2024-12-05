import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    is_done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


export const Todo = mongoose.model('todo', todoSchema)