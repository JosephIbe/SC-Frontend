import styled from "styled-components";

const CastItemContainer = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    img {
        height: 250px;
        width: 200px;
        object-fit: cover;
        border-radius: 15px;
        
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: transform .2s;
            border-radius: 15px;
        }
    }

    h4 {
        color: var(--deep-dark);
        font-size: 2rem;
        font-weight: bold;
        margin-top: 1rem;
        text-align: center;
    }
`;

const CastItem = ({image, name} : {image: string, name: string}) => {
    return <CastItemContainer>
        <img src={image} alt="Actor's Image"/>
        <h4>{name}</h4>
    </CastItemContainer>
}

export default CastItem;