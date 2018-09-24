let todoModel = require('../models/todoModel')
let Employee = class {
	constructor(payload) {
		this.payload = payload;
	}

	static list(cb) {
		const criteria = {};
		const projections = {
			_id: 0,
			__v: 0
		};
		const options = {
			lean : true
		};
		todoModel.find(criteria, projections, options, cb);
	}

	add(cb) {
		new todoModel(this.payload).save(cb);
	}

	fetch(cb) {
		const criteria = this.payload.criteria;
		const projections = this.payload.projections;
		const options = this.payload.options;
		todoModel.find(criteria, projections, options, cb)
	}

	delete(callback) {
		const condition = this.payload.condition;
		todoModel.remove(condition, callback);
	}

	update(callback) {
		const condition = this.payload.condition;
		const update = this.payload.update;
		todoModel.update(condition, {$set:update}, callback)
	}

};
module.exports = Employee;
