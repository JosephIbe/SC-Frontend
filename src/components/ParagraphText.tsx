import styled from "styled-components"

const ParagraphTextContainer = styled.div`
    color: var(--deep-dark);
    font-size: 1.5rem;
    margin-top: 2rem;
`;

const ParagraphText = ({text} : {text: string}) => {
    return <ParagraphTextContainer>{text}</ParagraphTextContainer>
}

export default ParagraphText;