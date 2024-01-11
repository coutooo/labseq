# labseq
labseq sequence using quarkus and angular
# labseq
# labseq

./mvnw clean package

couto@couto:~/Desktop/labseq/backend/labseq-app$ docker build -f src/main/docker/Dockerfile.jvm -t labseqbackend .

couto@couto:~/Desktop/labseq/frontend/labseq-frontend$ docker build -t labseqfrontend .

sudo docker-compose -f docker-compose.yml up --build

http://172.19.0.2:4200/

se nao docker logs labseq-angular-app-1 

