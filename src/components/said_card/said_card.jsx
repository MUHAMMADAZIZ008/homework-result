import './said_card.css'
import SaidCardImg from '../../assets/said_card_img.svg';
function SaidCard() {
    return <>
        <div className="said__card">
            <div className="said__card_img-box">
                <img className='said__card_img' src={SaidCardImg} alt="user card" />
            </div>
            <h3 className="said__card_title">Anisha Li</h3>
            <p className="said__card_text">  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
        </div>
    </>
}
export default SaidCard