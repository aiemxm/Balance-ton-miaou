import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { WeightRecordFactory } from '#database/factories/weight_record_factory'

export default class extends BaseSeeder {
  async run() {
    const weightRecords = await WeightRecordFactory.createMany(5)
  }
}
