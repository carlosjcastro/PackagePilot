// import React, { useEffect } from 'react';
// import '../login.css';

// const GoogleLoginButton: React.FC = () => {
//     const handleCredentialResponse = (response: any) => {
//         console.log('Encoded JWT ID token: ' + response.credential);
//     };

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://accounts.google.com/gsi/client';
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);

//         script.onload = () => {
//             window.google.accounts.id.initialize({
//                 client_id: 'YOUR_CLIENT_ID',
//                 callback: handleCredentialResponse,
//             });
//         };

//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     const handleSignInWithGoogle = () => {
//         window.google.accounts.id.prompt({
//             client_id: 'YOUR_CLIENT_ID',
//             callback: handleCredentialResponse,
//         });
//     };

//     return (
//         <button className="custom-google-button login-btn-sn" onClick={handleSignInWithGoogle}>
//             Sign in with Google
//         </button>
//     );
// };

// export default GoogleLoginButton;
