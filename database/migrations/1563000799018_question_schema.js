'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QeustionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number', 80)
      table.text('description')
      table.string('type', 80)
      table.string('options', 512)
      table.string('answer', 80)
      table.integer('timer')
      table.timestamps()
    })
  }

  down () {
    this.drop('qeustions')
  }
}

module.exports = QeustionSchema
