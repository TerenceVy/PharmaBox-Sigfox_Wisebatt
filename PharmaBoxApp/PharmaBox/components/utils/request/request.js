'use strict';

import React from "react";

class Request extends React.Component {
    static post = (url, headers, body) => {
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        })
            .then(response => response.json())
            .then(responseData => {
                return (responseData);
            })
            .catch(() => {
                return (-1);
            });
    };

    static get = (url, headers) => {
        return fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(responseData => {
                return (responseData)
            })
            .catch( () => {
                return (-1);
            });
    }
}

export default (Request);

// export const Request = (props) => {
//     fetch("http://51.158.76.181:5000/connect", {
//         method: "POST",
//         headers: {
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/json",
//             "Postman-Token": "922e5c7c-d6b2-4972-9766-0b6004b20bb1"
//         },
//         body: JSON.stringify({
//             mail: JSON.parse(mail),
//             password: JSON.parse(password)
//         })
//     })
//         .then(response => response.json())
//         .then(responseData => {
//             const action = { type: "SET_PROFIL", value: {
//                     data: responseData.data
//                 }
//             };
//             this.props.dispatch(action);
//             this.props.loading();
//         })
//         .catch( () => {
//             this.props.errorInternet();
//         });
// };