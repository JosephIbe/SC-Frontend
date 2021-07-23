import styled from "styled-components";

const GenresContainer = styled.div`
    min-width: 5rem; 
    width: auto;
    height: 40px;
    border: 1px solid #6b6b6b;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    &:hover {
        background-color: #6b6b6b;
        cursor: pointer;
    }
`;

const Genres = ({title} : {title: string}) => {
    return (
        <GenresContainer> {title} </GenresContainer>
    )
}

export default Genres;