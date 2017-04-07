const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
	res.render('contact', { title: 'Contact' });
});
// Send email
router.post('/send', (req, res, next) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'fake@gmail.com',
			password: 'password'
		}
	})
	const mailOptions = {
		from: ' Lannister ',
		to: ' Stark',
		subject: 'Lannister send their regards !!!',
		text: 'Thank you for getting fooled!!!'
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if(error) {
			console.log('Error');
		}
		console.log('Message sent'+ info.response);
		res.redirect('/')
	})
})

module.exports = router;