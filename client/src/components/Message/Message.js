// import React from 'react';

// import './Message.css';

// import ReactEmoji from 'react-emoji';

// const Message = ({ message: { user, text }, name }) => {
//   let isSentByCurrentUser = false;

//   //const trimmedName = name.trim().toLowerCase();

//   if(user === name) {
//     isSentByCurrentUser = true;
//   }

//   return (
//     isSentByCurrentUser
//       ? (
//         <div className="messageContainer justifyStart">
//           <p className="sentText pr-10">{name}</p>
//           <div className="messageBox backgroundBlue">
//             <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
//           </div>
//         </div>
//         )
//         : (
//           <div className="messageContainer justifyEnd">
//             <div className="messageBox backgroundLight">
//               <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
//             </div>
//             <p className="sentText pl-10 ">{user}</p>
//           </div>
//         )
//   );
// }

// export default Message;

import './Message.css'
import ReactEmoji from 'react-emoji'

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false

  //const trimName = name.trim().toLowerCase()

  if (user === name) {
    isSentByCurrentUser = true
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  )
}

export default Message