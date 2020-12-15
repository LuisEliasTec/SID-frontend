FROM node

RUN mkdir /home/app

WORKDIR /home/app

RUN npm install @angular/cli -g --silent

CMD ["ng", "serve", "--host", "0.0.0.0"]
