// == Crosschain ==
// MoMoMdata symbol kmdheight ccid
export function MoMoMdata(rpc) {
    return new Promise((resolve, reject) => {
        rpc.MoMoMdata().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// assetchainproof needs a txid
export function assetchainproof(rpc) {
    return new Promise((resolve, reject) => {
        rpc.assetchainproof().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// calc_MoM height MoMdepth
export function calc_MoM(rpc) {
    return new Promise((resolve, reject) => {
        rpc.calc_MoM().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// height_MoM height
export function height_MoM(rpc) {
    return new Promise((resolve, reject) => {
        rpc.height_MoM().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// migrate_completeimporttransaction importTx
export function migrate_completeimporttransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.migrate_completeimporttransaction().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// migrate_converttoexport rawTx dest_symbol export_amount
export function migrate_converttoexport(rpc) {
    return new Promise((resolve, reject) => {
        rpc.migrate_converttoexport().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// migrate_createimporttransaction burnTx payouts
export function migrate_createimporttransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.migrate_createimporttransaction().then(resp => {
            resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export default {
    MoMoMdata,
    assetchainproof,
    calc_MoM,
    height_MoM,
    migrate_completeimporttransaction,
    migrate_converttoexport,
    migrate_createimporttransaction
}