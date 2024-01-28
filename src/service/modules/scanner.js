import Request from "../request/index.js";
export async function SignIn(roomId) {
  return await Request.post(`scanner/signIn`,{roomId:roomId});
}
export async function In(reservationId) {
  return await Request.post(`scanner/in`,{reservationId:reservationId});
}