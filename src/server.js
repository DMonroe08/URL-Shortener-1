const express = required('express');
const bodyParser = required('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.user(bodyParser.json());
app.user(bodyParser.urlencoded({
	extend: true,
}));
app.use('/', require('./routes')(express));

exports.server = app.listen(port, () => {
	console.log('The server is active on ', port)
});