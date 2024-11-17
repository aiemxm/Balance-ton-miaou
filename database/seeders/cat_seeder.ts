import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { CatFactory } from '#database/factories/cat_factory'

export default class extends BaseSeeder {
  async run() {
    const cats = await CatFactory.createMany(5)
  }
}
