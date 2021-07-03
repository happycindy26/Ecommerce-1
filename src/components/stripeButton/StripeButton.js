import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J94OxEoIsc9n2nUo5wgMIjQqN1TtIqpsuHppYqPFOcuSrpW07DGRWtcrSHy9vZ3G5tGABq69qzAeKedIwEHe4LP00nGC4efGw';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Skin Products'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;