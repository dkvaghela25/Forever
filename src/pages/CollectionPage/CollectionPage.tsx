import { useState } from "react";
import "./CollectionPage.css";
import Collections from "../../assets/Collections/Collections";
import Card from "../../Components/CardComponent/Card";

function CollectionPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="CollectionPage">
      {/* Hamburger for mobile */}
      <button
        className="filter-hamburger"
        onClick={() => setShowFilters(!showFilters)}
      >
        Filters
      </button>
      <div className={`filters${showFilters ? " show" : ""}`}>
        <div>FILTERS</div>
        <form action="">
          <div className="categories">
            <div>
              <b>Categories</b>
            </div>
            <div>
              <input
                type="checkbox"
                id="men"
                name="men"
                value="men"
              />
              <label htmlFor="vehicle1">Men</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="women"
                name="women"
                value="women"
              />
              <label htmlFor="vehicle2">Women</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="kids"
                name="kids"
                value="kids"
              />
              <label htmlFor="vehicle3">Kids</label>
            </div>
          </div>

          <div className="types">
            <div>
              <b>Type</b>
            </div>
            <div>
              <input
                type="checkbox"
                id="topwear"
                name="topwear"
                value="topwear"
              />
              <label htmlFor="vehicle1">Topwear</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="bottomwear"
                name="bottomwear"
                value="bottomwear"
              />
              <label htmlFor="vehicle2">Bottomwear</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="winterwear"
                name="winterwear"
                value="winterwear"
              />
              <label htmlFor="vehicle3">Winterwear</label>
            </div>
          </div>
        </form>
      </div>

      <div className="collections">
        <div>
          <div className="heading">
            <span>All</span> &nbsp; <b>Collections</b> <hr />
          </div>
          <div className="sortby">
            <select name="cars" id="cars">
              <option value="mercedes">Sort by: Relavent</option>
              <option value="volvo">Sort by: Price: Low To High</option>
              <option value="saab">Sort by: Price: High To Low</option>
            </select>
          </div>
        </div>
        <div className="Cards">
          {Collections.map((item) => (
            <Card
              id={item.product_id}
              image_url={item.image_url}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
