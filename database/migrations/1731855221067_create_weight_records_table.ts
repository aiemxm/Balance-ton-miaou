import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'weight_records'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.decimal('weight', 4, 2).notNullable()
      table.date('date').notNullable()
      table.integer('cat_id').unsigned().references('id').inTable('cats').onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
