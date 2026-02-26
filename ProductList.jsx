import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores.", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114414_1280.jpg", description: "Adds humidity to the air.", cost: "$20" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283030_1280.jpg", description: "Purifies air and heals skin.", cost: "$14" },
                { name: "Bamboo Palm", image: "https://cdn.pixabay.com/photo/2020/02/08/11/36/palm-4829838_1280.jpg", description: "Effective at removing benzene.", cost: "$25" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/24/19/57/lavender-2535997_1280.jpg", description: "Calming scent, used in aromatherapy.", cost: "$20" },
                { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/08/07/14/04/jasmine-2604100_1280.jpg", description: "Sweet fragrance, blooms at night.", cost: "$18" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent, used in cooking.", cost: "$15" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/20/mint-1126282_1280.jpg", description: "Refreshing aroma, used in tea.", cost: "$12" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Citrusy scent, relieves stress.", cost: "$14" },
                { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Intense fragrance, beautiful blooms.", cost: "$22" }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Thrives in low light.", cost: "$25" },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/pothos-3816941_1280.jpg", description: "Easy to grow and propagate.", cost: "$10" },
                { name: "Succulent", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", description: "Requires minimal watering.", cost: "$8" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/15/42/aspidistra-2071721_1280.jpg", description: "Extremely hardy foliage plant.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Tough and attractive leaves.", cost: "$18" },
                { name: "Philodendron", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/pothos-3816941_1280.jpg", description: "Classic indoor climbing plant.", cost: "$15" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index} className="category-section">
                    <h1 className="category-title">{category.category}</h1>
                    <div className="plant-list">
                        {category.plants.map((plant, plantIndex) => (
                            <div className="plant-card" key={plantIndex}>
                                <img className="plant-image" src={plant.image} alt={plant.name} />
                                <div className="plant-name">{plant.name}</div>
                                <div className="plant-description">{plant.description}</div>
                                <div className="plant-cost">{plant.cost}</div>
                                <button 
                                    className="product-button"
                                    disabled={cartItems.some(item => item.name === plant.name)}
                                    onClick={() => handleAddToCart(plant)}>
                                    {cartItems.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
