import "./Footer.css"
import { useProducts } from "../context/ProductcProvider"

export default function Footer() {

    const { filters } = useProducts()

    return (

        <footer className="footer">
            {JSON.stringify(filters, null, 2)}
            {/**<footer className='footer'>
                <h4>Prueba tecnica react <span>@gianmarco</span></h4>
                <h5>Shoping cat uscontext y usereducer</h5>
    </footer>**/}
        </footer>
    )
}
