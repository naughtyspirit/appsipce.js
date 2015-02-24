var Request = require('request-promise')
var Querystring = require('querystring')

var AppSpice = function(apiKey) {
    this.config = {
        apiKey: apiKey,
        appSpiceEndpoint: "http://api.appspice.it"
    }
    return this
}

AppSpice.prototype.track = function* (namespace, name, source, data) {
    var data = data || {}
    var eventData = {
        namespace: namespace,
        name: name,
        source: source,
        data: data
    }
    var options = {
        uri: this.config.appSpiceEndpoint + "/events?accessToken=" + this.config.apiKey,
        method: "POST",
        json: true,
        body: eventData
    }
    return yield Request(options)
}

module.exports = AppSpice
