import { FunctionComponent, useState } from 'react';
import { ContactProps } from './Contact.interface';
import {
  ButtonForm,
  CloseButton,
  ContactBox,
  ContactTitle,
  DualInputForm,
  FormContact,
  FormContent,
  InputForm,
  ModalDiv,
  ModalTitle,
  SocialItem,
  SocialTitle,
  SocialsContent,
} from './Contact.styles';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai';

export const Contact: FunctionComponent<ContactProps> = ({
  title,
  socials,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  function sendEmail(e: any) {
    const templateParams = {
      from_name: name,
      email: email,
      message: mensagem,
      subject: assunto,
    };

    emailjs
      .send(
        'service_b2ageco',
        'template_hpt0wik',
        templateParams,
        'edjQlgyd_1YO5VMWU',
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setAssunto('');
          setMensagem('');
          setIsOpen(true);
        },
        (err) => {
          console.log('Error:', err);
        },
      );

    e.preventDefault();
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px',
      background: '#FFF',
    },
  };

  function closeModal(e: any) {
    e.preventDefault();
    setIsOpen(false);
  }

  return (
    <ContactBox data-anchor="contactSection" className="hidden section">
      <FormContent>
        <ContactTitle>{title}</ContactTitle>
        <FormContact
          method="post"
          action="#"
          onSubmit={sendEmail /*() => setIsOpen(true)*/}
        >
          <InputForm className="full">
            <input
              type="text"
              name="nome"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>Nome</label>
          </InputForm>
          <DualInputForm>
            <InputForm>
              <input
                type="text"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>E-mail</label>
            </InputForm>

            <InputForm className="right">
              <input
                type="text"
                name="assunto"
                required
                onChange={(e) => setAssunto(e.target.value)}
                value={assunto}
              />
              <label>Assunto</label>
            </InputForm>
          </DualInputForm>

          <InputForm className="full">
            <textarea
              name="mensagem"
              required
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
            ></textarea>
            <label>Mensagem</label>
          </InputForm>
          <InputForm className="full">
            <input type="hidden" name="acao" value="enviar" />
            <ButtonForm className="btn-submit" type="submit">
              Enviar
            </ButtonForm>
          </InputForm>
        </FormContact>
      </FormContent>
      <SocialsContent>
        {socials?.map((social) => (
          <SocialItem href={social.link} key={social.title} target="__blank">
            {social.icon}
            <SocialTitle>{social.title}</SocialTitle>
          </SocialItem>
        ))}
      </SocialsContent>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal de envio"
      >
        <ModalDiv>
          <CloseButton onClick={closeModal}>
            <AiOutlineClose className="closedIcon" />
          </CloseButton>
          <AiFillCheckCircle className="checkIcon" />
          <ModalTitle>E-mail enviado com sucesso!</ModalTitle>
        </ModalDiv>
      </Modal>
    </ContactBox>
  );
};
