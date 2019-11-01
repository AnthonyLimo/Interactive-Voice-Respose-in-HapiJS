'use strict'

const Hapi = require('hapi')
const xmlbuilder = require('xmlbuilder')

const server = Hapi.Server({
  host: process.env.HOST,
  port: process.env.PORT
})

const fileUrl = ''

const sayPlayActionXMl = xmlbuilder
  .create('Response')
  .elem('GetDigits', { timeout: '30', finishOnKey: '#', callbackURL: '' })
  .elem('Play', { url: '' })
  .elem(
    'Say',
    'Hi, welcome to the Africas Talking Freelance Developer Program demo app. We have a little question for you. How old is Africas Talking? Dial in your guess and press hash'
  )
  .end({ pretty: true })

const init = async () => {
  await server
    .register(
      { plugin: require('./routes/Users') },
      {
        routes: {
          prefix: '/voice'
        }
      }
    )
    .catch(e => {
      console.log(e)
    })
}

server.route({
  method: 'POST',
  path: '/',
  handler: async (req, h) => {
    try {
      callAction = sayPlayActionXML
      h.response(callAction)
    } catch (e) {
      h.response(e).code(500)
    }
  }
})

server.route({
  method: 'GET',
  path: '/',
  handler: async (req, h) => {
    return h.response('Everything is okay').code(201)
  }
})

server.route({
  method: 'POST',
  path: '/voice/say',
  handler: async (req, h) => {
    try {
    } catch (e) {}
  }
})

server.start()
