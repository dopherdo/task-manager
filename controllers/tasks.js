const getAllTasks = (req, res) =>{
    res.send('all items from file')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}



module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}

app.get('/items/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const item = await fetchItemById(id);

        if (!item) {
            res.status(404).json({ error: 'Item not found' });
        } else {
            res.json(item);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});
app.get('/items/:id', async (req, res) => {
    try {
        // Extract the ID parameter from the URL
        const id = req.params.id;

        // Perform your asynchronous operation here (e.g., fetching data from a database)
        // For demonstration, we'll simulate fetching an item with a delay
        const item = await fetchItemById(id); // Assume this function fetches an item by ID

        // Check if the item exists
        if (!item) {
            res.status(404).json({ error: 'Item not found' });
        } else {
            res.json(item);
        }
    } catch (error) {
        // Handle any errors that occurred during the operation
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});