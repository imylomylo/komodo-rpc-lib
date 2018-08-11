// == Crosschain ==
// MoMoMdata symbol kmdheight ccid
function MoMoMdata(rpc) {
    return new Promise((resolve, reject) => {
        rpc.MoMoMdata().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// assetchainproof needs a txid
function assetchainproof(rpc) {
    return new Promise((resolve, reject) => {
        rpc.assetchainproof().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// calc_MoM height MoMdepth
function calc_MoM(rpc) {
    return new Promise((resolve, reject) => {
        rpc.calc_MoM().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// height_MoM height
function height_MoM(rpc) {
    return new Promise((resolve, reject) => {
        rpc.height_MoM().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// migrate_completeimporttransaction importTx
function migrate_completeimporttransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.migrate_completeimporttransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// migrate_converttoexport rawTx dest_symbol export_amount
function migrate_converttoexport(rpc) {
    return new Promise((resolve, reject) => {
        rpc.migrate_converttoexport().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}


// migrate_createimporttransaction burnTx payouts
function migrate_createimporttransaction(rpc) {
    return new Promise((resolve, reject) => {
        rpc.migrate_createimporttransaction().then(resp => {
            return resolve(resp)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

export {
    MoMoMdata,
    assetchainproof,
    calc_MoM,
    height_MoM,
    migrate_completeimporttransaction,
    migrate_converttoexport,
    migrate_createimporttransaction
}