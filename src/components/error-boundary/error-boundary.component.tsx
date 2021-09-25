import React, { useState } from "react";

// export default function EntityNotFound() {
// const [hasError, setHasError] = useState("false")

//     function getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//       }

//    function componentDidCatch(error, errorInfo) {
//         // You can also log the error to an error reporting service
//         logErrorToMyService(error, errorInfo);
//       }

//       render() {
//         if (this.state.hasError) {
//           // You can render any custom fallback UI
//           return <h1>Something went wrong.</h1>;
//         }
//     return (
//       <div className="container ">
//         <div className="title">This entity cannot be found. </div>
//         <div className="sub-title">Be sure to leave feedback.</div>
//       </div>
//     );
//   }
