// == Generating ==
// generate numblocks
export function generate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.generate().then(resp => {
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
export function setgenerate(rpc) {
    return new Promise((resolve, reject) => {
        rpc.setgenerate().then(resp => {
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