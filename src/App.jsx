import React, { useState, useEffect } from "react";
import "./App.css";

const CATALOG_DATA = {
  collares: {
    title: "COLLARES",
    items: [
      { id: "collar-amatista", name: "COLLAR INICIAL", price: 70000, img: "./img/41ffd429-c561-4c48-9f90-622ea53c8645.jpg", detailId: "collar-amatista-gota" },
      { id: "collar-cuarzo", name: "COLLAR CUARZO ROSA", price: 55000, img: "./img/collarucarzo.png", detailId: "collar-cuarzo-rosa" },
      { id: "collar-perla", name: "COLLAR PERLA", price: 60000, img: "./img/collarperla.png", detailId: "collar-perla-clasica" },
      { id: "collar-largo-1", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "collar-largo-2", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "collar-largo-3", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
    ],
  },
  accesorios: {
    title: "ACCESORIOS",
    items: [
      { id: "acc-amatista", name: "COLLAR AMATISTA", price: 45000, img: "./img/collaramatista.png", detailId: "collar-amatista-gota" },
      { id: "acc-cuarzo", name: "COLLAR CUARZO ROSA", price: 55000, img: "./img/collarucarzo.png", detailId: "collar-cuarzo-rosa" },
      { id: "acc-perla", name: "COLLAR PERLA", price: 60000, img: "./img/collarperla.png", detailId: "collar-perla-clasica" },
      { id: "acc-largo-1", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "acc-largo-2", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "acc-largo-3", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
    ],
  },
  pulseras: {
    title: "PULSERAS",
    items: [
      { id: "pulsera-oro-1", name: "PULSERA DE ORO", price: 45000, img: "./img/ collarperla.png", detailId: "pulsera-oro" },
      { id: "pulsera-oro-2", name: "PULSERA DE ORO", price: 55000, img: "./img/collaramatista.png", detailId: "pulsera-oro" },
      { id: "pulsera-perla", name: "COLLAR PERLA", price: 60000, img: "./img/collarperla.png", detailId: "collar-perla-clasica" },
      { id: "pulsera-largo-1", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "pulsera-largo-2", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "pulsera-largo-3", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
    ],
  },
  tinylovers: {
    title: "BOLSOS / TINY LOVERS",
    items: [
      { id: "bolso-1", name: "BOLSO TEJIDO A MANO", price: 45000, img: "./img/WhatsApp Image 2026-04-02 at 13.00.55.jpeg", detailId: "bolso-tejido" },
      { id: "bolso-2", name: "BOLSO TEJIDO A MANO", price: 55000, img: "./img/WhatsApp Image 2026-04-02 at 13.00.55 (1).jpeg", detailId: "bolso-tejido" },
      { id: "bolso-perla", name: "COLLAR PERLA", price: 60000, img: "./img/collarperla.png", detailId: "collar-perla-clasica" },
      { id: "bolso-largo-1", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "bolso-largo-2", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
      { id: "bolso-largo-3", name: "COLLAR LARGO", price: 75000, img: "./img/collarlargo.png", detailId: "collar-amatista-gota" },
    ],
  },
};

const PRODUCTS_DETAILS = {
  "collar-amatista-gota": {
    id: "collar-amatista-gota",
    title: "Collar Gota de Amatista",
    price: 75000,
    description:
      "Este elegante collar presenta una hermosa piedra natural de Amatista en un pulido corte de lágrima. El vibrante color morado hace que cada colgante sea único.",
    hasSizeSelector: true,
    sizeLabel: "Largo de Cadena:",
    sizes: ["40 cm", "50 cm"],
    mainImg: "./img/WhatsApp Image 2026-04-02 at 13.00.55.jpeg",
    thumbnails: [
      "./img/collaramatista.png",
      "./img/collarucarzo.png",
      "./img/collarperla.png",
    ],
  },
  "collar-cuarzo-rosa": {
    id: "collar-cuarzo-rosa",
    title: "Collar Cuarzo Rosa",
    price: 55000,
    description:
      "Pieza artesanal forjada a mano con piedra natural de Cuarzo Rosa. Ideal para aportar sutileza y elegancia atemporal.",
    hasSizeSelector: true,
    sizeLabel: "Largo de Cadena:",
    sizes: ["40 cm", "50 cm"],
    mainImg: "./img/collarucarzo.png",
    thumbnails: ["./img/collarucarzo.png", "./img/collaramatista.png"],
  },
  "collar-perla-clasica": {
    id: "collar-perla-clasica",
    title: "Collar Perla Clásica",
    price: 60000,
    description:
      "Un clásico reinventado. Perlas seleccionadas con engarce artesanal que resaltan la pureza y luminosidad en cada detalle.",
    hasSizeSelector: true,
    sizeLabel: "Largo de Cadena:",
    sizes: ["40 cm", "50 cm"],
    mainImg: "./img/collarperla.png",
    thumbnails: ["./img/collarperla.png", "./img/collarlargo.png"],
  },
  "pulsera-oro": {
    id: "pulsera-oro",
    title: "Pulsera de Oro Artesanal",
    price: 55000,
    description:
      "Pulsera delicada forjada en metales nobles con terminación brillante. Diseñada para acompañarte todos los días con un toque distinguido.",
    hasSizeSelector: true,
    sizeLabel: "Talle de Pulsera:",
    sizes: ["16 cm", "18 cm", "20 cm"],
    mainImg: "./img/collaramatista.png",
    thumbnails: [
      "./img/collaramatista.png",
      "./img/collarperla.png",
    ],
  },
  "bolso-tejido": {
    id: "bolso-tejido",
    title: "Bolso Tejido a Mano",
    price: 75000,
    description:
      "Bolso artesanal tejido íntegramente a mano con fibras seleccionadas. Un diseño espacioso, resistente y con la impronta natural de AZUCENA.",
    hasSizeSelector: false,
    mainImg: "./img/WhatsApp Image 2026-04-02 at 13.00.55.jpeg",
    thumbnails: [
      "./img/WhatsApp Image 2026-04-02 at 13.00.55.jpeg",
      "./img/WhatsApp Image 2026-04-02 at 13.00.55 (1).jpeg",
    ],
  },
};

const formatARS = (amount) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(amount);

const handleImgError = (e) => {
  e.target.onerror = null;
  e.target.src = "./img/collaramatista.png";
};

export default function App() {
  const [route, setRoute] = useState({ page: "home", param: null });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("azucenaCart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("azucenaCart", JSON.stringify(cart));
  }, [cart]);

  const navigate = (page, param = null) => {
    setRoute({ page, param });
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product, selectedSize = null) => {
    const cartItemId = selectedSize ? `${product.id}-${selectedSize}` : product.id;
    const itemName = selectedSize ? `${product.title} (${selectedSize})` : product.title;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === cartItemId);
      if (existing) {
        return prevCart.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          id: cartItemId,
          name: itemName,
          price: product.price,
          quantity: 1,
          img: product.mainImg,
        },
      ];
    });

    showToast(`¡${itemName} añadido al carrito!`);
  };

  const changeQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-wrapper">
      {toastMessage && <div className="toast-notification">{toastMessage}</div>}

      <header className="header">
        <nav className="navbar">
          <div className="logo" onClick={() => navigate("home")}>
            <img src="./img/logo.png" alt="AZUCENA" />
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? "nav-active" : ""}`}>
            <li>
              <button onClick={() => navigate("coleccion")}>Colección</button>
            </li>
            <li>
              <button onClick={() => navigate("sobre")}>Sobre Nosotros</button>
            </li>
            <li>
              <button onClick={() => navigate("contacto")}>Contacto</button>
            </li>
          </ul>

          <div className="header-actions">
            <div className="cart-icon" onClick={() => navigate("carrito")}>
              <span role="img" aria-label="carrito">🛒</span>
              <span className="cart-count">{totalItems}</span>
            </div>

            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      <div className="main-content">
        {route.page === "home" && <HomeView navigate={navigate} />}
        {route.page === "coleccion" && <CollectionView navigate={navigate} />}
        {route.page === "categoria" && (
          <CategoryView categoryKey={route.param} navigate={navigate} />
        )}
        {route.page === "producto" && (
          <ProductDetailView
            productId={route.param}
            addToCart={addToCart}
            navigate={navigate}
          />
        )}
        {route.page === "sobre" && <AboutView />}
        {route.page === "contacto" && <ContactView showToast={showToast} />}
        {route.page === "carrito" && (
          <CartView
            cart={cart}
            changeQuantity={changeQuantity}
            removeItem={removeItem}
            navigate={navigate}
            showToast={showToast}
          />
        )}
      </div>

      <footer className="footer">
        <p>© 2025 AZUCENA — Hecho con ❤️</p>
      </footer>
    </div>
  );
}

function HomeView({ navigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h2>NUESTRA HISTORIA</h2>
          <h1>AZUCENA</h1>
          <p>
            Cada pieza nace de la pasión por la artesanía y la belleza de lo
            natural. Diseñamos joyas y accesorios atemporales forjados a mano
            para acompañarte toda la vida.
          </p>
          <button className="btn" onClick={() => navigate("coleccion")}>
            DESCUBRÍ NUESTRA COLECCIÓN
          </button>
        </div>
        <div className="hero-image">
          <img src="./img/nos.png.png" alt="Fachada Azucena" onError={handleImgError} />
        </div>
      </section>

      <CategoryGrid navigate={navigate} isCollectionPage={false} />
    </>
  );
}

function CollectionView({ navigate }) {
  return (
    <main className="collection-page">
      <h1 className="collection-title">TODA NUESTRA COLECCIÓN</h1>
      <p className="collection-intro">
        Descubrí las líneas atemporales y las piezas artesanales que definen el
        espíritu de AZUCENA.
      </p>
      <CategoryGrid navigate={navigate} isCollectionPage={true} />
    </main>
  );
}

function CategoryGrid({ navigate, isCollectionPage }) {
  const categories = [
    {
      key: "collarespiedra",
      label: "Collares de piedra",
      className: "item-1",
      bg: "./img/collaramatista.png",
    },
    {
      key: "accesorios",
      label: "Accesorios",
      className: "item-2",
      bg: "./img/collarucarzo.png",
    },
    {
      key: "pulseras",
      label: "Pulseras",
      className: "item-3",
      bg: "./img/collarperla.png",
    },
    {
      key: "tinylovers",
      label: isCollectionPage ? "Tiny Lovers" : "BOLSOS",
      className: "item-4",
      bg: "./img/WhatsApp Image 2026-04-02 at 13.00.55.jpeg",
    },
  ];

  return (
    <div className={`grid ${isCollectionPage ? "wide-grid" : ""}`}>
      {categories.map((cat) => (
        <div key={cat.key} className={cat.className}>
          <a
            href={`#${cat.key}`}
            style={{ backgroundImage: `url("${cat.bg}")` }}
            onClick={(e) => {
              e.preventDefault();
              navigate("categoria", cat.key);
            }}
          >
            <h3>{cat.label}</h3>
          </a>
        </div>
      ))}
    </div>
  );
}

