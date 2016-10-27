mondule.exports = (express) => {
	const router = express.Router();
	
	router.get('/genre',  (req, res) =>{
		res.json({
			
		})
	})
	
	router.user('/api/', require('./genre')(express));
	router.user('/api/', require('./books')(express));
	
	return router;
}