#!/bin/bash
#
# start storybook inside the docker container with docker-compose and expose port
docker-compose run -p 9001:9001 website npm run storybook
