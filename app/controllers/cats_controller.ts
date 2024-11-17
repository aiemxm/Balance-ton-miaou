import { HttpContext } from '@adonisjs/core/http'
import Cat from '#models/cat'

export default class CatsController {
  async index(ctx: HttpContext) {
    const cats = await Cat.all()
    return ctx.view.render('pages/cats', { cats })
  }
}
