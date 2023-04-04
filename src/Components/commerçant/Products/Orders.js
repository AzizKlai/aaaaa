import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import styles from "./style.module.css";
import React, {useEffect, useState} from "react";
import products from '../../../products.json';

export default function Orders() {
  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        commande list       
      </h4>
      <MDBRow>
        {products.map((product) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4">
              <MDBCard key={product.id} className={styles.mdb_card}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image  "
                >
                  <MDBCardImage
                    src={product.imageURL}
                    fluid
                    className="w-100"
                    style={{ height: "250px", width: "450px" }}
                  />
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">{product.name}</h5>
                  <p>{product.description}</p>
                  <h6 className="mb-3">{product.price} DT</h6>
                  <button
                    className="btn  text-blue mx-2"
                    id="OrderPage"
                    style={{ borderColor:"blue",
                      display: "inline-block",
                    }}
                  >
                    <i className="" aria-hidden="true"> confirm</i>
                  </button>
                  <button
                    className="btn  text-purple mx-2"
                    id="OrderPage"
                    style={{ borderColor:"purple",
                      display:"inline-block",
                    }}
                  >
                    <i className="" aria-hidden="true"> cancel</i>
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
