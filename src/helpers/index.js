export const formatearDinero = precio => {
  return precio.toLocaleString('en-us', {
      style: 'currency',
      currency: 'USD'
  })
}