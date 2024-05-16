import { Fragment, useState } from "react";
import logo from "./img/logo.png";
// import App from "../App";


function Nav({search,handleSearch, restarAdult, sumarAdult, number, num, sumarChild, restarChild, result}){
   
    const [showAdult, setShowAdult] = useState(false);
    const [showChild, setShowChild] = useState(false);
   



// mostar para agregar personas
    const mostrar = () => {
        setShowAdult(!showAdult);
        setShowChild(!showChild);
    }


    return(
        <Fragment>
            <nav className="container-fluid mt-3">
               <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <img src={logo} alt="logo-bnb" /> 
                    </div>
                
                <div className="d-flex align-items-center">
                    {/* <input type="text"   placeholder="search.."/> */}
                    <form class="d-flex" role="search">
                        <input class="form-control  btn-location" value={search} onChange={handleSearch} type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    
                    
                        <div className="d-flex flex-column">
                            <label onClick={mostrar} className="btn relative d-flex btn-guest ">Guests:<span> { result}</span></label>
                        <div className="d-flex flex-column justify-content-center">
                            {showAdult && (
                                <div className="d-flex flex-column align-items-start">
                                    <p>Adult</p>
                                    <p>Age 13 or above</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button onClick={sumarAdult} className="btn-s">+</button>
                                        <span className="number p-2">{number}</span>
                                        <button onClick={restarAdult} className="btn-s">-</button>
                                    </div>
                                </div>
                            )}

                            {showChild && (
                                <div className="d-flex flex-column align-items-start">
                                    <p>Children</p>
                                    <p>Age 2-12 </p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button onClick={sumarChild} className="btn-s">+</button>
                                        <span className="number p-2">{num}</span>
                                        <button onClick={restarChild} className="btn-s">-</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        

                        
                    </div>
                     <button class="btn btn-search " type="submit"><i class="bi bi-search"></i></button>
                    {/* <button type="search" className="button-country border border-gray-200 border-opacity-70 hover:text-gray-600 focus:z-10  focus:border-blue-300 focus:outline-none active:bg-white"><span className="search-open"><i class="bi bi-search"></i> Search</span></button> */}
                </div>
              
               </div>       
            </nav>
        </Fragment>
    )
}
export default Nav;