let express = require("express");
let router = express.Router();

// create a reference to the db schema
let todoModel = require("../models/todo");

module.exports.displayToDoList = (req, res, next) => {
  todoModel.find((err, todoList) => {
    if (err) {
      return console.error(err);
    } else {
      // console.log(contactList);

      res.json({
        success: true,
        msg: "To Do List Displayed Successfully!",
        todoList: todoList,
        user: req.user
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.json({
    success: true,
    msg: "Successfully Displayed Add Page!"
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newTodo = todoModel({
    projectName: req.body.projectName,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  todoModel.create(newTodo, (err, todoModel) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the todo list
      res.json({
        success: true,
        msg: "Successfully Added New To Do Item!"
      });
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  todoModel.findById(id, (err, todoObject) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // show the edit view
      res.json({
        success: true,
        msg: "Successfully Displayed to do item to Edit!",
        todo: todoObject
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updatedTodo = todoModel({
    _id: id,
    projectName: req.body.projectName,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  todoModel.update({ _id: id }, updatedTodo, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Edited To Do Items!",
        todo: updatedTodo
      });
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  todoModel.remove({ _id: id }, err => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.json({
        success: true,
        msg: "Successfully Deleted To Do Item!"
      });
    }
  });
};
