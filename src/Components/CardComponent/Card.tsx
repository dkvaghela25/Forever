import './Card.css'
import {useNavigate} from 'react-router-dom';

interface CardProps {
    id: number;
    image_url: string;
    title: string;
    price: number;
}

function Card(props: CardProps) {

    const navigate = useNavigate();

    return (
        <div
            className="Card"
            onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/product/${props.id}`);
            }}
        >
            <div className="image"><img src={props.image_url} alt="" /></div>
            <div className="title">{props.title}</div>
            <div className="price">${props.price}</div>
        </div>
    )
}

export default Card
