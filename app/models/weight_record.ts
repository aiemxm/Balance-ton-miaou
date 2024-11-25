import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cat from '#models/cat'

export default class WeightRecord extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare weight: number

  @column.dateTime()
  declare date: DateTime

  @column()
  declare catId: number

  @belongsTo(() => Cat)
  declare cat: BelongsTo<typeof Cat>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
