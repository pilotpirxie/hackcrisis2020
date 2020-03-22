const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const qs = require('querystring')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

app.set('trust proxy', 1);
app.disable('x-powered-by');
app.set('port', process.env.PORT || 8080);
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 200,
  message: { error: 'Too many requests' },
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.setTimeout(8000);
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

app.get('/authorities/:id', (req, res) => {
  const data = db.get(`authorities`).find({id: req.params.id}).value();
  if (data) {
    return res.json(data);
  } else {
    return res.sendStatus(404);
  }
});

app.get('/authorities', (req, res) => {
  const data = db.get(`authorities`).value();
  if (data && data.length > 0) {
    return res.json(data);
  } else {
    return res.sendStatus(404);
  }
});

app.post('/authorities/:id/email', async (req, res) => {
  try {
    const {requestType, message, userId} = req.body;

    const authorityData = db.get(`authorities`).find({id: req.params.id}).value();
    const userData = db.get(`users`).find({id: userId}).value();

    if (!authorityData || !userData) {
      return res.sendStatus(404);
    }
    const requestData = {
      access_token: '6971c836-6bd8-11ea-bc55-0242ac130003',
      to: authorityData.email,
      subject: `${requestType} - ${userData.name} ${userData.surname}`,
      message: `
        Imię i nazwisko: ${userData.name} ${userData.surname}
        Wiek: ${userData.age} 
        Identyfikator: ${userId}
        Email: ${userData.email} 
        Lokalizacja deklarowana: ${userData.location}
        
        Wiadomość: 
        ${message}
      `
    };
    await axios.post(
      'https://hackcrisis.gamenado.com/mail.php',
      qs.stringify(requestData),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    return res.json({
      msg: 'Sent'
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
});

try {
  app.listen(app.get('port'), () => {
      console.info(`App is listening on http://localhost:${app.get('port')}`);
  });
} catch (err) {
  console.warn('App is listening but ip address information are unavailable');
  console.error(err);
}