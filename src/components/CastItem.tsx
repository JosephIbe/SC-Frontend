import styled from "styled-components";

const CastItemContainer = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;

    img {
        height: 250px;
        width: 200px;
        object-fit: cover;
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
        <img src={image} />
        <h4>{name}</h4>
    </CastItemContainer>
}

export default CastItem;