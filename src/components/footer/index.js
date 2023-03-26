import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Footer() {

    const categoriesState = useSelector(state => state.categoriesState)

    return (
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2"
                        src="https://api.adoptez1artisan.com/storage/uploads/menu-logo.png"
                        style={{ height: "70px" }}
                        alt="" />
                    <small className="d-block mb-3 text-muted">© 2017–2021</small>
                </div>
                <div className="col-6 col-md">
                    <h5>
                        Categories
                    </h5>
                    <ul className="list-unstyled text-small">
                        {categoriesState.categories.map((item, index) => {
                            if (index >= 5) {
                                return null;
                            }

                            return (
                                <li className="mb-1" key={index}>
                                    <Link to={'/categories/' + item.slug} className="link-secondary text-decoration-none">
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none"
                            href="#">Resource</a>
                        </li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource
                            name</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another
                            resource</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final
                            resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none"
                            href="#">Team</a>
                        </li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none"
                            href="#">Locations</a>
                        </li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none"
                            href="#">Privacy</a>
                        </li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none"
                            href="#">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
