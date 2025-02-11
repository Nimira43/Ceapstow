const fs = require('fs')

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename')
    }
    this.filename = filename
    try {
      fs.accessSync(this.filename)
    } catch (err) {

    } 
  }
  async checkForFile() {

  }  
}

const repo = new UsersRepository()
repo.checkForFile(0)