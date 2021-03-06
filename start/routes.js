'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.group(() => {
	Route.post('/register','UserController.store')
	Route.get('/questions','QuestionController.index')
	Route.post('/answer','AnswerController.show')
}).prefix('api/v1')

Route.group(() => {
	
}).prefix('api/v1').middleware(['auth'])
