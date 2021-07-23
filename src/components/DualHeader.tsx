import styled from "styled-components";

const DualHeaderContainer = styled.div`
    margin-top: 3rem;

    h5 {
        font-size: 2.2rem;
        color: var(--primary);
    }

    h6 {
        font-size: 1.2rem;
        color: var(--gray-1);
    }
`;

const DualHeader = ({heading, subHeading}: {heading: string, subHeading: string}) => {
    return <DualHeaderContainer>
        <h5>{heading}</h5>
        <h6>{subHeading}</h6>
    </DualHeaderContainer>
}

export default DualHeader;