const os =require('os');
console.log("the arch of comp is: " + os.arch());

const freeMemory = (os.freemem()/(1024*1024*1024))
console.log("free mem is : " + freeMemory)

const totalMemory = (os.totalmem()/(1024*1024*1024))
console.log("total mem is : " + totalMemory)

console.log("host name is : " + os.hostname())
console.log("the type of os is : "+os.type())