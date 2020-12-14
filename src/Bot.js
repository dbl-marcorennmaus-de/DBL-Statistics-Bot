// Set max listeners to stop it throwing a "possible memory leak" warning
process.setMaxListeners(250)
// Dependencies
const Base = require('eris-sharder').Base
const { CommandHandler, EventHandler } = require('./modules')

class Bot extends Base {
  constructor(base) {
    super(base)
    // Load commands
    this.client.commandHandler = new CommandHandler(this)
    // Event Handler
    this.client.eventHandler = new EventHandler(this)
  }

  launch() {
    this.client.connect()
  }
}

module.exports = Bot
