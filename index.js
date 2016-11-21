const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
var router = express.Router();

let msg_server = "corriendo en el puerto: ";



app.set('port', process.env.PORT || 12000);
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));


/////// MINI SERVER CORREO ////////////////////

app.post('/luisvilches', function(req,res,next){
	var smtpConfig = {
	    host: 'smtp.gmail.com',
	    port: 465,
	    secure: true, // use SSL
	    auth: {
	        user: 'noreply.dowhile@gmail.com',
	        pass: 'dowhile2230'
	    }
	};

	var transporter = nodemailer.createTransport(smtpConfig);
	var templates = '<b>Nombre:<span">'+req.body.name +
					'</span></b><br><br><b">Correo:<span>'+req.body.correo+
					'</span></b><br><br><b">Telefono:<span>'+req.body.telefono+
					'</span></b><br><br><b">Mensaje:<br><br><span>'+req.body.mensaje+'</span></b><br>';
	var mailOptions = {
	    from: '"Formulario de Contacto" <no-reply@luisvilches.cl>', // sender address
	    to: 'luis@dowhile.cl','marianela.abarca100c@gmail.com' // list of receivers
	    subject: 'formulario de contacto',
	    text: 'hello world', // plaintext body
	    html: templates // html body
	};

		transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	        res.send('error');
	    }
	    console.log('Message sent: ' + info.response);
	    res.send('success');
	});
});


app.post('/mgenergia', function(req,res,next){
	var smtpConfig = {
	    host: 'smtp.gmail.com',
	    port: 465,
	    secure: true, // use SSL
	    auth: {
	        user: 'noreply.dowhile@gmail.com',
	        pass: 'dowhile2230'
	    }
	};

	var transporter = nodemailer.createTransport(smtpConfig);
	var templates = '<b>Nombre:<span">'+req.body.name +
					'</span></b><br><br><b">Correo:<span>'+req.body.correo+
					'</span></b><br><br><b">Telefono:<span>'+req.body.telefono+
					'</span></b><br><br><b">Mensaje:<br><br><span>'+req.body.mensaje+'</span></b><br>';
	var mailOptions = {
	    from: '"Formulario de Contacto" <no-reply@mgenergia.cl>', // sender address
	    to: 'contacto@mgenergia.cl', // list of receivers
	    subject: 'formulario de contacto',
	    text: 'hello world', // plaintext body
	    html: templates // html body
	};

		transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	        res.send('error');
	    }
	    console.log('Message sent: ' + info.response);
	    res.send('success');
	});
});





/////// SERVIDOR //////////////////////////////

app.listen(app.get('port'), () => {
	console.log(msg_server + app.get('port'));
});
