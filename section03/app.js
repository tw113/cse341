const path = require('path');
const cors = require('cors'); // Place this with other requires (like 'path' and 'express')

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

const corsOptions = {
  origin: 'https://cs341-tannerwilson.herokuapp.com/',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4,
};

const MONGODB_URL =
  process.env.MONGODB_URL ||
  'mongodb+srv://tw113:XUUpSjNGDFzlys2f@cluster0.mdjez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
