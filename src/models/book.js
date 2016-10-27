const db = require('./db');
export.create = (payload, err, success) => {
	db.book.create(payload).then(success).catch(err);
}

export.findAll = (err, success) => {
	db.book.findAll().then(success).catch(err);
}

export.find = (payload, err, success) => {
	db.book.find({
		where:{id: payload.id,}, 
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

export.destroy = (payload, err, success) => {
	db.book.find({
		where:{id: payload.id,}, 
		
	}).then(success).catch(err);
}

export.update = (payload, err, success) => {
	db.book.find({
		where:{id: payload.id,}, 
	}).then((updatingData)=>{
		updatingData.updateAttributes(payload).then(success).catch(err);
	}) .catch(err);
}