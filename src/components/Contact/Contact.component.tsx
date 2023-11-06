import { FunctionComponent, useState } from 'react';
import { ContactProps } from './Contact.interface';
import {
  ButtonForm,
  ContactBox,
  ContactTitle,
  DualInputForm,
  FormContact,
  FormContent,
  InputForm,
  SocialItem,
  SocialTitle,
  SocialsContent,
} from './Contact.styles';
import emailjs from '@emailjs/browser';

export const Contact: FunctionComponent<ContactProps> = ({
  title,
  socials,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

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
        },
        (err) => {
          console.log('Error:', err);
        },
      );

    e.preventDefault();

    alert('teste');
  }

  return (
    <ContactBox id="contactSection" className="hidden">
      <FormContent>
        <ContactTitle>{title}</ContactTitle>
        <FormContact method="post" action="#" onSubmit={sendEmail}>
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
    </ContactBox>
  );
};
