docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test5-java/app ../../..
