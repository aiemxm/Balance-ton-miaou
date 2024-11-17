import factory from '@adonisjs/lucid/factories'
import Cat from '#models/cat'
import { DateTime } from 'luxon'

export const CatFactory = factory
  .define(Cat, async ({ faker }) => {
    return {
      name: faker.animal.cat(),
      birthDate: DateTime.fromJSDate(
        faker.date.between({
          from: DateTime.now().minus({ years: 15 }).toJSDate(),
          to: DateTime.now().minus({ months: 6 }).toJSDate(),
        })
      ),
      photoPath: null,
    }
  })
  .build()
