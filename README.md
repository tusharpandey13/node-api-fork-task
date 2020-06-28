This is my solution  

## installation  
    git clone https://github.com/tusharpandey13/node-api-fork-task.git && cd node-api-fork-task
    docker build -t <name> .
where `<name>` is the name of image

## usage  
    docker run -p 49160:3000 -d <name>  
use `docker ps` to get container-id  
use `docker logs <container-id>` to view the console output of the api  
the api runs internally on port 3000 and it's mapped to the port 49160 of the host  
the task outputs to stdout so it's output can also be viewed this way  

## routes  
use `curl -i http://0.0.0.0:49160/api/v1/task/<routename>` to call an api route  
### examples:  
`curl -i http://0.0.0.0:49160/api/v1/task/echo` will print the string "echo" to stdout  
`curl -i http://0.0.0.0:49160/api/v1/task/start` will start/resume the task  
`curl -i http://0.0.0.0:49160/api/v1/task/stop` will stop(pause) the task  
`curl -i http://0.0.0.0:49160/api/v1/task/kill` will kill the task  

## example usage:  
run the following:  
    `git clone https://github.com/tusharpandey13/node-api-fork-task.git && cd node-api-fork-task
    docker build -t sol .
    docker run -p 49160:3000 -d sol`  
use `docker ps` to get container-id  
    curl -i http://0.0.0.0:49160/api/v1/task/start  
wait for a few seconds, then run `curl -i http://0.0.0.0:49160/api/v1/task/stop`  
again run `curl -i http://0.0.0.0:49160/api/v1/task/start`  
now run `curl -i http://0.0.0.0:49160/api/v1/task/kill`  
observe the output in `docker logs <container-id>`
