# README
## Welcom to tretter!!
- tretter is able to create your efficiently time.
## how to build environment
- 開発環境でのキャッシュの有効化
```
touch backend/tmp/caching-dev.txt
```
- preparing with docker compose
```
docker-compose build tretter_backend

docker-compose run --rm tretter_backend bundle install
docker-compose run --rm tretter_backend bundle exec rails db:create
docker-compose run --rm tretter_backend bundle exec rails db:migrate
```
- container image build
```
docker-compose build tretter
```
- All container execute
```
docker compose up -d
```
