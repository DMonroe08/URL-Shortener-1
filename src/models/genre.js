const genre = require('./db');

//creates a  genres
exports.create = (payload, err, success) => {
	db.genre.create(payload).then(success).catch(err);
}

//Gets all genres
exports.findAll = (err, success) => {
	db.genre.findAll().then(success).catch(err);
}

//Gets a genre by specific ID
exports.find = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,}, 
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

//Deletes a genre by specific ID
exports.destroy = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,}, 
		
	}).then(success).catch(err);
}

//Updates a genre by specific ID
exports.update = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,}, 
	}).then((updatingData)=>{
		updatingData.updateAttributes(payload).then(success).catch(err);
	}) .catch(err);
}