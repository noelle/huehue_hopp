const yaml = require('js-yaml')

module.exports = {
  process(src) {
    var doc = yaml.safeLoad(src)
    return `module.exports = ${JSON.stringify(doc)}`
  }
}
