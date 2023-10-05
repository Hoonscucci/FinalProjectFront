import axios from "axios";

export async function signUpApi(data) {
    const response = await axios.post("http://localhost:8080/api/auth/signUp", data).catch((error) => null)
    if (!response) return null;

    const result = response.data;
    return result;
}

export const signInApi = async (data) => {

    const response = await axios.post("http://localhost:8080/api/auth/signIn", data).catch((error) => console.log(error))
    console.log(response)
    if (!response) return null;

    const result = response.data;
    return result
}
