const sendSms = (to, text) => {
    const postData = {
        token: process.env.SMS_TOKEN,
        from: process.env.SMS_FROM,
        to,
        text,
    }

    console.log('Sending with data: ', postData)
    return new Promise((resolve, reject) => {
        fetch(
            `http://api.sparrowsms.com/v2/sms?token=${process.env.SMS_TOKEN}&from=${process.env.SMS_FROM}&to=${to}&text=${text}`
        )
            .then(response => {
                if (response.status !== 200) reject(response)
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = sendSms
