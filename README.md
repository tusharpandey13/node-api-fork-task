This api is capable of managing the execution of custom tasks using the child_process module of NodeJS.  
It uses `fork()` to fork a new node process for each task.  
It can then start, pause, resume and kill the task.  
It can also send messages to and from the child process using IPC.  
Custom environment variables can be passed to the children.  
For more info, please look at the code.  

## Installation  
    git clone https://github.com/tusharpandey13/node-api-fork-task.git && cd node-api-fork-task
    docker build -t <name> .
where `<name>` is the name of image

## Usage  
    docker run -p 49160:3000 -d <name>  
use `docker ps` to get container-id  
use `docker logs <container-id>` to view the console output of the api  
the api runs internally on port 3000 and it's mapped to the port 49160 of the host  
the task outputs to stdout so it's output can also be viewed this way  

## Routes  
use `curl -i http://0.0.0.0:49160/api/v1/task/<routename>` to call an api route  
### examples:  
`curl -i http://0.0.0.0:49160/api/v1/task/echo` will print the string "echo" to stdout  
`curl -i http://0.0.0.0:49160/api/v1/task/start` will start/resume the task  
`curl -i http://0.0.0.0:49160/api/v1/task/stop` will stop(pause) the task  
`curl -i http://0.0.0.0:49160/api/v1/task/kill` will kill the task  

## Example usage:  
    git clone https://github.com/tusharpandey13/node-api-fork-task.git && cd node-api-fork-task  
    docker build -t sol .  
    docker run -p 49160:3000 -d sol  
  
use `docker ps` to get container-id  
  
run `curl -i http://0.0.0.0:49160/api/v1/task/start` to start the task  
  
wait for a few seconds, then run `curl -i http://0.0.0.0:49160/api/v1/task/stop`  
  
again run `curl -i http://0.0.0.0:49160/api/v1/task/start`  
  
now run `curl -i http://0.0.0.0:49160/api/v1/task/kill`  
  
observe the output in `docker logs <container-id>`
