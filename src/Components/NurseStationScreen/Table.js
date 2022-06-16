import React from 'react'
import './Table.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import roomservice from "./assets/img/roomservice.png"
import bedsheets from "./assets/img/bedsheets.png"
import blank from "./assets/img/blank.png"
import shampoo from "./assets/img/shampoo.png"
import curtains from "./assets/img/curtains.png"
import icecube from "./assets/img/icecube.png"
import medical from "./assets/img/medical.png"
import medication from "./assets/img/medication.png"
import mop from "./assets/img/mop.png"
import nurse from "./assets/img/nurse.png"
import pain from "./assets/img/pain.png"
import pillow from "./assets/img/pillow.png"
import drink from "./assets/img/drink.png"
import assistance from "./assets/img/assistance.png"
import heat from "./assets/img/heat.png"
import bed from "./assets/img/bed.png"
import water from "./assets/img/water.png"
import tv from "./assets/img/tv.png"

export default function Table() {
    const [requests, setRequests] = useState([])

    const url = "https://gbm1wdp0jl.execute-api.us-east-1.amazonaws.com/api/assignment_screen"          //test the API on postman

    const WAIT_TIME = 500;

    useEffect(() => {                                          //Here I am fetching the api each 500 milliseconds, and reloding the website without refreshing it.
        const id = setInterval(() => {
            axios
                .get(url)
                .then(res => {
                    setRequests(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }, WAIT_TIME);
        return () => clearInterval(id);
    }, [requests]);

    var assignedDate = []

    for (let index = 0; index < requests.length; index++) {                                // function to get the right date format for the assigned date. I get a timestamp from the API.

        const start = new Date(requests[index]["assignmentDate"]);
        const millis = Date.now() - start;
        var num = Math.floor(millis / 60000);
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        if (rhours === 0) {
            if (rminutes === 0) assignedDate.push("Now")
            else if (rminutes === 1) assignedDate.push(`1 minute`)
            else assignedDate.push(`${rminutes} minutes`)
        }
        else if (rhours === 1) {
            if (rminutes === 0) assignedDate.push(`1 hour`)
            else if (rminutes === 1) assignedDate.push(`1 hour, 1 minute`)
            else assignedDate.push(`1 hour, ${rminutes} minutes`)
        }

        else {
            if (rminutes === 0) assignedDate.push(`${rhours} hours`)
            else if (rminutes === 1) assignedDate.push(`${rhours} hours, 1 minute`)
            else assignedDate.push(`${rhours} hours, ${rminutes} minutes`)
        }
    }

    var acceptedDates = []

    for (let index = 0; index < requests.length; index++) {                             // function to get the right date format for the accepted date. I get a timestamp from the API.

        const start1 = new Date(requests[index]["actionDate"]);
        const millis1 = Date.now() - start1;
        var num1 = Math.floor(millis1 / 60000);
        var hours1 = (num1 / 60);
        var rhours1 = Math.floor(hours1);
        var minutes1 = (hours1 - rhours1) * 60;
        var rminutes1 = Math.round(minutes1);
        if (rhours1 === 0) {
            if (rminutes1 === 0) acceptedDates.push("Now")
            else if (rminutes1 === 1) acceptedDates.push(`1 minute`)
            else acceptedDates.push(`${rminutes1} minutes`)
        }
        else if (rhours1 === 1) {
            if (rminutes1 === 0) acceptedDates.push(`1 hour`)
            else if (rminutes1 === 1) acceptedDates.push(`1 hour, 1 minute`)
            else acceptedDates.push(`1 hour, ${rminutes1} minutes`)
        }

        else {
            if (rminutes1 === 0) acceptedDates.push(`${rhours1} hours`)
            else if (rminutes1 === 1) acceptedDates.push(`${rhours1} hours, 1 minute`)
            else acceptedDates.push(`${rhours1} hours, ${rminutes1} minutes`)
        }
    }

    function image(imgscr) {                                  //function to assign the right image to the request
        if (imgscr === "roomservice.png") {
            return <img src={roomservice} alt="roomService" width={50} height={50} />
        }
        else if (imgscr === "bedsheets.png") {
            return <img src={bedsheets} alt="bedsheets" width={50} height={50} />
        }
        else if (imgscr === "blank.png") {
            return <img src={blank} alt="blank" width={50} height={50} />
        }
        else if (imgscr === "shampoo.png") {
            return <img src={shampoo} alt="shampoo" width={50} height={50} />
        }
        else if (imgscr === "curtains.png") {
            return <img src={curtains} alt="curtains" width={50} height={50} />
        }
        else if (imgscr === "icecube.png") {
            return <img src={icecube} alt="icecube" width={50} height={50} />
        }
        else if (imgscr === "medical.png") {
            return <img src={medical} alt="medical" width={50} height={50} />
        }
        else if (imgscr === "medication.png") {
            return <img src={medication} alt="medication" width={50} height={50} />
        }
        else if (imgscr === "mop.png") {
            return <img src={mop} alt="mop" width={50} height={50} />
        }
        else if (imgscr === "nurse.png") {
            return <img src={nurse} alt="nurse" width={50} height={50} />
        }
        else if (imgscr === "pain.png") {
            return <img src={pain} alt="pain" width={50} height={50} />
        }
        else if (imgscr === "pillow.png") {
            return <img src={pillow} alt="pillow" width={50} height={50} />
        }
        else if (imgscr === "drink.png") {
            return <img src={drink} alt="drink" width={50} height={50} />
        }
        else if (imgscr === "assistance.png") {
            return <img src={assistance} alt="assistance" width={50} height={50} />
        }
        else if (imgscr === "heat.png") {
            return <img src={heat} alt="heat" width={50} height={50} />
        }
        else if (imgscr === "bed.png") {
            return <img src={bed} alt="bed" width={50} height={50} />
        }
        else if (imgscr === "water.png") {
            return <img src={water} alt="water" width={50} height={50} />
        }
        else if (imgscr === "tv.png") {
            return <img src={tv} alt="tv" width={50} height={50} />
        }

    }

    function setState(state, message) {                             //Function the set the status of the request with its right badge {assigned, accepted or declined (if declined display the decline message, i.e why it was declined)}
        if (state === "Assigned") {
            return <h3><span class="badge badge-pill badge-success" style={{ "backgroundColor": "#645DD7", "color": "#FFF8DC" }}>Assigned</span></h3>

        }
        else if (state === "Accepted") {
            return <h3><span class="badge badge-pill badge-success" style={{ "backgroundColor": "#15d629", "color": "#FFF8DC" }}>Accepted</span></h3>

        }
        else if (state === "Declined") {
            return <><h3><span class="badge badge-pill badge-danger" style={{ "backgroundColor": "#FD3781", "color": "#fff" }}>Declined</span></h3> <h5>{message}</h5> </>

        }
    }

    return (
        <div>
            <h1><b>Helen Nurse Station <span>0.1.1</span></b><small><b>© 2022 Bennett Ranville Group</b></small></h1>
            <div className='table'>
                <ul class="responsive-table">
                    <li class="table-header">
                        <div class="col col-1"><h4><b>Room</b></h4></div>
                        <div class="col col-2"><h4><b>Patient</b></h4></div>
                        <div class="col col-3"><h4><b>Request</b></h4></div>
                        <div class="col col-4"><h4><b>ASSIGNED</b></h4></div>
                        <div class="col col-5"><h4><b>ACCEPTED</b></h4></div>
                        <div class="col col-6"><h4><b>Status</b></h4></div>
                        <div class="col col-7"><h4><b>Concierge</b></h4></div>
                    </li>
                    {requests.map((request, index) => (
                        <li class= {(request.prompt === "Patient needs a drink") ? "table-row1" : "table-row"}>
                            <div class="col1 col-1" style={{ "fontSize": "48px" }}><h2> <span class="badge badge-pill badge-success" style={{ "backgroundColor": "#58728D", "fontSize": "30px" }}>{request.roomNumber}</span></h2></div>
                            <div class="col1 col-2" style={{ "textAlign": "center" }} >{request.patientname}</div>
                            <div class= "col1 col-3" style={{ "textAlign": "center" }}>{image(request.image)} {request.prompt}</div>
                            <div class="col1 col-4" style={{ "textAlign": "center" }}>{`${assignedDate[index]}`}</div>
                            <div class="col1 col-5" style={{ "textAlign": "center" }}>{`${acceptedDates[index]}`}</div>
                            <div class="col1 col-6" style={{ "textAlign": "center" }}> {setState(request.action, request.message)}</div>
                            <div class="col1 col-7" style={{ "textAlign": "center" }}>{request.concierge}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}