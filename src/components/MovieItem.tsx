import styled from "styled-components";

const MovieItemContainer = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 20px;
    z-index: 50;
    padding: 15px;
    position: relative;
        
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform .2s;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        font-size: 30px;

        svg {
            width: 30px;
        }
    }

    .release {
        position: absolute;
        bottom: 10px;

        h3 {
            font-size: 3rem;
            color: var(--primary);
        }
    }

    @media only screen and (max-width: 768px) {
        width: 200px;
        height: 250px;
    }
`;

const MovieItem = ({show} : {show: any}) => {
    return <MovieItemContainer style={{backgroundImage: `url(${show.image.original})`}}>
        <div className="meta">
            <h5> &#11088; {show.rating.average} </h5>
        </div>
        <div className="release">
            <h3>{show.name}</h3>
        </div>
    </MovieItemContainer>
}

export default MovieItem;