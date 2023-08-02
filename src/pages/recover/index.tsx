import "@/app/globals.css"
import "@/app/css/recover.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import React, { useState } from "react"
import { handleInput } from "@/app/core/repository/handle_input"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import { registerBody, validateRegisterBody } from "@/app/core/repository/register/register_body"
import Image from "next/image"
import backgoundRecover from "@/app/assets/images/backgound-recover.png"


export default function RecoverPasswordComponent() {
    const [values, setValues] = useState(registerBody)
    return (
        <div className="login-bg">
            <div className="container-fluid main">
                <div className="row main">
                    <div className="col-md-3 offset-md-1 container-primary formulario">
                        <div className="vertical-center">
                            <div className="container">
                                <div className="row posicion">
                                    <form>
                                        <InputText hint="Email" id="email" type="email" handleInput={[handleInput, values, setValues]} />
                                        <ButtonPrimary text="Recover password" callBack={() => {
                                            alert(validateRegisterBody(values))
                                        }} />
                                        <Link className="text-white text-center" href={"/login"}>
                                            <p className="mg-t-5">Login</p>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={backgoundRecover} alt={"image-register"} className="backgound-recover" />
        </div>
    )
}