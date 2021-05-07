const initState={
    products:[
        {id:1, name:'man Shirt for summer', image:'1.jpg',price:20,
         discount:2, discountPrice:20-2/100*20, quantity:1, desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:2, name:'woman jacket for summer', image:'2.jpg',price:30,
        discount:5, discountPrice:30-5/100*30,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:3, name:'man trouser for all seasons', image:'3.jpg',price:15,
        discount:3, discountPrice:15-3/100*15,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:4, name:'shoes for all seasons', image:'4.jpg',price:50,
        discount:4, discountPrice:50-4/100*50,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:5, name:'female suit for summer', image:'5.jpg',price:25,
        discount:2, discountPrice:25-2/100*25 ,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:6, name:'male roughed jeans', image:'6.jpg',price:60,
        discount:6, discountPrice:60-6/100*60,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:7, name:'male trouser for all seasons', image:'7.jpg',price:35,
        discount:2, discountPrice:35-2/100*35,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:8, name:'male winter jacket', image:'8.jpg',price:80,
        discount:3, discountPrice:80-3/100*80,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:9, name:'female jacket for all seasons', image:'9.jpg',price:95,
        discount:4, discountPrice:95-4/100*95,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
        {id:10, name:'male track shirt', image:'10.jpg',price:120,
        discount:3, discountPrice:120-3/100*120,quantity:1,desc:"Gear up in style with this Men's Half Sleeve T-Shirt. Style this alpha green t-shirt with a pair of shorts and classic derby boots and slay an army-chic."
        },
    ],
    product:{}
}

const ProductsReducer=(state=initState, action)=>{
        switch(action.type){
            case "PRODUCT":
                return {...state, product:state.products.find(product=>product.id===parseInt(action.id))}
            default:
            return state;
        }
}
export default ProductsReducer;