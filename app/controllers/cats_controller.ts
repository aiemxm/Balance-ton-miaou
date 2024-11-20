import { HttpContext } from '@adonisjs/core/http'
import Cat from '#models/cat'

export default class CatsController {
  async index(ctx: HttpContext) {
    const cats = await Cat.all()
    console.log(cats)
    return ctx.view.render('pages/cats', { cats })
  }
  show(ctx: HttpContext) {}
  create(ctx: HttpContext) {}
  store(ctx: HttpContext) {}
  edit(ctx: HttpContext) {}
  update(ctx: HttpContext) {}
  destroy(ctx: HttpContext) {}
}
