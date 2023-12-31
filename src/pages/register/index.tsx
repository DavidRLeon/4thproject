import "@/app/globals.css"
import "@/app/css/register.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import React, { useState } from "react"
import { handleInput } from "@/app/core/repository/handle_input"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import { registerBody, validateRegisterBody } from "@/app/core/repository/register/register_body"
import { httpPost } from "@/app/core/http-request-contract"
import Image from "next/image"
import backgoundRegister from "@/app/assets/images/backgound-register.png"


export default function RegisterComponent() {
    const [values, setValues] = useState(registerBody)

    const validateLogin = async () => {
        console.log(values)
        let validation = validateRegisterBody(values)
        if (typeof validation === 'string') alert(validation)
        else httpPost("users", values).then((response) => { console.log(response) }).catch((err) => { console.log(err) });
    }
   return (
        <div className="login-bg">
            <div className="container-fluid main">
                <div className="row main">
                    <div className="col-md-3 offset-md-1 container-primary formulario">
                        <div className="vertical-center">
                            <div className="container">
                                <div className="row posicion">
                                    <form>
                                        <InputText hint="Name" id="name" type="text" handleInput={[handleInput, values, setValues]} />
                                        <InputText hint="Email" id="email" type="email" handleInput={[handleInput, values, setValues]} />
                                        <InputText hint="Lastname" id="lastName" type="text" handleInput={[handleInput, values, setValues]} />
                                        <InputText hint="Password" id="password" type="password" handleInput={[handleInput, values, setValues]} />
                                        <p></p>
                                        <ButtonPrimary text="Create acount" callBack={() => { validateLogin() }} />
                                        <Link className="text-white text-center" href={"/login"}>
                                            <p className="mg-t-4">Login</p>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={backgoundRegister} alt={"image-register"} className="backgound-register" />
                </div>
            </div>
        </div>
    )
}