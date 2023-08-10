import "@/app/globals.css"
import "@/app/css/dashboard.css"
import "@/app/css/container-primary.css"
import "bootstrap/dist/css/bootstrap.css"
import "@/app/css/button-primary.css"
import React, { useState } from "react"
/* import Lottie from 'react-lottie'; */
import Link from "next/link"
import { httpGet } from "@/app/core/http-request-contract"
import ContainerTask from "@/app/components/container-task/container-task"
import Image from "next/image"
import backgoundtask from "@/app/assets/images/backgound-tasks.png"

export const taskModelSingle = { id: 1, title: "", description: "", datetime: "", priority: "" }
export const taskModel = [taskModelSingle]

export default function HomeComponent() {
    const [tasks, setTask] = useState(taskModel)

    React.useEffect(() => {
        httpGet("tasks").then((data) => {
            setTask(data)
            console.log(data)
        }).catch((error) => console.log(error))
    }, [])

    const results = tasks.map((task) =>
        <ContainerTask key={task.id} task={task} />
    );


    return (
        <div className="login-bg">
            <div className="container-fluid main">
                <div className="row main">
                    <div className="col-md-8 offset-md-1 container-primary formulario">
                        <div className="vertical-center">
                            <div className="container">
                                <div className="row posicion">
                                    {tasks.length > 0 ? (
                                        <div className="row">
                                            {results}
                                        </div>
                                    ) : (
                                        <h1>
                                            No tasks yet!
                                        </h1>
                                    )
                                    }
                                    <Link href={"/task/create"} className="btn buttonPrimary col-md-4"> Create Task</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <button className="btn btn-primary">Close</button> */}
                </div>
                <Image src={backgoundtask} alt={"imagen"} className="backgoundtask" />
            </div >
        </div >
    )
}