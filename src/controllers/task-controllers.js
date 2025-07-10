import Tasks from '../models/task-model.js'

export const getTasks = async (req,res) => {
    const tasks = await Tasks.find();
    res.json(tasks)
}

export const getTaskById = async (req,res) => {
    const idTask = req.params.id
    const task = await Tasks.findById(idTask)
    res.json(task)
}

export const postTask = async (req,res) => {
    const {title,description} = req.body
    const newTask = new Tasks({
        title,
        description
    })
    res.json(newTask)
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