import { FunctionComponent } from 'react';
import { ContactProps } from './Contact.interface';
import {
  ButtonForm,
  ContactBox,
  ContactContent,
  ContactTitle,
  DualInputForm,
  FormContact,
  InputForm,
} from './Contact.styles';

export const Contact: FunctionComponent<ContactProps> = ({ title }) => {
  return (
    <ContactBox id="contactSection">
      <ContactTitle>{title}</ContactTitle>
      <FormContact method="post" action="#">
        <InputForm className="full">
          <input type="text" name="nome" required />
          <label>Nome</label>
        </InputForm>
        <DualInputForm>
          <InputForm>
            <input type="text" name="email" required />
            <label>E-mail</label>
          </InputForm>

          <InputForm className="right">
            <input type="text" name="assunto" required />
            <label>Assunto</label>
          </InputForm>
        </DualInputForm>

        <InputForm className="full">
          <textarea name="mensagem" required></textarea>
          <label>Mensagem</label>
        </InputForm>
        <InputForm className="full">
          <input type="hidden" name="acao" value="enviar" />
          <ButtonForm onClick={() => alert('enviado')} className="btn-submit">
            Enviar
          </ButtonForm>
        </InputForm>
      </FormContact>
    </ContactBox>
  );
};
