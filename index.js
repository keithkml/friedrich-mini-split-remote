class Installer {
  constructor() {
    this.codes = {}
  }

  setInfraredCode(direction, temp, fan, hex) {
    if (!this.codes[direction]) this.codes[direction] = {}
    if (!this.codes[direction][fan]) this.codes[direction][fan] = {}
    this.codes[direction][fan][temp] = hex
  }

  setSpecialCode(name, hex) {
    this.codes[name] = hex
  }

  getBuffer(...names) {
    try {
      var x = this.codes
      for (var name of names) x = x[name]
      return Buffer.from(x, "hex")
    } catch (e) {
      throw new Error("could not find IR codes for " + names)
    }
  }
}
const installer = new Installer()
require('./codes').install(installer)
exports = installer

