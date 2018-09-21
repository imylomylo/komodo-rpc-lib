import stdrpc from 'stdrpc'

/**
 * @api {post} / connect
 * @apiName connect
 * @apiGroup control
 * @apiDescription configure the rpc connection
 * @apiDeprecated use now (#control:configure)
 *
 * @apiParam {String} url including host and port e.g. http://127.0.0.1:7771
 * @apiParam {String} username for rpcuser
 * @apiParam {String} password for rpcuser
 *
 * @apiSuccess {Object} rpc an object for re-use on future api calls
 */
export function connect(url, username, password) {
    console.log("Connecting to " + url)
    const rpc = stdrpc({
        url: url,
        username: username,
        password: password
    })
    return rpc;
}

/**
 * @api {post} / configure 
 * @apiName configure
 * @apiGroup control
 * @apiDescription configure the rpc object for connecting to daemon
 *
 * @apiParam {String} url including host and port e.g. http://127.0.0.1:7771
 * @apiParam {String} username for rpcuser
 * @apiParam {String} password for rpcuser
 *
 * @apiSuccess {Object} rpc an object for re-use on future api calls
 */
export function configure(url, username, password) {
    console.log("Connecting to " + url)
    const rpc = stdrpc({
        url: url,
        username: username,
        password: password
    })
    return rpc;
}

/**
 * @api {post} / getinfo
 * @apiName getinfo
 * @apiGroup control
 * @apiDescription get blockchain info
 * @apiSampleRequest http://localhost:7771/
 *
 * @apiParam {Object} rpc the object configured using control.connect(url,username,password)
 *
 * @apiSuccess {Object} resp returns json object of daemon info
 */
export function getinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getinfo().then(resp => {
            console.log(resp)
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

/**
 * @api {post} / help 
 * @apiName help
 * @apiGroup control
 * @apiDescription help for all commands or single command when a command is passed in
 *
 * @apiParam {Object} rpc the object configured using control.connect(url,username,password)
 * @apiParam {String} command daemon command for getting help
 *
 * @apiSuccess {Object} resp returns json object response
 */
export function help(rpc, command = '') {
    return new Promise((resolve, reject) => {
        rpc.help(command).then(resp => {
            console.log(resp)
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

/**
 * @api {post} / stop 
 * @apiName stop
 * @apiGroup control
 * @apiDescription stops the daemon
 *
 * @apiParam {Object} rpc the object configured using control.connect(url,username,password)
 *
 * @apiSuccess {Object} resp returns json object response
 */
export function stop(rpc) {
    return new Promise((resolve, reject) => {
        rpc.stop().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default { connect, getinfo, help, stop }
