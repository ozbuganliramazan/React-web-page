import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function CategoryBox(props) {
    console.log('>> Category Box Props', props);

    return (
        <Card className={'mb-4 rounded-3 shadow-sm border-primary'}>
            <Card.Header className={'py-3 text-white bg-primary border-primary'}>
                <h4 className="my-0 fw-normal">
                    {props.category.name}
                </h4>
            </Card.Header>
            <Card.Body>
                <img
                    src={props.category.image}
                    style={{width: "100%", aspectRatio: "1.3", margin: "0px 0px 20px 0px"}}
                />
                <Link to={'categories/' + props.category.slug} className={'w-100 btn btn-primary btn-lg'}>
                    Detay
                </Link>
            </Card.Body>
        </Card>
    )
}

