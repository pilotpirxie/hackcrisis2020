# #zostańwdomu
App for status and control health of people under quarantine. Authorities firstly register in the application backend, then people pick them up in app and send information via SMTP protocol and to web panel. 

## Source structure
```shell script
### Directory of mobile app written in JSX and React Native
hackcrisis/

### Image and multimedia for the app
hackcrisis/assets/

### React components
hackcrisis/components/

### Screens
hackcrisis/containers/

### Main file of the mobile app
hackcrisis/App.js

### Main file of shared styles
hackcrisis/globalStyles.js

### Webserver directory
webserver/

### Main webserver file
webserver/app.js

### Local database, powered by NoSQL "lowdb" database engine
webserver/db.json

### Files with meta-data and dependency list
hackcrisis/package.json
hackcrisis/yarn.lock
webserver/package.json
webserver/yarn.lock

### Directories with dependency
hackcrisis/node_modules/
webserver/node_modules/
```

## Technology & dependencies
App is written in React Native with Expo extensions. It's a crss-platform technology for mobile applications. Once written could be run on the multiple operating systems.

Navigation between screens is done via ``react-navigation/native`` library and ``stack`` version of it.

## Getting started
* Install Node >= 10.x

* Then, install yarn via npm
```shell script
npm install yarn -g
```

* Move to the source directory and install dependencies
```shell script
yarn install
```

* Run dev server with ``expo-cli``
```shell script
expo start
```

* Open different terminal tab and navigate to webserver directory

* Install Nodemon or PM2
```
npm install nodemon -g
```

* Run webserver
```shell script
yarn start
```

* Change port and endpoint for SMTP API
```js
const requestData = {
  // ...
};
await axios.post('https://<SMTP REST API>',
  qs.stringify(requestData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // ...
      }
  }
);
```

## Design
Application is built with Web Accessibility Initiative rules. Colors are very contrasting, fonts are large and bold.

#### Colors
```scss
Primary color: #FF5454,
Secondary color: #5468FF,
Tertiary color: #00D9CD,
Background color: #EBF2FF
```

#### Buttons & Text
```scss
15 dpi border radius,
shadow under borders with 40% opacity,
24 dpi padding,
15 dpi vertical margin,
uppercase text,
2 dpi character spacing,
20 dpi font size
```

## Webserver endpoints
```shell script
 * @api {get} /authorities/
 * @apiName Get all authorities
 * @apiGroup Authorities
```

```shell script
 * @api {get} /authorities/:id
 * @apiName Get authority data
 * @apiGroup Authorities
 * @apiParam {string} req.params['id']
```

```shell script
 * @api {post} /authorities/:id/email
 * @apiName Send information to authority
 * @apiGroup Authorities
 * @apiParam {string} req.params['id']
 * @apiParam {string} req.body['requestType']
 * @apiParam {string} req.body['message']
 * @apiParam {string} req.body['userId']
```