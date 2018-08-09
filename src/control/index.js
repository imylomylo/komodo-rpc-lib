// == Control ==
// getinfo
function getinfo(rpc) {
    rpc.getinfo().then(resp => {
        // console.log(resp)
        return resp
    }).catch(error => {
        console.log(error)
    })
}

// help ( "command" )
function help(rpc) {
    rpc.help().then(resp => {
        console.log(resp)
        return resp
    }).catch(error => {
        console.log(error)
    })
}

// stop
function stop(rpc) {
    rpc.stop().then(resp => {
        console.log(resp)
    }).catch(error => {
        console.log(error)
    })
}

export { getinfo, help, stop };