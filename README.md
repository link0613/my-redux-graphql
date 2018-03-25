V1 World (React + React-Router + Redux + GraphQL + Apollo Client)
==========

## Detailed Content
- React JS (15.6.x - [github :link:](https://github.com/facebook/react))
- Redux (*as you application grows managing state will be a serious concern, save pain with Redux*)
- apollo-client 1.9.x (*futur of API. Learn about this beast [here in officiel website](http://dev.apollodata.com/)*)
- React-Redux 3.7.x (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- React-Router-Redux (*previously named react-simple-router*)
- react-router (4.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack 3.x ([github :link:](https://github.com/webpack/webpack))
- postcss
- babel 6+ ([github :link:](https://github.com/babel/babel))
- redux-devtool-extension ([github :link:](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension))

**Tool chain:**
- babel 6+
- eslint
- hot reload
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats

**tests:**
- Jest
- Mocha
- Chai (*+ dirty-chai*)
- enzyme
- Sinon
- nyc
> (Not completed yet)

## API & DB
-Scaphold.io

### Prerequisite

#### Node JS version required is `>=6.x`.
*Build with node js v8.x but should be ok with node js 6.x.*

> Better use [nvm](https://github.com/creationix/nvm) to manage your Node JS versions.

### Configure starter application:

Then, past it (*to replace http://localhost:8080/graphql*) in your `networkInterface` in the app config (in `./src/app/config.index.js`):

```javascript
export const appConfig = {
  // apollo client:
  apollo: {
    networkInterface: 'http://localhost:8080/graphql'
  }
};
```

> from now you got all needed to run this starter

### Install dependencies

```bash
npm install
```

### run dev : hot reload mode (*+ redux-devtools-extension*)


```bash
npm run start
```

NOTE: be sure you already installed [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension) in your browser to get the best development experience.

### bundle dev mode (*+ redux-devtools*)

```bash
npm run dev
```

### tests

```bash
npm run test
```

### bundle production mode

```bash
npm run prod
```

### run dev bundle
```bash
npm run start-spa-dev
```

### run prod bundle
```bash
npm run start-spa-prod
```

