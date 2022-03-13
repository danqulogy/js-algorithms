export const logInfo = function (data) {
    console.log('\x1b[33m%s\x1b[0m', data)
}

export const logSuccess = function (data) {
    console.log('\x1b[32m%s\x1b[0m', data)
}

export const logError = function (data) {
    console.log('\x1b[31m%s\x1b[0m', data)
}