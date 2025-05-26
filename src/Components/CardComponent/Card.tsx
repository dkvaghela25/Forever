import './Card.css'

interface CardProps {
    image_url: string;
    title: string;
    price: number;
}

function Card(props: CardProps) {
    return (
        <div className="Card">
            <div className="image"><img src={props.image_url} alt="" /></div>
            <div className="title">{props.title}</div>
            <div className="price">${props.price}</div>
        </div>
    )
}

export default Card
