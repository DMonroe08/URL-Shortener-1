const genre = require('../../models/genre')

module.exports = (express) => {
	const router = express.Router();
	
	//sets url when finding all genres
	router.get('/genres', (req, res) => {
		genre.findAll( (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		res.json({
			fantasy: true,			
		})
	});
	
	//sets url when finding a specific genre by id
	router.get('/genres/:id', (req, res) => {
		req.body.id = req.params.id;
		genre.find(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})		
	});
	
	
	//sets url when deleting a specific genre by id
	router.delete('/genres/:id', (req, res) => {
		req.body.id = req.params.id;
		genre.destroy  (req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
	});
	
	//sets url when finding a specific genre by id
	router.post('/genres/:id', (req, res) => {
		req.body.id = req.params.id;
		genre.update(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);		
		})
	});
	
	
	//sets url when creating a genre 
	router.post('/genres', (req, res) => {
		genre.create(req.body, (err) =>{
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		
	});
	
	return router; 
}