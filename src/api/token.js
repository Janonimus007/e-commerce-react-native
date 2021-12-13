import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setTokenApi(token){
  console.log('estoy en la funcion de token ',token);
  try {
    await AsyncStorage.setItem("token",token)
    return true
  } catch (error) {
    return null;
  }
}
export async function getTokenApi(){
  try {

    const token = await AsyncStorage.getItem("token")
    console.log('se esta recargando la pagina, token: ',token)
    return token
  } catch (error) {
    return null;
  }
}

export async function removeTokenApi(){
  try {
    await AsyncStorage.removeItem("token")
    return true
  } catch (error) {
    return null
  }
}