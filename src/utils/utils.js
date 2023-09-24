const isArrayEmpty = (arr) => {
    if (arr != undefined && arr != null && arr.Length > 0)
        return true
    else
        return false
}

const dumpLogs = (message) => {
    console.log(message)
    //Envio para tracking
}

export { isArrayEmpty, dumpLogs };