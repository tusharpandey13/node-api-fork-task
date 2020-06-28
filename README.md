This is my solution  

## installation  

    docker build -t <name> .
where `<name>` is the name of image

## usage  
    docker run -p 49160:3000 -d <name>  
use `docker ps` to get container-id  
use `docker logs <container-id>` to view console sdtdout  
the task outputs to stdout so it's output can also be viewed this way  

## routes  
use `curl -i http://0.0.0.0:49160/api/v1/task/<routename>` to call an api route  
examples:  
`curl -i http://0.0.0.0:49160/api/v1/task/echo` will print the string "echo" to stdout  
`curl -i http://0.0.0.0:49160/api/v1/task/start` will start/resume the task  
`curl -i http://0.0.0.0:49160/api/v1/task/stop` will stop(pause) the task  
`curl -i http://0.0.0.0:49160/api/v1/task/kill` will kill the task  
