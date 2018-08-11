// == Control ==
// getinfo
function getinfo(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getinfo().then(resp => {
            // console.log(resp)
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// help ( "command" )
function help(rpc) {
    return new Promise((resolve, reject) => {
        rpc.help().then(resp => {
            console.log(resp)
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// stop
function stop(rpc) {
    return new Promise((resolve, reject) => {
        rpc.stop().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export { getinfo, help, stop };