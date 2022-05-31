import { useState } from "react";
import api from "../../services/api";
import {NewsletterContainer, NewsWrapper, SuccessMsg, Button, ErrorMsg, Box} from "./style"
import { Formik, Field, Form, getIn } from 'formik';
import * as Yup from 'yup';

const NewsSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório!').matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms,'Preencha com seu name completo'),
  email: Yup.string().required('Este campo é obrigatório!').email('Preencha com um e-mail válido'),
});

export const Newsletter = () => {
  const [submited, setSubmited] = useState(false);

  const styleError = {
    border: '1px solid #D7182A',
  };

  const handleOnSubmit = (values, actions) => {
    console.log('Form Data',values);
    // alert(JSON.stringify(values, null, 2));

    api.post("/newsletter", {
      email: values.email,
      name: values.name
    })
    .then(response => {
      actions.setSubmitting(false);
      toggleSubmitted();
      console.log(response.data);
      actions.resetForm();
    })
    .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
    });
  };

  const toggleSubmitted = () => {
    setSubmited(current => !current);
  };

  return (
    <NewsletterContainer>
      <NewsWrapper>
        {submited == true ? (
          <SuccessMsg>
            <strong>
              Seu e-mail foi cadastrado com sucesso!
            </strong>
            <p>
              A partir de agora você receberá as novidade e ofertas exclusivas.
            </p>

            <Button onClick={toggleSubmitted} large>
              Cadastrar novo e-mail
            </Button>
          </SuccessMsg>
        ): (
          <>
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <Formik
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{name: '', email: '' }}
              validationSchema={NewsSchema}
              onSubmit={handleOnSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Box>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Digite seu nome"
                      style={getIn(errors, 'name') ? styleError : null}
                    />
                    {errors.name && touched.name ? (
                      <ErrorMsg>{errors.name}</ErrorMsg>
                    ) : null}
                  </Box>

                  <Box>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Digite seu email"
                      style={getIn(errors, 'email') ? styleError : null}
                      />
                    {errors.email && touched.email ? <ErrorMsg>{errors.email}</ErrorMsg> : null}
                  </Box>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Eu quero!'}
                  </Button>
                </Form>
              )}
            </Formik>
          </>
        )}
      </NewsWrapper>
    </NewsletterContainer>
  )
}