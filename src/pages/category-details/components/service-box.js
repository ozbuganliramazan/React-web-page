import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function ServiceBox(props) {
    console.log('>> ServiceBox Props', props);

    return (
        <Card className={'mb-4 rounded-3 shadow-sm border-primary'}>
            <Card.Header className={'py-3 text-white bg-primary border-primary'}>
                <h4 className="my-0 fw-normal">
                    {props.service.name}
                </h4>
            </Card.Header>
            <Card.Body>
                <img
                    src={props.service.image}
                    onError={event => event.target.src = 'https://api.adoptez1artisan.com/assets/images/no-image.png'}
                    style={{width: "100%", aspectRatio: "1.3", margin: "0px 0px 20px 0px"}}
                />
                <Link to={'/service/' + props.service.slug} className={'w-100 btn btn-primary btn-lg'}>
                    Detay
                </Link>
            </Card.Body>
        </Card>
    )
}