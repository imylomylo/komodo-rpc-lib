// == Util ==
// createmultisig nrequired ["key",...]
rpc.createmultisig().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// estimatefee nblocks
rpc.estimatefee().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// estimatepriority nblocks
rpc.estimatepriority().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// invalidateblock "hash"
rpc.invalidateblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_deposit "depositaddress"
rpc.jumblr_deposit().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_pause
rpc.jumblr_pause().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_resume
rpc.jumblr_resume().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// jumblr_secret "secretaddress"
rpc.jumblr_secret().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// reconsiderblock "hash"
rpc.reconsiderblock().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// validateaddress "komodoaddress"
rpc.validateaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// verifymessage "komodoaddress" "signature" "message"
rpc.verifymessage().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})

// z_validateaddress "zaddr"
rpc.z_validateaddress().then(resp => {
    console.log(resp)
}).catch(error => {
    console.log(error)
})