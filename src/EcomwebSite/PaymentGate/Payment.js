import React from "react";
import GooglePayButton from "@google-pay/button-react";
import { Link } from "react-router-dom";
import { useMydata } from "../../EcomContext/EcomContext";
const Payment = ({id}) => {
  const { handleplaceOrder}=useMydata()
  //console.log(id);
  return (
    <div className="">
      <p>choose one of the payment option</p>
      <div className="payinggrid">
      <div>
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
          className="paybutton"/>
      </div>
      <div className="paybutton">
        <Link
          to="/orders"
          onClick={() => handleplaceOrder(id)}
          className="button"
        >
          CASH AND DELIVERY
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Payment;
