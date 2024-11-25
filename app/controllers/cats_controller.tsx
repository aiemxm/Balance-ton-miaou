import { HttpContext } from '@adonisjs/core/http'
import Cat from '#models/cat'
import { Cats } from '#resources/views/pages/Cats'

export default class CatsController {
  async index() {
    const cats = await Cat.all()
    return <Cats cats={cats} />
  }
  show(ctx: HttpContext) {}
  create(ctx: HttpContext) {}
  store(ctx: HttpContext) {}
  edit(ctx: HttpContext) {}
  update(ctx: HttpContext) {}
  destroy(ctx: HttpContext) {}
}
