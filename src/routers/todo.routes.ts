import { Router } from "express";
import { createTodoController, deleteTodoController, getAllTodoController, getByIdTodoController, updateTodoController } from "../controllers/todo.controller";

const todoRouter = Router()

todoRouter.get('/', getAllTodoController)
todoRouter.get('/:id', getByIdTodoController)
todoRouter.post('/', createTodoController)
todoRouter.put('/:id', updateTodoController)
todoRouter.delete('/:id', deleteTodoController)

export default todoRouter