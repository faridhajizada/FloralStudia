import { useGetAllProductsQuery } from "../../../../../redux/rtkQuery/productApi";
import CustomCard from "../../../../../components/Card";

import "./index.scss";
import { useState } from "react";

const PopularProducts = () => {
  const { data: products } = useGetAllProductsQuery();
  const [user, setUser] = useState(null);

  return (
    <div className="PopularProducts">
      <div className="PopularProductsHome">
        <p className="text-center mt-4 mb-4" style={{ color: "green" }}>
          Devoted to wonderful beauty
        </p>
        <h2 className="text-center mt-4 mb-4" style={{ color: "green" }}>
          Our Portfolio
        </h2>
      </div>
      <div className="customContainer  col-6">
        {products
          ?.map((product) => {
            let showLeftTop = product.status === "New";
            showLeftTop = Boolean(product.discount > 0);
            return (
              <CustomCard
                key={product.id + 2}
                hoverable
                style={{ width: 240 }}
                cover={<img alt={product.title} src={product.image} />}
                title={product.title}
                // price={product.price}
                discount={product.discount}
                showLeftTop={showLeftTop}
                productId={product.id}
                showBasket={true}
                user={user}
                setUser={setUser}
              />
            );
          })
          .slice(0, 6)}
      </div>

      <div className="PopularProductsHome" style={{ margin: "100px 0 0 0 " }}>
        <p className="text-center mt-4 mb-4" style={{ color: "green" }}>
          Devoted to wonderful beauty
        </p>
        <h2 className="text-center mt-4 mb-4" style={{ color: "green" }}>
          Flowers Pricing
        </h2>
      </div>
      <div className="customContainer  col-6">
        {products
          ?.map((product) => {
            let showLeftTop = product.status === "New";
            showLeftTop = Boolean(product.discount > 0);
            return (
              <CustomCard
                key={product.id + 2}
                hoverable
                style={{ width: 240 }}
                cover={<img alt={product.title} src={product.image} />}
                title={product.title}
                price={product.price}
                discount={product.discount}
                showLeftTop={showLeftTop}
                productId={product.id}
                showBasket={true}
                user={user}
                setUser={setUser}
              />
            );
          })
          .slice(0, 6)}
      </div>

      <div className="PopularProductsHome" style={{ margin: "100px 0 0 0 " }}>
        <p className="text-center mt-4 mb-4" style={{ color: "green" }}>
          {" "}
          Devoted to wonderful beauty
        </p>
        <h2 className="text-center mt-4 mb-4" style={{ color: "green" }}>
          Events Pricing
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className="card"
            style={{
              backgroundColor: " rgb(224 212 212)",
              padding: "60px 30px",
            }}
          >
            <p
              className="text-center"
              style={{ fontSize: "30px", color: "green" }}
            >
              $16 per table
            </p>
            <p
              className="text-center"
              style={{ fontSize: "25px", color: "green" }}
            >
              Birthday Events
            </p>
            <p
              style={{ fontSize: "20px", color: "green" }}
              className="text-center"
            >
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <div className="text-center">
              <button
                style={{
                  backgroundColor: "#d8e3d5 ",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
            style={{
              backgroundColor: " rgb(224 212 212)",
              padding: "60px 30px",
            }}
          >
            <p
              className="text-center"
              style={{ fontSize: "30px", color: "green" }}
            >
              $16 per table
            </p>
            <p
              className="text-center"
              style={{ fontSize: "25px", color: "green" }}
            >
              Birthday Events
            </p>
            <p
              style={{ fontSize: "20px", color: "green" }}
              className="text-center"
            >
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <div className="text-center">
              <button
                style={{
                  backgroundColor: "#d8e3d5 ",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card"
            style={{
              backgroundColor: " rgb(224 212 212)",
              padding: "60px 30px",
            }}
          >
            <p
              className="text-center"
              style={{ fontSize: "30px", color: "green" }}
            >
              $16 per table
            </p>
            <p
              className="text-center"
              style={{ fontSize: "25px", color: "green" }}
            >
              Birthday Events
            </p>
            <p
              style={{ fontSize: "20px", color: "green" }}
              className="text-center"
            >
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <div className="text-center">
              <button
                style={{
                  backgroundColor: "#d8e3d5 ",
                  padding: "10px 20px",
                  border: "none",
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
