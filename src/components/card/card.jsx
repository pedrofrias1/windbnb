import { Fragment} from "react";
import star from "../img/star.svg"


function Cards({ city, country, superHost, title, rating, type, beds, img }) {



    return (
        <Fragment>
            <div className="box-bnb container-fluid d-flex flex-column">
                <div className="cont-img d-flex flex-col">
                    <img src={img} alt="img-house" />
                </div>

                <div className="d-flex justify-content-around align-items-center gap-1 pt-1">
                    {superHost=== false?<span className="btn">{superHost}</span>: <span className="btn active">SuperHost</span> } 
                    <span className="font-medium bs-dark-bg-subtle ">{type}. {beds} Beds  </span>
                    <span className="rating fw-semibold d-flex align-items-center justify-content-end"><img src={star} alt="star" className="star" />{rating} </span>
                </div>

                <div>
                    <p>{title}</p>
                    <span className="fw-bold">{city},{country} </span>
                </div>

            </div>


        </Fragment>
    )
}
export default Cards;