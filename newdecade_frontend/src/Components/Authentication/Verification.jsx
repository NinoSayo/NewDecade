import React , {useState,useEffect} from "react";
import axios from "axios";
import { useLocation , useNavigate} from "react-router-dom";
import QRCode from 'qrcode.react';


function Verification(){
    const [verificationCode , setVerificationCode] = useState('');
    const [verificationResult,setVerificationResult] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state;

    // useEffect(() =>{
    //     async function QRCodeFetch(){
    //         try{
    //             const response = await axios.get('https://localhost:5000/api/User/getVerificationCode?email=${email}')
    //         }
    //     }
    // })

    const handleVerification = async () => {
        try{
            const response = await axios.post('https://localhost:5000/api/User/verify',{
                email,
                verificationCode
            });
            setVerificationResult(response.data);
            navigate('/login',{state:{email}});
        }catch(error){
            console.error('Error verifying email:',error);
            setVerificationResult('An error occurred during verification');
        }
    };

    const handleQRCodeScan = (scannedCode) =>{
        setVerificationCode(scannedCode);
        handleVerification();
    }
    return (
        <div>
        <h2>Email Verification</h2>
        <div>
          <label>Email:</label>
          <div>{email}</div>
        </div>
        <div>
          <label>Verification Code:</label>
          <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
        </div>
        <button onClick={handleVerification}>Verify Email</button>
        {verificationResult && <p>{verificationResult}</p>}
        {/* QR Code Component */}
        <QRCode value={`Email: ${email}, Verification Code: ${verificationCode}`} onScan={handleQRCodeScan} />
      </div>
    )
}

export default Verification;