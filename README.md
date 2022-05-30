Goto [Play With Docker](https://labs.play-with-docker.com/#) and signin with your docker account and Click Start button

Click on ADD NEW INSTANCE on left sidebar

git clone -b docker https://github.com/asimriaz/WebTech-MERNG-2022.git

cd docker-compose-MERN/  

docker-compose up -d

docker exec datasheet bash -c "npm run build"

