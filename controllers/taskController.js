const db = require('../models/index.js');

module.exports = {
    getAllTasks: (req,res) => {
        console.log(req.isAuthenticated());
        db.Task.selectAll( data =>{
            res.status(200).json(data);
        })
    },
    createNewTask: (req, res) => {
        console.log(req.isAuthenticated());
        if(req.isAuthenticated()){
          const taskData = req.body.vals;
          console.log(taskData);
            db.Task.insertOne(taskData, result => {
              res.status(200).json({ id: result.insertId });
            });
        }
        else {
          res.status(400).end();
        }
      },
    updateTaskById: (req, res) => {
        console.log(req.isAuthenticated());
        const taskData = req.body.vals; // grab onto the new user array of values
          db.task.updateOneByTask(taskData, req.params.id, result => {
            if (result.changedRows === 0) {
              res.status(204).end();
            } else {
              res.status(200).end();
            }
          });
      },
    deleteById: (req, res) => {
      console.log(req.isAuthenticated());
      if(req.isAuthenticated){
          db.Task.deleteOne(req.params.id, data =>{
              res.status(200).json(data);
          })
      }
      else {
          res.status(400).end();
      }
  },
      getTaskById: (req, res) => {
        console.log(req.isAuthenticated());
        db.Comment.selectOneById(req.params.id, data =>{
            res.status(200).json(data);
        })
      },
      getTaskByGroupId: (req, res) => {
        console.log(req.isAuthenticated());
        db.Task.selectByGroup(req.params.id, data => {
          res.status(200).json(data);
        });
      },
      getRecentTasksByGroupId: (req, res) => {
        console.log(req.isAuthenticated());
        db.Task.selectRecentByGroup(req.params.id, data => {
          res.status(200).json(data);
        });
      },
      getCompletionData: (req, res) => {
        console.log(req.isAuthenticated());
        db.Task.getCompletionData(req.params.id, data => {
          res.status(200).json(data);
        });
      },
      getUnCompletionData: (req, res) => {
        console.log(req.isAuthenticated());
        db.Task.getUnCompletionData(req.params.id, data => {
          res.status(200).json(data);
        });
      },
      getTaskData: (req,res) => {
        console.log(req.isAuthenticated());
        db.Task.getCompletionData( req.params.id, completed =>{
          db.Task.getUnCompletionData(req.params.id, unfinished => {
            res.status(200).json(completed.concat(unfinished));
          });
        })
      },
      markTaskAsDone: (req, res) => {
        db.Task.markTaskAsDone(req.params.id, data =>{
          res.status(200).json(data);
        });
      },
      markTaskAsNotDone: (req, res) => {
        db.Task.markTaskAsNotDone(req.params.id, data =>{
          res.status(200).json(data);
        });
      }
}