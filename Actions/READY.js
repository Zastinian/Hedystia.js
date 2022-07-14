const ClientUser = require("../Structures/ClientUser");
const { Opcodes } = require("../Util/Constants");
const BaseAction = require("./BaseAction");
const { setTimeout } = require("timers/promises");
const ClientApplication = require("../Structures/ClientApplication");
class Ready extends BaseAction {
    constructor(data, client) {
        super(client)
        this._patch(data)
    }

    async _patch(data) {
        const packet = data.d
        this.client.user = new ClientUser(packet.user, this.client, this.ws)
        this.client.readyAt = new Date()
        this.client.readyTimestamp = Date.now()
        this.client.application = new ClientApplication({}, this.client)
        this.client.sessionId = packet.session_id
        await setTimeout(750)
        this._handleHeartbeat()
        return this.client.emit("ready")
    }

    _handleHeartbeat() {
        if(this.client.readyAt) {
            let randomTime = Math.floor(Math.random() * (1000 * 34 - 1000 * 25) + 1000 * 25)
            let interval = setInterval(() => {
                this.client.ws.send({
                    op: Opcodes.HEARTBEAT,
                    d: null
                })
                this._handleHeartbeat()
                clearInterval(interval)
            }, randomTime)

            this.client.heartbeatInterval = randomTime
        }
    }
}

module.exports = Ready