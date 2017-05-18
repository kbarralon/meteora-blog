FROM node

RUN mkdir /code
WORKDIR /code

ADD package.json /code/
RUN npm install
ADD . /code/

RUN node_modules/.bin/webpack

CMD ["npm", "run", "prod"]

EXPOSE 3000