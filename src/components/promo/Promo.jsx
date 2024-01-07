import './promo.scss';
const Promo = () =>{
    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="promo ">
                        <div className="text col-sm-6">
                        <h1>Cooking Made Fun and Easy: Unleash Your Inner Chef</h1>
                        <p>Discover more than <span style={{color: "greenyellow"}}>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook.</p>
                        </div>
                        <div className="frame col-sm-3">
                            <h3>Explore recipe</h3>
                        </div>
                        <div className="img">
                            <div className="g"></div>
                            <div className="t"></div>
                            <div className="b"></div>
                            <div className="food"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Promo;