import {StyledCard} from './styles/Card.styled';

export default function Card({item}) {
    return (
        // Every even card id will have a layout prop that equals 'row-reverse
        <StyledCard layout={item.id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>

            <div>
                <img src={`./images/${item.image}`} alt='' />
            </div>
        </StyledCard>
    )
}