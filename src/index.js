var Request = require('request-promise')
var Querystring = require('querystring')

var AppSpice = function(apiKey) {
    this.config = {
        apiKey: apiKey,
        appSpiceEndpoint: "http://api.appspice.it"
    }
    return this
}

AppSpice.prototype.track = function (namespace, name, data) {
    var eventData = data || {}
    var options = {
        uri: this.config.appSpiceEndpoint + "/events?accessToken=" + this.config.apiKey,
        method: "POST",
        json: true,
        body: {
            namespace: namespace,
            name: name,
            data: eventData
        }
    }
    return Request(options)
}

module.exports = AppSpice
