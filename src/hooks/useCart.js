import {useState} from 'react';

const initState =  []

export default () => {

    const [cart, setCart] = useState(initState)

    const addProduct = p => {

        const before = cart.filter(item => item.pno === p.pno)[0]

        if (before) {
            setTimeout(() => {
                before.qty = before.qty + 1
                setCart([...cart])
                return
            }, 1000)

        } else {
            setCart([...cart, {...p, qty: 1}])
        }
    }

    const removeProduct = (pno) => {
        console.log("removeProduct: " + pno)

        const idx = cart.findIndex(item => item.pno === pno)
        console.log("idx:" + idx)

        if (idx > -1 ){
            cart.splice(idx,1)
            setCart([...cart])
        }
    }

    const getTotal = () => {

        let sum = 0

        for (let i = 0; i < cart.length; i ++) {
            const item = cart[i]
            sum += item.price * item.qty
        }

        return sum
    }

    const clearCart = () =>{
        setCart(initState)
    }

    const changeQty = (pno, amount) => {
        const target = cart.filter(item => item.pno === pno)[0]
        if (target){
            target.qty = target.qty + amount

            if (target.qty <=0) {
                removeProduct(pno)
                return
            }
        }

        setCart([...cart])

    }
    return (
        {cart, addProduct, removeProduct, getTotal, clearCart, changeQty}
    )
}

