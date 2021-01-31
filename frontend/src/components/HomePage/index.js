import Mom from '../../../src/img/mumblr-mom.png';
import './HomePage.css';

function HomePage() {
    return (
        <div className='homebody'>
            <img className='mom' alt='mom' src={Mom}/>
            <div className='homePageTitleDiv'>
                <p className='title'>
                    Share
                    <br />
                    and 
                    <br />
                    Discover
                    <br /> 
                    With
                    <br /> 
                    other
                    <br />
                     Moms
                </p>
            </div>
        </div>
    )
}
export default HomePage;