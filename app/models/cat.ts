import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import WeightRecord from '#models/weight_record'

export default class Cat extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime()
  declare birthDate: DateTime

  @column()
  declare photoPath: string | null

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => WeightRecord)
  declare weightRecords: HasMany<typeof WeightRecord>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
