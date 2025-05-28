import { useState } from "react";
import { useParams } from "react-router-dom";
import StarFull from "./star_icon.svg";
import StarDull from "./star_dull_icon.svg";
import Collections from "../../assets/Collections/Collections";
import { useContext } from 'react';
import { CartCountContext } from '../../Context/CartCountContext';
import { CartContext } from '../../Context/CartContext';
import ToastHelper from '../../helper/toastHelper'

import "./ProductPage.css";
import Card from "../../Components/CardComponent/Card";

function ProductPage() {

  const { product_id } = useParams();
  const [size, setSize] = useState<string | null>(null);
  const { setCartcount } = useContext(CartCountContext);
  const { setCart } = useContext(CartContext);

  interface Item {
    id: number;
    image_url: string;
    title: string;
    price: number;
    size: string;
    quantity: number;
  }


  const addToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
    setCartcount((prevCount) => prevCount + 1);
    setSize(null);
    ToastHelper.success("Item added to cart successfully!");
  }

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
                <button onClick={() => {
                  if (size) {
                    addToCart({
                      id: item.product_id,
                      image_url: item.image_url,
                      title: item.title,
                      price: item.price,
                      size: size,
                      quantity: 1
                    });
                  } else {
                    ToastHelper.error("Please select a size before adding to cart.");
                  }
                }}>ADD TO CART</button>
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
            {Collections.slice(0, 5).map((item) => (
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