function CategoryView({ categoryKey, navigate }) {
  const category = CATALOG_DATA[categoryKey] || CATALOG_DATA.collarespiedra;

  return (
    <main className="catalogue-page">
      <h1 className="catalogue-title">{category.title}</h1>
      <section className="products-grid">
        {category.items.map((item) => (
          <a
            key={item.id}
            href={`#${item.detailId}`}
            className="product-item"
            onClick={(e) => {
              e.preventDefault();
              navigate("producto", item.detailId);
            }}
          >
            <div className="product-image-container">
              <img src={item.img} alt={item.name} onError={handleImgError} />
            </div>
            <h4 className="product-name">{item.name}</h4>
            <p className="product-price">{formatARS(item.price)}</p>
          </a>
        ))}
      </section>
    </main>
  );
}

function ProductDetailView({ productId, addToCart, navigate }) {
  const product =
    PRODUCTS_DETAILS[productId] || PRODUCTS_DETAILS["collar-amatista-gota"];
  const [activeImage, setActiveImage] = useState(product.mainImg);
  const [selectedSize, setSelectedSize] = useState(
    product.hasSizeSelector ? product.sizes[0] : null
  );
  const [shippingOpen, setShippingOpen] = useState(false);

  useEffect(() => {
    setActiveImage(product.mainImg);
    setSelectedSize(product.hasSizeSelector ? product.sizes[0] : null);
  }, [product]);

  return (
    <main className="product-detail-page">
      <button className="back-link" onClick={() => navigate("coleccion")}>
        ← Volver a la colección
      </button>

      <div className="product-detail-container">
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price-detail">{formatARS(product.price)} ARS</p>
          <p className="product-description">{product.description}</p>

          {product.hasSizeSelector && (
            <div className="size-selector">
              <label htmlFor="sizeSelect">{product.sizeLabel}</label>
              <select
                id="sizeSelect"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            className="btn add-to-cart-btn"
            onClick={() => addToCart(product, selectedSize)}
          >
            AÑADIR AL CARRITO
          </button>

          <div className="accordion-info">
            <h3 onClick={() => setShippingOpen(!shippingOpen)}>
              Información de Envío y Devoluciones{" "}
              <span>{shippingOpen ? "−" : "+"}</span>
            </h3>
            {shippingOpen && (
              <div className="accordion-content">
                <p>
                  Realizamos envíos a todo el país. Los cambios y devoluciones
                  se aceptan dentro de los 15 días corridos de recibida la
                  compra, conservando el empaque original.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="product-gallery">
          <img
            src={activeImage}
            alt={product.title}
            className="main-image"
            onError={handleImgError}
          />
          <div className="thumbnails">
            {product.thumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`Vista ${idx + 1}`}
                className={`thumbnail-item ${
                  activeImage === thumb ? "active" : ""
                }`}
                onClick={() => setActiveImage(thumb)}
                onError={handleImgError}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function AboutView() {
  return (
    <main className="about-page">
      <section className="about-content">
        <div className="about-image-container">
          <img
            src="./img/catalogo.png.jpeg"
            alt="Taller o inspiración de AZUCENA"
            className="about-main-image"
            onError={handleImgError}
          />
        </div>
        <div className="about-text-container">
          <h2 className="about-subtitle">NUESTRA FILOSOFÍA</h2>
          <h1 className="about-title">Joyas con alma, hechas a mano</h1>
          <p className="about-paragraph">
            AZUCENA nace de la pasión por la artesanía y la creencia en la
            belleza de lo natural. Cada pieza está cuidadosamente diseñada y
            forjada en nuestro taller, utilizando solo metales nobles y piedras
            semipreciosas seleccionadas por su energía y calidad.
          </p>
          <p className="about-paragraph">
            Nos inspiramos en la calma de la naturaleza y la arquitectura
            clásica para crear diseños que son atemporales, elegantes y que
            cuentan una historia. Creemos que una joya no es solo un accesorio,
            sino un recuerdo que perdura.
          </p>
          <div className="signature">
            <p>— El equipo de AZUCENA</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactView({ showToast }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("¡Gracias por tu mensaje! Te responderemos a la brevedad.");
    e.target.reset();
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <div className="contact-info-details">
          <h2 className="contact-title">CONTACTANOS</h2>
          <p className="contact-slogan">
            Estamos aquí para ayudarte a encontrar la joya perfecta.
          </p>

          <div className="info-group">
            <h3>Taller y Showroom</h3>
            <p>Calle Falsa 123, Recoleta</p>
            <p>Buenos Aires, Argentina</p>
          </div>

          <div className="info-group">
            <h3>Consultas</h3>
            <p>Email: info@azucenajoyas.com</p>
            <p>Teléfono: +54 9 11 5555-5555</p>
          </div>

          <div className="info-group">
            <h3>Horarios</h3>
            <p>Lun a Vie: 10:00 - 18:00 hs</p>
            <p>Sábados: 10:00 - 13:00 hs</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2 className="form-heading">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input type="text" id="asunto" name="asunto" />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea id="mensaje" name="mensaje" rows="6" required />
            </div>
            <button type="submit" className="btn send-btn">
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

function CartView({ cart, changeQuantity, removeItem, navigate, showToast }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1 className="cart-heading">TU CARRITO DE COMPRAS</h1>
      <div className="cart-container">
        <section className="cart-items-list">
          {cart.length === 0 ? (
            <div className="cart-empty-message">
              <p>Tu carrito está vacío. ¡Descubrí nuestra colección!</p>
              <button className="btn" onClick={() => navigate("coleccion")}>
                VER COLECCIÓN
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <img
                    src={item.img || "./img/collaramatista.png"}
                    alt={item.name}
                    onError={handleImgError}
                  />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{formatARS(item.price)} c/u</p>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button onClick={() => changeQuantity(item.id, -1)}>
                      -
                    </button>
                    <span className="item-quantity">{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>

                  <p className="item-price-total">
                    {formatARS(item.price * item.quantity)}
                  </p>
                  <button
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                    title="Eliminar producto"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        <section className="cart-summary">
          <div className="summary-line">
            <p>Subtotal:</p>
            <p>{formatARS(subtotal)} ARS</p>
          </div>
          <div className="summary-line">
            <p>Costo de Envío:</p>
            <p>Calculado al finalizar</p>
          </div>
          <div className="summary-line total-line">
            <h3>Total (sin envío):</h3>
            <h3>{formatARS(subtotal)} ARS</h3>
          </div>

          <button
            className="btn checkout-btn"
            disabled={cart.length === 0}
            onClick={() =>
              showToast("¡Redirigiendo a la pasarela de pago...")
            }
          >
            FINALIZAR COMPRA
          </button>
        </section>
      </div>
    </main>
  );
}
