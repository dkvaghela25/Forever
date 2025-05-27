import { useState } from "react";
import { useParams } from "react-router-dom";
import Image1 from "../HomePage/Rectangle 3608.png";
import Image2 from "../HomePage/Rectangle 3609.png";
import Image3 from "../HomePage/Rectangle 3619.png";
import Image4 from "../HomePage/p_img18.png";
import Image5 from "../HomePage/p_img19.png";

import StarFull from "./star_icon.svg";
import StarDull from "./star_dull_icon.svg";

import "./ProductPage.css";
import Card from "../../Components/CardComponent/Card";

function ProductPage() {
  const { product_id } = useParams();
  const [size, setSize] = useState<string | null>(null);

  let Collections = [
    {
      product_id: 1,
      image_url: Image1,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 2,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 3,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 4,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 5,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 6,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 7,
      image_url: Image4,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 8,
      image_url: Image5,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 9,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 10,
      image_url: Image4,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 11,
      image_url: Image1,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 12,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 13,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 14,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 15,
      image_url: Image4,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 16,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 17,
      image_url: Image5,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 18,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 19,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 20,
      image_url: Image5,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 21,
      image_url: Image4,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 22,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 23,
      image_url: Image5,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 24,
      image_url: Image1,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 25,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 26,
      image_url: Image5,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 27,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 28,
      image_url: Image4,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 29,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 30,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 31,
      image_url: Image4,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 32,
      image_url: Image5,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 33,
      image_url: Image1,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 34,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 35,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 36,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 37,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 38,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 39,
      image_url: Image4,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 40,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 41,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 42,
      image_url: Image1,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 43,
      image_url: Image3,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 159,
    },
    {
      product_id: 44,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
    {
      product_id: 45,
      image_url: Image1,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 46,
      image_url: Image5,
      title: "Women Round Neck Cotton Top",
      price: 149,
    },
    {
      product_id: 47,
      image_url: Image4,
      title: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },
    {
      product_id: 48,
      image_url: Image2,
      title: "Women Round Neck Cotton Top",
      price: 139,
    },
  ];

  return (
    <div>
      <div className="ProductPage">
        {Collections.filter(
          (item) => item.product_id === parseInt(product_id!)
        ).map((item) => (
          <div key={item.product_id} className="product-item">
            <div className="product-details">
              <div className="images">
                <div className="small-images">
                  <img src={item.image_url} alt="" />
                  <img src={item.image_url} alt="" />
                  <img src={item.image_url} alt="" />
                  <img src={item.image_url} alt="" />
                </div>
                <div className="large-image">
                  <img src={item.image_url} alt="" />
                </div>
              </div>
              <div className="details">
                <div className="title">{item.title}</div>
                <div className="star-review">
                  <div className="stars">
                    <img src={StarFull} alt="" />
                    <img src={StarFull} alt="" />
                    <img src={StarFull} alt="" />
                    <img src={StarFull} alt="" />
                    <img src={StarDull} alt="" />
                  </div>
                  <div className="total-reviews">(122)</div>
                </div>
                <div className="price">${item.price}</div>
                <p>
                  A lightweight, usually knitted, pullover shirt, close-fitting
                  and with a round neckline and short sleeves, worn as an
                  undershirt or outer garment.
                </p>
                <div className="size-selaction">
                  <div>Select Size</div>
                  <div className="sizes">
                    {["S", "M", "L", "XL", "XXL"].map((sz) => (
                      <div
                        key={sz}
                        className={`size${size === sz ? " selected" : ""}`}
                        onClick={() => setSize(sz)}
                      >
                        {sz}
                      </div>
                    ))}
                  </div>
                </div>
                <button>ADD TO CART</button>
                <hr />
                <div>100% Original product.</div>
                <div>Cash on delivery is available on this product.</div>
                <div>Easy return and exchange policy within 7 days.</div>
              </div>
            </div>
          </div>
        ))}

        <div className="product-description">
          <div className="description-header">
            <div>Description</div>
            <div>Reviews (122)</div>
          </div>
          <div className="description-content">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>

        <div className="latest-collections">
        <div className="heading">Related  &nbsp; <b>Products</b> <hr /></div>
        <div className="Cards">
          {Collections.slice(0,5).map((item) => (
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
    </div>
  );
}

export default ProductPage;
