import './manage_card.css'

/* eslint-disable react/prop-types */
function ManageCard({btnNumber}) {
    return <>
        <div className="card__wrap">
            <button className="card__bnt">{btnNumber}</button>
            <div className="card__content--box">
                <h3 className="card__title">Track company-wide progress</h3>
                <p className="card__text">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
            </div>
        </div>
    </>
}

export default ManageCard