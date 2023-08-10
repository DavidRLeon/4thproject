import "@/app/globals.css"
import "@/app/css/tasks.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { handleInput } from "@/app/core/repository/handle_input"
import InputText from "@/app/components/forms/input-text/input-text"
import ButtonPrimary from "@/app/components/forms/button-primary/button-primary"
import { taskModel, taskModelSingle } from "@/pages/home"
import { httpPost, httpPut } from "@/app/core/http-request-contract"
import Image from "next/image"
import backgoundtask from "@/app/assets/images/backgound-tasks.png"


export default function CreateTaskComponent(props: { task?: typeof taskModelSingle }) {
    const [values, setValues] = useState(taskModel)

    useEffect(() => {
        if (props.task?.title != '' && props.task != null) {
            setValues([props.task])
        }
    }, [])

    const createTask = () => {
        httpPost("tasks", values).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })

    }

    const updateTask = () => {
        httpPut("tasks", values, props.task?.id + '').then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        })

    }
    
    function setDate(date?: String): String {
        var dateArray = date?.split("T")
        try {
            return dateArray!![0];
        } catch (e: any) {
            return ''
        }
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
                                        <InputText hint="Title" id="title" value={props.task?.title} type="text" handleInput={[handleInput, values, setValues]} />
                                        <InputText hint="Date" id="datetime" value={props.task?.datetime} type="date" handleInput={[handleInput, values, setValues]} />
                                        <InputText hint="Priority" id="priority" value={props.task?.priority} type="number" handleInput={[handleInput, values, setValues]} />
                                        <InputText hint="Description" id="description" value={props.task?.description} type="textarea" handleInput={[handleInput, values, setValues]} />
                                        {
                                            props.task?.id != null ? (<ButtonPrimary text="Update Task" callBack={() => { updateTask() }} />
                                            ) : (<ButtonPrimary text="Create Task" callBack={() => { createTask() }} />)
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={backgoundtask} alt={"imagen"} className="backgoundtask" />
                </div>
            </div>
        </div>
    )
}
