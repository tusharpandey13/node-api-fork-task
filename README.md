# minimal-node-express-api-boilerplate

A minimal api boilerplate using node.js and express.js

I found myself making this from scratch way too many times so here goes...

# Features

- quite minimal but still has a bunch of useful stuff
- uses yarn by default
- versioning support
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [morgan for logging](https://www.npmjs.com/package/morgan)
- [cookieparser](https://www.npmjs.com/package/cookieparser)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [totoro-node](https://www.npmjs.com/package/totoro-node)

# Installation (npm)

    git clone https://github.com/tusharpandey13/minimal-node-express-api-boilerplate.git && cd minimal-node-express-api-boilerplate
    npm install

# Installation (yarn)
    git clone https://github.com/tusharpandey13/minimal-node-express-api-boilerplate.git && cd minimal-node-express-api-boilerplate
    yarn

# Usage

    npm start

To add new routes, add them in `api/index.js` as route definitions and add the
controllers in `api/controllers`.  
Refer to [totoro-node](https://www.npmjs.com/package/totoro-node) for more
information.
