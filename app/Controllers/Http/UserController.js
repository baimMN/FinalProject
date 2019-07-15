'use strict'

const User=use('App/Models/User')
class UserController {
	 async index ({ request, response, view }) {
  }

  async create ({ request, response, view }) {
  }
 
  async store ({ request, response,auth}) {
  	const body=request.post()
  	const {name,email,phone_number}=body
    try{
    	const data= await  User.query().insert({name,email,phone_number})  
         const user=await User.findBy({email})
      if(data)
      {
        // const token = await auth.generate(user)
  	  	response.json({
          data,
          // token,
          warning:false,
          msg:'succes'
        })
      }else {
        response.json('error')
      }
    }catch(e){
      return e
    }
	}

  async show ({ params, request, response, view }) {

  }
 
  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
