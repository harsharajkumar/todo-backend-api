const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//Create new task 
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);     // fast (in memory)
    const savedTask = await newTask.save(); // slow (goes to DB)
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const search = req.query.search || ''; // value from ?search=
    const status = req.query.status|| ' ';
    const query = {};
    if (search) {
      query.title = { $regex: search, $options: 'i' }; // match title partially, case-insensitive
    }

    if(status == 'completed'){
        query.completed = true ;
    }
    else if(status== 'pending'){
        query.completed= false;
    }
    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Patch
router.get('/id/complete',async(req,res)=>{
    try{
        updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            {completed:true},
            {new:true}
        );

        if(!updateTask){
            return res.status(404).json({error : 'Task not found'})
        }
        res.json(updateTask)
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

// update task 
router.get('/:id',async(req,res)=>{
    try{
        const updateTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updateTask){
            return res.status(404).json({error:'Task not found'});
        }
        res.json(updateTask);
    }catch(err){
        res.status(400).json({error:err.message})
    }

});

//delete task 
router.get('/:id',async(req,res)=>{
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if(!deleteTask){
            return res.status(404).json({error:'Task not found'});
        }
        res.json({message:'Task deleted'})
    }catch(err){
        res.status(400).json({error:err.message})
    }
});

module.exports = router