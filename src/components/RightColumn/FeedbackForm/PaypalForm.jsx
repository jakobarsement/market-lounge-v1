import PaypalExpressBtn from "react-paypal-express-checkout";

export const PaypalForm = ({ amount }) => {
  const onSuccess = (payment) => {
    console.log("The payment was succeeded!", payment);
  };

  const onCancel = (data) => {
    console.log("The payment was cancelled!", data);
  };

  const onError = (err) => {
    console.log("Error!", err);
  };

  const currency = "USD";

  const client = {
    sandbox: process.env.REACT_APP_PAYPAL_APP_ID,
    production: process.env.REACT_APP_PAYPAL_PRODUCTION_APP_ID,
  };

  return (
    <PaypalExpressBtn
      style={{
        shape: "rect",
        color: "blue",
        layout: "horizontal",
        label: "paypal",
        fundingicons: true,
      }}
      env={process.env.REACT_APP_PROD === "false" ? "sandbox" : "production"}
      client={client}
      currency={currency}
      total={amount}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
};
