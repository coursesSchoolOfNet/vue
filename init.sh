# bin/bash

docker run -i -t -d --name vue -p 8080:8080 -v /home/${SUDO_USER}/studies/schoolOfNet/planoDeEstudo/vue:/home/node node

# npm install -g vue-cli
# vue init nameTemoplate nameApp