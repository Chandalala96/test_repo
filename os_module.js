const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`ther system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);