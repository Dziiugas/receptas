import './food.scss'
const Food = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="recipe">
                    <h1>Discover, Create, Share</h1>
                    <p>Check our most popular recipes of this week</p>
                    <div className="search">
                        <h3>See all</h3>
                    </div>
                    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                    <div className="block d-flex col-sm-10">
                    <div className="potato">
                     <h4>Potato Soup</h4>
                    <p>View Recipe</p>
                    </div>
                    <div className="Zuppa">
                     <h4>Zuppa Toscanna</h4>
                    <p>View Recipe</p>
                    </div>
                    <div className="eggnog">
                     <h4>Milk Eggnog</h4>
                    <p>View Recipe</p>
                    </div>
                    </div>
                    <div className="block2 d-flex col-sm-10">
                    <div className="rockfish">
                     <h4>Baked asian rockfish</h4>
                    <p>View Recipe</p>
                    </div>
                    <div className="chip">
                     <h4>Potato chip</h4>
                    <p>View Recipe</p>
                    </div>
                    <div className="miso">
                     <h4>Miso soup</h4>
                    <p>View Recipe</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}

export default Food