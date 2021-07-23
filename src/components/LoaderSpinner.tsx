import styled from "styled-components";
import { BounceLoader } from "react-spinners";

const LoaderContainer = styled.div`
    min-height: 100px;
    min-width: 100px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: transparent;

    h3 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--gray-1);
        margin-top: 2rem;   
    }
`;

const LoaderSpinner = ({loadingText, isLoading}: 
    {loadingText: string, isLoading: boolean}) => {
    return <LoaderContainer>
        <BounceLoader 
            size={50}
            color={'#ffdf00'}
            loading={isLoading}
        />
        <h3>{loadingText}</h3>
    </LoaderContainer>
}

export default LoaderSpinner;