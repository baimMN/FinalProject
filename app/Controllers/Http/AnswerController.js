'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with answers
 */
const Answer=use('App/Models/Answer')
const Question=use('App/Models/Question')
class AnswerController {
  /**
   * Show a list of all answers.
   * GET answers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new answer.
   * GET answers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new answer.
   * POST answers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single answer.
   * GET answers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const body=request.post()
    let answer=await Question.query().where({needCheck:1}).fetch()
    const userAnswer=body.data.filter((data,index)=> {
      if(data.needCheck === 1) return true
    })
    // let answerFiltered=answer.toJSON().filter((data3) => {
    //   if(data3.id === 2){
    //     return true
    //   }

    // })
    // response.json(answerFiltered)
    let wrong=[]
    let right=[]
    let aaa=userAnswer.filter((data,index) => {
      let done=false
      let splitted=data.answer.split(",")
      let answerFiltered=answer.toJSON().filter((data3) => {
        if(data3.id === data.id){
          return true
        }
      })

      let finalAnswer=splitted.filter((data2,index)=> {
        if (answerFiltered[0].answer.split(",").includes(data2)){
          return true
        } else{
          wrong.push(data2)
        }
      })

      if(finalAnswer.length === splitted.filter){
        return true
      }
    })
      if(aaa.length === userAnswer.length ){
        response.status(200).json({
          msg:'benar semua'
        })
      }else {
        response.status(200).json({
          msg:'ada salah',
          data:wrong
        })
      }

  }

  /**
   * Render a form to update an existing answer.
   * GET answers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update answer details.
   * PUT or PATCH answers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a answer with id.
   * DELETE answers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AnswerController
