import React, { useEffect, useReducer} from 'react';
const UseFarmHooks = () => {
    const INITIAL_STATE = {
        cards: [],
        cart:[],
        totalcost:0,
        isApiLoaded: false,
        organicCombo: [],
        organicVeg: [],
        veg: [],
        totalCards: [],
        search:[],
        filter:[],
        filtercards: [{
            "type": "Organic",
            "check": false
        },
        {
            "type": "Natural",
            "check": false
        }],
        price: ""
    }
    const reducer = (state, action) => {
        let { type, payload } = action
const {search,totalCards} = state
 switch (type) {
            case 'cartItem':{
                return{
                    ...state,
                ...payload
                }
            }
            case 'API_DATA': {

                return {
                    ...state,
                    ...payload
                }
            }
             case 'Search': {
const {target:{value}}=payload
                return {
                    ...state,
                    search:value
                }
            }
            case 'CARD_DETAILS': {
                return {
                    ...state,
                    ...payload

                }
            }
           
            case 'onSearch': {
                 let value=search.toLowerCase()
                console.log(totalCards.filter(x => 
                   x.item.includes(value)
                ) )
              
              console.log( totalCards[0].item.includes(value))
                return {
                    ...state,
                    filter:totalCards.filter(x => 
                        x.item.includes(value)
                     )

                }
            }
           
            default: {
                return {
                    state
                }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    let { cards,filtercards,veg, totalCards, cart,totalcost } = state;
    useEffect(() => {

        fetch('https://jsonblob.com/api/776605ee-b48b-11ea-a2fd-c7307f25ae0a').then(response => response.json().then(json => {
            dispatch({
                type: 'API_DATA',
                payload: {
                    cards: [...json], totalCards: [...json], isApiLoaded: true,
                    organicCombo: [...json.filter(a => a.itemName == "Small Combo" || a.itemName == "Medium Combo" || a.itemName == "Large Combo")],
                    organicVeg: [...json.filter(a => a.itemName == "Tamoto" || a.itemName == "Beans" || a.itemName == "Mirchi")]
                }
            })
        }))
    }, [])
    useEffect(()=>{
        if(cart.length>0){totalcost=cart.reduce((b,a)=>b+(Number(a.Price)*Number(a.qnt)),0)}

console.log(totalcost)
dispatch({type:"CARD_DETAILS",payload:{totalcost:totalcost}})
    },[cart])
    
   const handleByType = (e,i) => {
    filtercards[i].check = e.target.checked
    veg = totalCards.filter(a => a.vegtype == e.target.value) 
console.log(filtercards)
    dispatch({
        type: "CARD_DETAILS",
        payload:{filtercards:[...filtercards],cards:[...veg]}
    })

}
const handleInput = ({target}) =>{
    dispatch ({type : "Search",payload: {target} })
} 
const onSearch = () => {
    dispatch ({type: "onSearch"})
}



const handleAddToCart = (i,card) => {
    let x=[];
    x.push(card)
  cart=[...cart, ...x]
    console.log(cart)
  dispatch ({type: "cartItem",payload:{cart:[...cart]}})
  console.log(state)
}

 return {
        state,
     handleByType,
     handleInput,
     onSearch,
     handleAddToCart
    }
}
export default UseFarmHooks;









