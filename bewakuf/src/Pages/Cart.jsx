
import axios from "axios";
import {
MDBBtn,
MDBCard,
MDBCardBody,
MDBCardImage,
MDBCol,
MDBContainer,
MDBIcon,
MDBInput,
MDBRow,
MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Flex, Image, Spacer } from "@chakra-ui/react";
import { Authcontext } from "../Context/Authcontext";
export default function Cart() {
 const {cartdata} = useContext(Authcontext);
  const [quantity,setQuantity] = useState(1);
  console.log(cartdata);
return (
<section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol>
        <MDBCard>
          <MDBCardBody className="p-4">
            <MDBRow>
              <MDBCol lg="7">
              <Link to='/'>
                <MDBTypography tag="h5">
               
                    <MDBIcon fas icon="long-arrow-alt-left me-2" />L Continue
                    shopping
                    
                </MDBTypography>
                </Link>

                <hr />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have 1 item in your cart</p>
                  </div>
                  <div>
                    <p>
                      <span className="text-muted">Sort by:</span>
                      <a href="#!" className="text-body">
                        price
                        <MDBIcon fas icon="angle-down mt-1" />
                      </a>
                    </p>
                  </div>
                </div>

                <MDBCard className="mb-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <Image
                            src={cartdata.img}
                            alt="Shopping item" />
                        </div>
                        <div className="ms-3">
                          <MDBTypography tag="h5">
                           {cartdata.title}
                          </MDBTypography>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <MDBTypography tag="h5" className="fw-normal mb-0">
                            
                          </MDBTypography>
                        </div>
                        <div style={{ width: "80px" }}>
                          <MDBTypography tag="h5" className="mb-0">
                         <Flex> <button onClick={()=>setQuantity(quantity+1)}>+</button><Spacer> {quantity}</Spacer>  <button disabled={quantity===1} onClick={()=>(setQuantity(quantity-1))}>-</button></Flex>
                          </MDBTypography>
                        </div>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol lg="5">
                <MDBCard className="bg-primary text-white rounded-3">
                  <MDBCardBody>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBTypography tag="h5" className="mb-0">
                        Card details
                      </MDBTypography>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                    </div>

                    <p className="small">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <form className="mt-4">
                      <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                        placeholder="Cardholder's Name" contrast />

                      <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">₹ {cartdata.price*quantity}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">₹ {200}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">{cartdata.price*quantity + 200}</p>
                    </div>

                    <MDBBtn color="info" block size="lg">
                    <Link to='/'>
                      <div className="d-flex justify-content-between">
                        <span>{cartdata.price*quantity + 200}</span>
                        <span>
                        <Link to='/'/>  PAY AND ORDER
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                      </Link>
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
);
} 