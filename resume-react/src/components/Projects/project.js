import AreaOfInterest from '../AreaOfInterest/areaOfInterest'
import './project.css'
function Project(){
    return(
        <>
            <h3>PROJECTS</h3>
            <hr></hr>
            <div className='two-elements'>
                <p className='left'><b>Chatbot</b></p>
                <p className="right">June 2020 - Sept 2022</p>
            </div>
            <ul>
                <li>
                    Html,CSS,JavaScript
                </li>
                <li>
                    It a web based application that helps student resolve basic internet related issues or proxy connection inside the
                    campus
                </li>
                <li>
                    Students can easily get the solutions of frequently occurring problems
                </li>
            </ul>
            <div className='two-elements'>
                <p className='left'><b>Electricity Billing System</b></p>
                <p className="right">May 2020 - June 2020</p>
            </div>
            <ul>
                <li>
                    Java,MySQL
                </li>
                <li>
                    It is a desktop based application for both admin and customer
                </li>
                <li>
                    Admin can register new customer,check their payment status,use utility such as system calculator and notepad
                    using keyboard shortcuts
                </li>
                <li>
                    User can login and update their details,check their bill,pay their bill
                </li>
            </ul>

            <AreaOfInterest />
        </>
    )
}

export default Project