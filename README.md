Goto [Play With Docker](https://labs.play-with-docker.com/#) and signin with your docker account and Click Start button

Click on ADD NEW INSTANCE on left sidebar

git clone -b docker https://github.com/asimriaz/WebTech-MERNG-2022.git dockerHkRdx

cd WebTech-MERNG-2022/  

docker-compose up -d

docker exec recapsheet bash -c "npm run build"

