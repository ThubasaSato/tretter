#!/bin/bash

set -e

cd /tretter

# dockerホストのIPアドレス取得
export DOCKER_HOST=$(ip route | awk '/default/ { print $3 }')
echo "DOCKER_HOST is $DOCKER_HOST"

# $TRETTER_BACKEND_HOST のチェック
if [ ! $TRETTER_BACKEND_HOST ]; then
  echo "use DOCKER_HOST as TRETTER_BACKEND_HOST"
  export TRETTER_BACKEND_HOST=$(echo $DOCKER_HOST)
fi
echo "TRETTER_BACKEND_HOST is $TRETTER_BACKEND_HOST"

# $TRETTER_BACKEND_PORT のチェック
if [ ! $TRETTER_BACKEND_PORT ]; then
  echo 'use default TRETTER_BACKEND_PORT 33000'
  export TRETTER_BACKEND_PORT=33000
fi
echo "TRETTER_BACKEND_PORT is $TRETTER_BACKEND_PORT"

# $TRETTER_FRONTEND_HOST のチェック
if [ ! $TRETTER_FRONTEND_HOST ]; then
  echo "use DOCKER_HOST as TRETTER_FRONTEND_HOST"
  export TRETTER_FRONTEND_HOST=$(echo $DOCKER_HOST)
fi
echo "TRETTER_FRONTEND_HOST is $TRETTER_FRONTEND_HOST"

# $TRETTER_FRONTEND_PORT のチェック
if [ ! $TRETTER_FRONTEND_PORT ]; then
  echo 'use default TRETTER_FRONTEND_PORT 43000'
  export TRETTER_FRONTEND_PORT=43000
fi
echo "TRETTER_FRONTEND_PORT is $TRETTER_FRONTEND_PORT"

# nginx用設定ファイルの作成
if [ $FRONT_STATIC_DEPLOY_TEST = 'true' ]; then
  envsubst '$$TRETTER_BACKEND_HOST $$TRETTER_BACKEND_PORT $$TRETTER_FRONTEND_HOST $$TRETTER_FRONTEND_PORT' < front_static_deploy_test.conf > /etc/nginx/conf.d/default.conf
else
  envsubst '$$TRETTER_BACKEND_HOST $$TRETTER_BACKEND_PORT $$TRETTER_FRONTEND_HOST $$TRETTER_FRONTEND_PORT' < default.conf > /etc/nginx/conf.d/default.conf
fi

# tretter_backend health check
echo 'Waiting for tretter_backend ...'
count=1
result=0
while [ $result -eq 0 ]; do
  if [ $count -gt 150 ]; then
    echo 'XXXXXXXXXX tretter_backend is unhealthy.'
    exit 1
  fi

  echo "********** Health check for tretter_backend: $count th try **********"

  status=$(curl -if http://$TRETTER_BACKEND_HOST:$TRETTER_BACKEND_PORT | awk 'NR==1{ print $2}')
  if [ "$status" = '204' ]; then
    result=1
    break;
  fi

  sleep 1

  count=$((++count))
done

echo "tretter_backend $TRETTER_BACKEND_HOST:$TRETTER_BACKEND_PORT is healthy."

exec "$@"
