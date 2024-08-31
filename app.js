const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const contactusRoutes = require('./routes/contactus');  // Import the contactus routes


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use('/contactus', contactusRoutes); // Use the contactus routes

// route to handle the success page
app.get('/success', (req, res, next) => {
    res.render('success', { pageTitle: 'Success' });
});

app.use(shopRoutes);

app.use(errorController.get404);


app.listen(3000);
