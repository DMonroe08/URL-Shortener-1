module.exports = (express) => {
	const router = express.Router();
	
	router.get('/genre',  (req, res) =>{
		res.json({
			horror: true,
		})
	});	
	
	router.use('/api/', require('./api/genre')(express));
	
	
	return router;
}