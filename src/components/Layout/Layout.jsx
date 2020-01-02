import React from 'react'

export default function Layout(props) {
    return (

        <section class="shop-area pt-150 pb-100">
            <div class="container">
                <div class="row">
                    {props.children}
                </div>
            </div>
        </section>
        

    )
}