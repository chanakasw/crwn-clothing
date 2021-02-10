import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51IJAYoFLR3u41wAKsXeUkjS7gnnhELBK9Gq1G5joKcYADvxoMyJVD1V0wxfRXCGKAgvMy9J3SvcWBPcx1wUGJSP100LdDaVkJC'

  const handleToken = (token) => {
    console.log(token)
    alert('Payment successfull')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={handleToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
