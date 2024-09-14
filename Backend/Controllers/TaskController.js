import cron from 'node-cron';

export const CreateTask = () => {
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

    

