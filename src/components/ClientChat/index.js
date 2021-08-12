import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageSeparator,
  TypingIndicator,
  Avatar,
  Footer
} from "@chatscope/chat-ui-kit-react";

import { Container, Row, Col } from 'react-bootstrap';

import ModalForward from '../../fragments/ForwardModal';

import {
  BsFillLightningFill,
  BsPaperclip
} from "react-icons/bs";
import {
  RiEmotionHappyLine,
  RiSendPlane2Fill
} from "react-icons/ri";

import Input from '../../fragments/Input';

import './styles.scss';

const ClientChat = (icons) => (
  <div style={{
    height: "calc(100vh - 300px)", width: "80%", marginLeft: "5vw"
  }}>
    <ChatContainer>
      <MessageList
      /////////////////////////////////////////////////////////////////////
      // Detectar quando cliente está digitando e                        //
      // exibir essa paradinha na tela                                   //
      // typingIndicator={<TypingIndicator content="Emily is typing" />} //
      /////////////////////////////////////////////////////////////////////
      >

        <Message className="message__incoming" model={{
          message: "Confia",
          sentTime: "18:37",
          sender: "Emily",
          direction: "incoming",
          position: "single"
        }}>
          <Message.Footer className="message__footer" sender="18:37" />
        </Message>
        <Message className="message__outcoming" model={{
          message: "Confio",
          sentTime: "15 mins ago",
          sender: "localSender",
          direction: "outgoing",
          position: "single"
        }} />
        <Message.Footer className="message__footer" sentTime="18:38" />
        <Message className="message__incoming" model={{
          message: "Confia",
          sentTime: "15 mins ago",
          sender: "Emily",
          direction: "incoming",
          position: "single"
        }}>
          <Message.Footer className="message__footer" sender="18:39" />
        </Message>
        <Message className="message__outcoming" model={{
          message: "Confio",
          sentTime: "15 mins ago",
          sender: "localSender",
          direction: "outgoing",
          position: "single"
        }} />
        <Message.Footer className="message__footer" sentTime="12:04" />

        <MessageSeparator className="message__separator" content="Saturday, 22 November 2021" />
        <Message className="message__incoming" model={{
          message: "Confia",
          sentTime: "18:37",
          sender: "Emily",
          direction: "incoming",
          position: "single"
        }}>
          <Message.Footer className="message__footer" sender="18:37" />
        </Message>
        <Message className="message__outcoming" model={{
          message: "Confio",
          sentTime: "15 mins ago",
          sender: "localSender",
          direction: "outgoing",
          position: "single"
        }} />
        <Message.Footer className="message__footer" sentTime="18:38" />
        <Message className="message__incoming" model={{
          message: "Confia",
          sentTime: "15 mins ago",
          sender: "Emily",
          direction: "incoming",
          position: "single"
        }}>
          <Message.Footer className="message__footer" sender="18:39" />
        </Message>
        <Message className="message__outcoming" model={{
          message: "Confio",
          sentTime: "15 mins ago",
          sender: "localSender",
          direction: "outgoing",
          position: "single"
        }} />
        <Message.Footer className="message__footer" sentTime="12:04" />
        <MessageSeparator className="message__separator" content="Saturday, 22 November 2021" />
        <Message className="message__incoming" model={{
          message: "Confia",
          sentTime: "18:37",
          sender: "Emily",
          direction: "incoming",
          position: "single"
        }}>
          <Message.Footer className="message__footer" sender="18:37" />
        </Message>
        <Message className="message__outcoming" model={{
          message: "Confio",
          sentTime: "15 mins ago",
          sender: "localSender",
          direction: "outgoing",
          position: "single"
        }} />
        <Message.Footer className="message__footer" sentTime="18:38" />
        <Message className="message__incoming" model={{
          message: "Confia",
          sentTime: "15 mins ago",
          sender: "Emily",
          direction: "incoming",
          position: "single"
        }}>
          <Message.Footer className="message__footer" sender="18:39" />
        </Message>
        <Message className="message__outcoming" model={{
          message: "Confio",
          sentTime: "15 mins ago",
          sender: "localSender",
          direction: "outgoing",
          position: "single"
        }} />
        <Message.Footer className="message__footer" sentTime="12:04" />

      </MessageList>
    </ChatContainer>
    <Row>
      <div className="chat__input">
        <Col lg={10}>
          <Input
            type="text"
            name="Escreva sua mensagem"
          />
        </Col>
        <Col lg={2} className="icon__chat">
          <BsFillLightningFill size={30} />
          <RiEmotionHappyLine size={30} />
          <BsPaperclip size={30} />
          <RiSendPlane2Fill size={30} />
        </Col>
      </div>
    </Row>
  </div>
);

export default ClientChat;