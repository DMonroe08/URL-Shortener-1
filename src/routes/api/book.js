const book = require('../../models/book')

module.exports = (express) => {
	const router = express.Router();
	
	//sets url when finding all books
	router.get('/books', (req, res) => {
		book.findAll( (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		res.json({
			fantasy: true,			
		})
	});
	
	//sets urlfinding creating a book by id
	router.get('/books/:id', (req, res) => {
		req.body.id = req.params.id;
		book.find(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		
	});
	
	//sets url when deleting a book by id
	router.delete('/books/:id', (req, res) => {
		req.body.id = req.params.id;
		book.destroy  (req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		
	});
	
	//sets url when updating a book by id
	router.post('/books/:id', (req, res) => {
		req.body.id = req.params.id;
		book.update(req.body, (err) => {
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		
	});
	
	//sets url when creating a book
	router.post('/books', (req, res) => {
		book.create(req.body, (err) =>{
			res.status(500).json(err);
		}  , (data)=>{
			res.status(200).json(data);
		})
		
	});
	
	return router; 
}