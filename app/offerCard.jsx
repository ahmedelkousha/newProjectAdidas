import "./offercard.css";

export default function OfferCard({imageUrl, productTitle, price}){

    return(
    <div className='offerCard flex flex-col justify-center items-center text-center'>
    <img className="offerCardImg" src={imageUrl} />
    <h2 style={{fontSize:"12px", fontWeight:"bold"}}>{productTitle}</h2>
    <p style={{fontSize:"12px"}}>{price}</p>
    <a style={{textDecoration:"underline", fontSize:"12px", fontWeight:"bold"}} href="#">BUY NOW</a>
    </div>
    )
}