'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Answer extends Model {
	getQuestion(){
		return this.belongsTo('Question','question_id','id')
	}	
}

module.exports = Answer
