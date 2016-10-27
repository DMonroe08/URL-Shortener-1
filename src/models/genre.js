const genre = require('../../models/genre');

//creates a  genres
export.create = (payload, err, success) => {
	db.genre.create(payload).then(success).catch(err);
}

//Gets all genres
export.findAll = (err, success) => {
	db.genre.findAll().then(success).catch(err);
}

//Gets a genre by specific ID
export.find = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,}, 
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

//Deletes a genre by specific ID
export.destroy = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,}, 
		
	}).then(success).catch(err);
}

//Updates a genre by specific ID
export.update = (payload, err, success) => {
	db.genre.find({
		where:{id: payload.id,}, 
	}).then((updatingData)=>{
		updatingData.updateAttributes(payload).then(success).catch(err);
	}) .catch(err);
}