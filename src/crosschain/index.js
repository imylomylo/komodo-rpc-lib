// == Crosschain ==
// MoMoMdata symbol kmdheight ccid
rpc.MoMoMdata().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// assetchainproof needs a txid
rpc.assetchainproof().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// calc_MoM height MoMdepth
rpc.calc_MoM().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// height_MoM height
rpc.height_MoM().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// migrate_completeimporttransaction importTx
rpc.migrate_completeimporttransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// migrate_converttoexport rawTx dest_symbol export_amount
rpc.migrate_converttoexport().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// migrate_createimporttransaction burnTx payouts
rpc.migrate_createimporttransaction().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})
