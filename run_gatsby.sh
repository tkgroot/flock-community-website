#!/bin/bash
#
# start gatsby development server with docker-compose and expose port
docker-compose run -p 8000:8000 website npm run develop
