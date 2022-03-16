import { type } from 'os';
import React from 'react'
import { MessagePropsType } from './Message';



type  MessageAreaPropsType= MessagePropsType



function MessageArea(props: MessageAreaPropsType ) {
    return (
        <div>
            <div>'Some Name'</div>
            <div>'some text'</div>
        </div>
    )
}

export default MessageArea;