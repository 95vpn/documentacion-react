import Reacr from 'react';

export function ShoppingList() {

    const products = [
        {title: 'Cabbage', isFruit: false, id: 1},
        {title: 'Garlic', isFruit: false, id: 2},
        {title: 'Apple', isFruit: true, id: 3}
    ]

    return (
        <div>
            <h1>list</h1>
            {
                products.map(product => 
                    <li key={product.id}
                    style={{color: product.isFruit ? 'magenta' : 'darkgoldenrod'}}>{product.title}</li>
                )
            }

        </div>
    )
}