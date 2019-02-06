#!/bin/bash
git pull
docker build --tag=curriculum . --no-cache

docker-compose down
docker-compose up -d
