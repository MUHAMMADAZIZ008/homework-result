import { NextFunction, Request, Response } from "express";
import { Todo } from "../models/todo.model";

export const getAllTodoController = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const allTodos: Array<Object> | null = await Todo.find()
        res.status(200).send({
            message: 'sucess',
            data: allTodos
        })
    } catch (error) {
        next(error)
    }
}

export const getByIdTodoController = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const id = req.params.id
        const todo: Array<Object> | null = await Todo.findById(id)
        res.status(200).send({
            message: 'sucess',
            data: todo
        })
    } catch (error) {
        next(error)
    }
}

export const createTodoController = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const body = req.body
        
        const newTodo = await Todo.create(body)
        await newTodo.save()
        res.status(200).send({
            message: 'sucess',
            data: newTodo
        })
    } catch (error) {
        next(error)
    }
}

export const updateTodoController = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const body = req.body
        const id = req.params.id
        const updateTodo = await Todo.findByIdAndUpdate(id, body)
        res.status(200).send({
            message: 'updated',
        })
    } catch (error) {
        next(error)
    }
}

export const deleteTodoController = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        const id = req.params.id
        const updateTodo = await Todo.findByIdAndDelete(id)
        res.status(200).send({
            message: 'deleted',
        })
    } catch (error) {
        next(error)
    }
}