const path = require('path');
const data = require('../routes/data'); // Assuming data.js is in the routes folder

exports.getContactUs = (req, res, next) => {
    res.render('contactus', { 
        pageTitle: 'Contact Us',
        path: '/contactus'   // passing the path variable
     });
};

exports.postContactUs = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('All fields are required');
    }

    // Log the entered details to the console
    console.log(`Received submission - Name: ${name}, Email: ${email}`);

    // Use the appendMessage function from data.js
    data.appendMessage(name, email, (err) => {
        if (err) {
            return res.status(500).send('Server error');
        }

        // Redirect to the success page
        res.redirect('/success');
    });
};
