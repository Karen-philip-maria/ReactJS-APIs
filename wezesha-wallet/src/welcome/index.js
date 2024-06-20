import './index.css';
import mission from  '../images/mission.png';
import vision  from '../images/vision.png';


const Welcome=()=>{
    return(
       <div className='welcome'>
        <div>
        <h1 className="mission">Mission</h1>
        <img id ="image" src={mission}/>
        <div className='our-mission'>
            Our mission is to bring smart agriculture to
            smallholder farmers to transform their lives
            and enhance food security and easen their loans
            accessibility processes.
        </div>
        </div>
        <div>
            <h1 className="vission">Vision</h1>
            <img id ="images" src={vision}/>
            <div className='our-vission'>
                Our vission is to transform dairy farming
                through digital innovation and financial 
                empowerment.
            </div>
        </div>
       </div> 
    )
}
export default Welcome;

