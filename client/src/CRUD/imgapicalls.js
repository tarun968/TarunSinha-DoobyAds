export const AddTheImage = async (token, user_id, formData) => {
    console.log(token, user_id, formData)
    try {
        const response = await fetch(`/add-image/${user_id}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                // "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: (formData)
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}
export const getAllImagesofUser = async (Token, UserId) => {
    // /images/:user
    console.log(Token, UserId)
    try {
        const response = await fetch(`/All-Images/${UserId}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}

export const getSpecifiedImage = async(Token,UserId,Value) => {
    console.log(Token,UserId)
    try {
        const response = await fetch(`specificimage/${UserId}?imageName=${Value}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }   
}


export const getSpecifiedImagePrice = async(Token,UserId,Value) => {
    console.log(Token,UserId)
    try {
        const response = await fetch(`specificimagebyprice/${UserId}?priceImage=${Value}`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${Token}`
            },
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }   
}