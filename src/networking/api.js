//Host Name Live
// const hostName = "http://15.185.131.188:3000/"
// const hostName ="http://157.175.38.245:3000/"
const hostName ="http://192.168.1.115:3000/"

//Host Name Local
// const hostName = "http://192.168.1.115:3000/"

//subdomain
const User = 'user/'
const Event = 'event/'
const Contact = 'contactus/'

//End Points
const Login = 'login'
const Verify = 'verify';
const Register = 'register'
const SignIn = 'signin'
const AllEvent = 'all'
const AttendEvent = 'attend'

function getFullApi(subDomain, endPoint) {
    return hostName + subDomain + endPoint
}

//USER
export function LoginAPI(){
    return getFullApi(User, Login)
}
export function VerifyAPI(){
    return getFullApi(User, Verify)
}
export function RegisterAPI(){
    return getFullApi(User, Register)
}
export function SignInAPI(){
    return getFullApi(User, SignIn)
}
export function AllEventAPI(page, limit){
    return getFullApi(Event, AllEvent) + '?page=' + page + '&limit=' + limit
}
export function AttendEventAPI(eventId){
    return getFullApi(Event, AttendEvent) + '?eventId=' + eventId
}
export function ContactUsAPI (){
return getFullApi(Contact,Register) 
}