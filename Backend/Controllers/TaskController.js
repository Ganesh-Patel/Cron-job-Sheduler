import cron from 'node-cron';


let tasks = [];
export const CreateTask = (req, res) => {
    const { name, schedule, email, message } = req.body;
    tasks.push({ name, schedule, email, message });
    res.send('Task created successfully');

function logMessage() {
 console.log('Cron job executed at:', new Date().toLocaleString());
}
// Schedule the cron job to run every minute
cron.schedule('* * * * *', () => {
 logMessage();
});

}

export const editTask = () => {
    console.log('Cron job executed at:', new Date().toLocaleString());
    }

export const deleteTask = () => {
    console.log('Cron job executed at:', new Date().toLocaleString());
    }   

export const getAllTask = () => {
    console.log('Cron job executed at:', new Date().toLocaleString());
    }

export const getTaskById = () => {
    console.log('Cron job executed at:', new Date().toLocaleString());
    }

export const stopTask = () => {
    console.log('Cron job executed at:', new Date().toLocaleString());
    }   



