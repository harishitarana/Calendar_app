import React from "react";
import '../Header/header.css';
import Meet from '../Header/Meet.png';

function Header() {
    return (
        <>
            <header class="header">
                <img src={Meet} alt="our main logo" class="logo" />

                <nav class="navbar">
                    <ul class="navbar-lists">
                        <li><a href="/home.html" class="navbar-link home-link">Home</a></li>
                        <li>
                            <a href="/about.html" class="navbar-link about-link">About</a>
                        </li>
                        <li>
                            <a class="navbar-link service-link" href="/service.html"
                            >Services</a>
                        </li>
                        <li>
                            <a class="navbar-link portfolio-link" href="#portfolio"
                            >Meetings</a>
                        </li>
                        <li>
                            <a class="navbar-link contact-link" href="/contact.html">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div class="mobile-navbar-btn">
                    <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
                    <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
                </div>
            </header>

        </>
    )
}

export default Header;