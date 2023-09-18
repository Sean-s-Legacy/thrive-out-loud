async function sendVerificationEmail(userEmail) {
    const res = await fetch('http://localhost:3000/api/email-verification', {
        method: 'POST',
        body: JSON.stringify({
            userEmail,
            redirectUrl: 'http://localhost:3000/email-verification-success'
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    const resBody = await res.json();
    if (res.status !== 200) {
        throw Error(resBody.message)
    }

    return resBody
}
export default sendVerificationEmail