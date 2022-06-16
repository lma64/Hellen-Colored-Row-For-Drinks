import { useState } from 'react';
import './QrCode.css';
import axios from 'axios';

function QrCode() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [qrcode, setQrcode] = useState("");

    async function generateQrCode(e) {                                       
        e.preventDefault()
        await axios.get(`https://gbm1wdp0jl.execute-api.us-east-1.amazonaws.com/api/generateqrcode?firstName=${firstName}&lastName=${lastName}`) //this API get a concierge first name and last name and return the rowguid
            .then(res => {
                if (res.data !== []) {
                    console.log(res.data[0].RowGuid);
                    setQrcode(`http://api.qrserver.com/v1/create-qr-code/?data=${res.data[0].RowGuid}`)             //generate QR code API, gets the rowguid as a parameter
                }
                else {
                    setQrcode("")
                }
            })

    }

    return (
        <div>
            <br />
            <h1 style={{ 'textAlign': 'center', "color": "#58728D" }}><b>Register Concierge's Phone</b></h1>
            <br />
            <form>
                <div class="form-group">
                    <div className="input-box">
                        <div class="form-group">
                            <input
                                className="form-field"
                                type="text"
                                onChange={e => setFirstName(e.target.value)}
                                placeholder="First Name" />
                            <br />
                            <input
                                className="form-field"
                                type="text"
                                onChange={e => setLastName(e.target.value)}
                                placeholder="Last Name" />
                            <br />
                            <button type="submit" class="btn btn-secondary button" onClick={e => generateQrCode(e)}>Generate Qr Code</button>
                        </div>
                    </div>
                </div>
            </form>
            <br />{qrcode === "" ?
                <h1 style={{ 'textAlign': 'center', "color": "#58728D" }}> <b>No Concierge with that Name</b></h1> :
                <img src={qrcode} alt="" style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                }} />}
        </div>
    );
}

export default QrCode;