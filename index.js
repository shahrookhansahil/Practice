var cluster = require('cluster');
if(cluster.isWorker){
    console.log("child thread");
} else{
    console.log("parent Child");
    cluster.fork();
    cluster.fork();
}