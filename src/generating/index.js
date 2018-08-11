// == Generating ==
// generate numblocks
function generate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.generate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getgenerate
function getgenerate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getgenerate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// setgenerate generate ( genproclimit )
function setgenerate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.setgenerate().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    generate,
    getgenerate,
    setgenerate
}