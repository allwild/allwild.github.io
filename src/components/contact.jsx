import styled from "styled-components";


export default function Contact() {
  return (
    <Container id="contact">
      <TextBox>
        <Caption>Contact</Caption>
        <ContactTextWrapper>
            <h1>Looking for a solution?</h1>
            <p>
            Let's join forces and transform your ideas into a captivating web
            presence.
            </p>
        </ContactTextWrapper>
        <ButtonContainer>
            <a href="https://www.linkedin.com/in/awild3/" target="_blank">
                <Button className="linkedin">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                    LinkedIn
                </Button>
            </a>
            <a href="mailto:almos.wildanger@gmail.com" className="e-mail-link">
                <Button>
                    <i className="fa-sharp fa-regular fa-envelope fa-xl"></i>
                    Send
                </Button>
            </a>
        </ButtonContainer>
      </TextBox>
        {/* <FormDiv>
            <Form>
                <LabelFieldWrapper>
                    <label for="name">NAME</label>
                    <input type="text" id="name" name="name"  />
                </LabelFieldWrapper>

                <LabelFieldWrapper>
                    <label for="email">EMAIL</label>
                    <input type="text" id="email" name="email"  />
                </LabelFieldWrapper>

                <LabelFieldWrapper>
                    <label for="subject">MESSAGE</label>
                    <textarea id="subject" name="subject" style={{ height: "100px", resize: "vertical" }}></textarea>
                </LabelFieldWrapper>

                
            </Form>
        </FormDiv> */}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  color: #fff;

    @media (max-width: 768px) {
    flex-direction: column;
    }
  
`;

const TextBox = styled.div`
background-color: #282828;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
    padding: 40px;

    @media (max-width: 768px) {
      padding: 20px;
      width: 100%;
    }
`;

const FormDiv = styled.div`
    width: 50%;
  display: flex;
  background-color: #282828;
  padding: 40px;

    @media (max-width: 768px) {
      padding: 20px;
      width: 100%;
    }
  `

const Form = styled.form`
    width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  .send {
    align-self: flex-start;
    margin-top: 0;
    }
  `

const LabelFieldWrapper = styled.div`
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  label {
    font-weight: bold;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px 20px;
    background-color: #282828;
    color: #fff;
    border: 0.5px solid #a9a9a9bf;
  }`

const ContactTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  
  h1, p {
    margin: 0;
  }
  
  .e-mail-link {
    color: #fff;
    text-decoration: none;
    font-style: italic;
  }
  `

const Caption = styled.h1`
  font-family: "Press Start 2P", cursive;
  color: #14db99;
  margin: 0;
  text-shadow: 3px 3px 0 #8400ff;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #8400ff;
  color: #fff;
  width: 150px;
  height: 50px;
  font-family: "Press Start 2P", cursive;
  box-shadow: 3px 2px 0 #14db99;
  margin-top: 40px;
  cursor: pointer;
  border-width: 0.5px;

  

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  a {
      text-decoration: none;
  }

`;
