import stdrpc from 'stdrpc'

export function connect(url, username, password) {
    console.log("Connecting to " + url)
    const rpc = stdrpc({
        url: url,
        username: username,
        password: password
    })
    return rpc;
}
// == Control ==
// getinfo
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

// help ( "command" )
export function help(rpc) {
    return new Promise((resolve, reject) => {
        rpc.help().then(resp => {
            console.log(resp)
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// stop
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
