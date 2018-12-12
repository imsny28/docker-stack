From node:8

RUN mkdir /src
RUN npm install -g nodemon
WORKDIR /src
ADD package.json /src/package.json

RUN npm install
EXPOSE 5000
#CMD npm install

# Bundle app source
COPY . ./

# CMD [ "npm", "start" ]

CMD ["nodemon"]
