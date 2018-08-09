// == Generating ==
// generate numblocks
rpc.generate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// getgenerate
rpc.getgenerate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// setgenerate generate ( genproclimit )
rpc.setgenerate().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})