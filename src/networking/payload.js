export function LoginPayload(mobile){
    return JSON.stringify({
        mobile:mobile
    })
}
export function VerifyPayload(mobile,otp){
    return JSON.stringify({
      mobile: mobile,
      otp: otp,
    });
}
export function RegisterPayload(
  name,
  email,
  password
){
  return JSON.stringify({
    name:name,
    email:email,
    password:password
  })
}
export function SignInPayload( mobile,password){
  return JSON.stringify({
    mobile:mobile,
    password:password
  })
}
export function AllEventPayload(title,dateTime){
  return JSON.stringify({
    title:title,
    dateTime:dateTime
  })
}
export function ContactUsPayload(name,email,subject,message){
  return JSON.stringify({
    name:name,
    email:email,
    subject:subject,
    message:message
  })
}