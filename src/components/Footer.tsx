import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--gray-1);
  font-size: 20px;
  border-top: 1px solid var(--gray-1);
  margin-top: 6rem;
`;

const Footer = () => {
    return <FooterContainer>&copy; 2021 Second Company</FooterContainer>
}

export default Footer;