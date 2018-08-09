// == Control ==
// getinfo
rpc.getinfo().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// help ( "command" )
rpc.help().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// stop
rpc.stop().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})