// == Generating ==
// generate numblocks
export function generate(rpc, numblocks) {
    return new Promise((resolve, reject) => {
        rpc.generate(numblocks).then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// getgenerate
export function getgenerate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.getgenerate().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// setgenerate generate ( genproclimit )
export function setgenerate(rpc, genproclimit) {
    return new Promise((resolve, reject) => {
        rpc.setgenerate(genproclimit).then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    generate,
    getgenerate,
    setgenerate
}