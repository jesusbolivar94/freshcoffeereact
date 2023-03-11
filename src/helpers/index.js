export const formatMoney = price => {
    return price.toLocaleString('pt-PT', {
        style: 'currency',
        currency: 'EUR'
    })
}