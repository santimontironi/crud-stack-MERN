import Tasks from '../models/task-model.js'

export const getTasks = async (req,res) => {
    const tasks = await Tasks.find({
        user: req.user.id
    });
    res.json(tasks)
}

export const getTaskById = async (req,res) => {
    const idTask = req.params.id
    try{
        const task = await Tasks.findOne({
            _id: idTask,
            user: req.user.id
        })

        if(!task){
            return res.status(404).send("Task not found.")
        }
        else{
            return res.json(task)
        }
    }
    catch(error){
        res.status(500).json({ message: "Error getting task", error: error.message });
    }
}

export const postTask = async (req,res) => {
    const {title,description} = req.body
    const newTask = new Tasks({
        title,
        description,
        user: req.user.id
    })
    const savedNewTask = await newTask.save()
    res.json(savedNewTask)
}

export const deleteTask = async (req,res) => {
    const idTask = req.params.id;
    await Tasks.findByIdAndDelete(idTask);
    res.json({ message: 'Task deleted successfully' });
}

export const putTask = async (req,res) => {
    const idTask = req.params.id
    const { title, description } = req.body;
    const updatedTask = await Tasks.findByIdAndUpdate(
        idTask,
        { title, description },
        { new: true }
    );
    res.json(updatedTask);
}