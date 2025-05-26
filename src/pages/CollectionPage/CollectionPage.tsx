import { useState } from "react";
import "./CollectionPage.css";
import Image1 from '../HomePage/Rectangle 3608.png';
import Image2 from '../HomePage/Rectangle 3609.png';
import Image3 from '../HomePage/Rectangle 3619.png';
import Image4 from '../HomePage/p_img18.png'
import Image5 from '../HomePage/p_img19.png'
import Card from "../../Components/CardComponent/Card";

function CollectionPage() {
  const [showFilters, setShowFilters] = useState(false);

  let Collections = [
    {image_url: Image1, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image4, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image5, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image4, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image1, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image4, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image5, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image5, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image4, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image5, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image1, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image5, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image4, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image4, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image5, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image1, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image4, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image1, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image3, title: 'Men Round Neck Pure Cotton T-shirt', price: 159},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
    {image_url: Image1, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image5, title: 'Women Round Neck Cotton Top', price: 149},
    {image_url: Image4, title: 'Men Round Neck Pure Cotton T-shirt', price: 149},
    {image_url: Image2, title: 'Women Round Neck Cotton Top', price: 139},
  ]

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
            <Card image_url={item.image_url} title={item.title} price={item.price}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
