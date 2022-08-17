import { ChatMessage } from '..'

import { ChatbootModalPersonTextContainer } from '../styles'

export const personMessageTemplate = (chatMessage: ChatMessage) => {
  return (
    <p key={chatMessage.messageId} className={ChatbootModalPersonTextContainer}>
      {chatMessage.message}
    </p>
  )
}