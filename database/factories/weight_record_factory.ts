import factory from '@adonisjs/lucid/factories'
import WeightRecord from '#models/weight_record'
import { DateTime } from 'luxon'

export const WeightRecordFactory = factory
  .define(WeightRecord, async ({ faker }) => {
    return {
      weight: faker.number.float({ min: 1, max: 10 }),
      date: DateTime.fromJSDate(faker.date.recent({ days: 365 })),
      catId: 1,
    }
  })
  .build()
