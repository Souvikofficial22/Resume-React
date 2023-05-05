import Technical from '../Technical-Skill/technical'
import './education.css'

function Education(){
    return(
        <>
            <h3>EDUCATION</h3>
            <hr></hr>
            <div className='two-elements'>
                <p className='left'><b>MNNIT Allahabad </b></p>
                <p className="right">Prayagraj,UP</p>
            </div>
            <div className='two-elements'>
                <p className='left'><i>Master of Computer Application </i></p>
                <p className="right"><i>Dec. 2020 - Present</i></p>
            </div>
            <ul>
                <li>
                    CPI: 8.35
                </li>
            </ul>

            <div className='two-elements'>
                <p className='left'><b>Assam University</b></p>
                <p className="right">Silchar,Assam</p>
            </div>
            <div className='two-elements'>
                <p className='left'><i>Bachelor of Science in Computer Science</i></p>
                <p className="right"><i>Jul. 2017 - Sep. 2020</i></p>
            </div>
            <ul>
                <li>
                    CGPA: 7.03
                </li>
            </ul>

            <div className='two-elements'>
                <p className='left'><b>Kendriya Vidyalaya Panchgram</b></p>
                <p className="right">Panchgram,Assam</p>
            </div>
            <div className='two-elements'>
                <p className='left'><i>Class XII</i></p>
                <p className="right"><i>May 2017</i></p>
            </div>
            <ul>
                <li>
                    Percentage: 76.8
                </li>
            </ul>

            <div className='two-elements'>
                <p className='left'><b>Kendriya Vidyalaya Panchgram</b></p>
                <p className="right">Panchgram,Assam</p>
            </div>
            <div className='two-elements'>
                <p className='left'><i>Class X</i></p>
                <p className="right"><i>May 2015</i></p>
            </div>
            <ul>
                <li>
                    CGPA: 8.02
                </li>
            </ul>

            <Technical />
        </>
    )
}

export default Education