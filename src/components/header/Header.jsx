import React from "react";

function Header() {
    return(
        <section className="header">
            <section className="header-top">
                <section> className="header-top_logo"
                    <a href="/" className="header-logo">Size Matcher</a>
                </section>
                <section className="header-top_navbar">

                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom_phone">
                    999-999-9999
                </section>
                <section className="header-bottom_email">
                    shop.info@gmail.com
                </section>
            </section>
        </section>
    )
}
export default Header;