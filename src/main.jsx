import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search, UserRound, ShoppingBag, Heart, ArrowRight, Truck,
  RotateCcw, Sparkles, ShieldCheck, Instagram, Facebook, Youtube,
  Menu, X, ChevronDown
} from "lucide-react";
import "./styles.css";

const categories = [
  {
    name: "Dresses",
    subtitle: "Shop Now",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Tops",
    subtitle: "Shop Now",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Bottoms",
    subtitle: "Shop Now",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Essentials",
    subtitle: "Shop Now",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85"
  }
];

const products = [
  {
    name: "Sage Garden Dress",
    price: "$58.00",
    reviews: "1,248",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
    badge: "Best Seller",
    dots: ["#355c4a", "#c9a39a", "#efe7d9"]
  },
  {
    name: "Cloudline Blouse",
    price: "$42.00",
    reviews: "963",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=85",
    dots: ["#f7f4ef", "#9eb0c6", "#20242b"]
  },
  {
    name: "Wide-Leg Linen",
    price: "$49.00",
    reviews: "742",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=85",
    dots: ["#e8ddcb", "#6d725e", "#292929"]
  },
  {
    name: "Noir Knit Dress",
    price: "$55.00",
    reviews: "1,106",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=85",
    dots: ["#1e1e22", "#6d3f49", "#eee9e4"]
  }
];

function App() {
  const [cart, setCart] = useState(0);
  const [liked, setLiked] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleLike = (index) => {
    setLiked((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thanks! ${email} is now on the Aurelia list.`);
    setEmail("");
  };

  return (
    <div className="site">
      <div className="shipping-bar">
        <span><Truck size={14}/> Free shipping on orders over $75</span>
        <span className="bar-separator">|</span>
        <span>Easy 30-Day Returns</span>
      </div>

      <header className="header">
        <a className="logo" href="#top">
          <span>Aurelia</span>
          <small>WEAR YOUR STORY</small>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          {["New In", "Women", "Dresses", "Tops", "Bottoms", "Sale"].map((item, i) => (
            <a key={item} href={i === 0 ? "#new" : "#categories"} onClick={() => setMenuOpen(false)}>
              {item}
              {i > 0 && i < 5 && <ChevronDown size={12}/>}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button aria-label="Search"><Search size={20}/></button>
          <button aria-label="Account"><UserRound size={20}/></button>
          <button className="cart-btn" aria-label="Cart">
            <ShoppingBag size={21}/>
            {cart > 0 && <b>{cart}</b>}
          </button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="new">
          <div className="hero-copy">
            <p className="eyebrow">MODERN STYLE, NATURALLY</p>
            <h1>Dress Well.<br/><em>Live Beautifully.</em></h1>
            <p className="hero-text">
              Elevated everyday pieces designed for confident women
              and every version of you.
            </p>
            <a className="dark-btn" href="#products">Explore New Arrivals <ArrowRight size={17}/></a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1500&q=90"
              alt="Woman wearing a contemporary fashion outfit"
            />
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-heading">
            <span></span><h2>Shop by Category</h2><span></span>
            <p>Find your next favorite look</p>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <a className="category-card" href="#products" key={cat.name}>
                <img src={cat.image} alt={cat.name}/>
                <div>
                  <h3>{cat.name}</h3>
                  <span>{cat.subtitle} <ArrowRight size={14}/></span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="products-title">
            <div className="section-heading left">
              <span></span><h2>New Favorites</h2><span></span>
              <p>Made for your everyday</p>
            </div>
            <a href="#products">View All <ArrowRight size={15}/></a>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name}/>
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <button className="heart" onClick={() => toggleLike(index)} aria-label="Favorite">
                    <Heart size={18} fill={liked.includes(index) ? "currentColor" : "none"}/>
                  </button>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="rating">★★★★★ <span>({product.reviews})</span></div>
                  <strong>{product.price}</strong>
                  <div className="dots">
                    {product.dots.map((dot) => <i key={dot} style={{background: dot}}></i>)}
                  </div>
                  <button className="add-btn" onClick={() => setCart(cart + 1)}>
                    <ShoppingBag size={16}/> Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits">
          <h2>Why Women Choose Aurelia</h2>
          <div className="benefit-grid">
            <div><Sparkles/><h3>Thoughtful Quality</h3><p>Made to be worn, loved and lived in.</p></div>
            <div><Heart/><h3>Effortless Style</h3><p>Timeless silhouettes with a modern feel.</p></div>
            <div><Truck/><h3>Fast & Free Shipping</h3><p>Complimentary shipping over $75.</p></div>
            <div><RotateCcw/><h3>Easy Returns</h3><p>30 days to make it right.</p></div>
          </div>
        </section>

        <section className="story-banner">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1300&q=90" alt="Fashion collection"/>
          </div>
          <div className="story-copy">
            <p className="eyebrow">STYLE FOR EVERY CHAPTER</p>
            <h2>Clothes for the<br/><em>Life You Love.</em></h2>
            <p>From slow mornings to late dinners — pieces that move with you, wherever the day takes you.</p>
            <a className="dark-btn" href="#categories">Discover the Collection <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="newsletter">
          <div>
            <h2>Join the Aurelia Circle</h2>
            <p>New arrivals, styling notes and private offers — straight to your inbox.</p>
          </div>
          <form onSubmit={subscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="logo" href="#top"><span>Aurelia</span><small>WEAR YOUR STORY</small></a>
          <div className="footer-links">
            <a href="#top">About Us</a><a href="#top">Our Story</a><a href="#top">Size Guide</a>
            <a href="#top">FAQs</a><a href="#top">Contact</a>
          </div>
          <div className="socials">
            <Instagram size={17}/><Facebook size={17}/><Youtube size={17}/>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Aurelia. All rights reserved.</span>
          <span><ShieldCheck size={14}/> Secure checkout</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
