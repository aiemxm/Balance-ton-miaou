import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Provider extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare providerName: string

  @column()
  declare providerUserId: string

  @column()
  declare userId: number

  @column({
    prepare: (value) => JSON.stringify(value),
    consume: (value) => JSON.parse(value),
  })
  declare additionalInfo: Record<string, any> | null

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
