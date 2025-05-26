import './Feature.css'

interface FeatureProps {
    image_url: string;
    feature: string;
    description: string;
}

function Feature(props: FeatureProps) {
    return (
        <div className="Feature">
            <div className="image"><img src={props.image_url} alt="" /></div>
            <div className="title"><b>{props.feature}</b></div>
            <div className="price">{props.description}</div>
        </div>
    )
}

export default Feature
