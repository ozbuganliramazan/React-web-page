import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import useApi from "../../hooks/useApi"
import { useEffect, useState } from "react"
import ServiceBox from "./components/service-box"

export default function CategoryDetails() {
    const params = useParams()
    const api = useApi()

    const [categoryDetails, setCategoryDetails] = useState({})
    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        api.get('public/categories/getBySlug/' + params.slug)
            .then((response) => {
                setCategoryDetails(response.data.data)
            })
            .catch(() => {

            })
            .finally(() => {
                setInitialized(true)
            })
    }, [params.slug])

    console.log('>> Params', params)
    console.log('>> categoryDetails', categoryDetails)

    if (!initialized) {
        return (
            <div className={'text-center'}>
                <strong>
                    Loading...
                </strong>
            </div>
        )
    }

    return (
        <main>
            <Row className={'mb-3'}>
                <Col lg={12} sm={12} className={'text-center'}>
                    <h3>
                        {categoryDetails.category.name}
                    </h3>
                    <hr />
                </Col>

                {categoryDetails.services.map((item, index) => {
                    return (
                        <Col lg={3} sm={4} xs={12} key={index}>
                            <ServiceBox service={item} />
                        </Col>
                    )
                })}

            </Row>
        </main>
    )
}