const productsData = [
  {
    id: 1,
    name: "Keripik Singkong Pedas",
    category: "makanan",
    price: 15000,
    originalPrice: 20000,
    description:
      "Keripik singkong dengan bumbu pedas khas, renyah dan gurih. Diproduksi secara homemade dengan bahan-bahan pilihan.",
    image: "assets/products/pro7.jpg",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-eating-a-snack-of-fried-chips-39808-large.mp4",
    rating: 4.5,
    reviewCount: 124,
    stock: 50,
    seller: "UMKM Sumber Rezeki",
    location: "Bandung, Jawa Barat",
    tags: ["makanan ringan", "pedas", "homemade"],
    isFeatured: true,
    isVideoAvailable: true,
  },
  {
    id: 2,
    name: "Tas Anyaman Rotan",
    category: "kerajinan",
    price: 85000,
    originalPrice: 120000,
    description:
      "Tas anyaman rotan dengan desain modern, kuat dan tahan lama. Cocok untuk kegiatan sehari-hari atau sebagai fashion item.",
    image: "assets/products/pro5.png",
    video: "",
    rating: 4.8,
    reviewCount: 89,
    stock: 25,
    seller: "Kerajinan Nusantara",
    location: "Yogyakarta",
    tags: ["tas", "anyaman", "rotan", "fashion"],
    isFeatured: true,
    isVideoAvailable: false,
  },
  {
    id: 3,
    name: "Batik Tulis Cap",
    category: "fashion",
    price: 125000,
    originalPrice: 175000,
    description:
      "Kain batik tulis cap dengan motif tradisional yang elegan. Diproses dengan teknik pewarnaan alami yang ramah lingkungan.",
    image: "assets/products/pro6.jpg",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-sewing-with-a-sewing-machine-41592-large.mp4",
    rating: 4.7,
    reviewCount: 203,
    stock: 35,
    seller: "Batik Mutiara",
    location: "Solo, Jawa Tengah",
    tags: ["batik", "kain", "tradisional"],
    isFeatured: true,
    isVideoAvailable: true,
  },
  {
    id: 4,
    name: "Madu Hutan Asli",
    category: "makanan",
    price: 75000,
    originalPrice: 95000,
    description:
      "Madu hutan murni yang diambil langsung dari lebah liar di hutan Kalimantan. Kaya akan nutrisi dan antioksidan.",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    video: "",
    rating: 4.9,
    reviewCount: 312,
    stock: 100,
    seller: "Madu Hutan Borneo",
    location: "Kalimantan Tengah",
    tags: ["madu", "alami", "sehat"],
    isFeatured: false,
    isVideoAvailable: false,
  },
  {
    id: 5,
    name: "Lilin Aromaterapi",
    category: "rumah-tangga",
    price: 35000,
    originalPrice: 50000,
    description:
      "Lilin aromaterapi dengan essential oil lavender untuk relaksasi. Membantu mengurangi stres dan meningkatkan kualitas tidur.",
    image: "assets/products/pro5.jpg",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-candle-flame-flickering-close-up-4083-large.mp4",
    rating: 4.6,
    reviewCount: 167,
    stock: 80,
    seller: "Aroma Therapy Indonesia",
    location: "Jakarta",
    tags: ["lilin", "aromaterapi", "relaksasi"],
    isFeatured: true,
    isVideoAvailable: true,
  },
  {
    id: 6,
    name: "Gelang Perak Handmade",
    category: "fashion",
    price: 65000,
    originalPrice: 90000,
    description:
      "Gelang perak dengan desain unik handmade. Cocok untuk aksesori harian atau acara khusus.",
    image: "assets/products/pro3.jpg",
    video: "",
    rating: 4.4,
    reviewCount: 56,
    stock: 40,
    seller: "Silver Craft ID",
    location: "Bali",
    tags: ["aksesoris", "perak", "handmade"],
    isFeatured: false,
    isVideoAvailable: false,
  },
  {
    id: 7,
    name: "Kue Kering Lebaran",
    category: "makanan",
    price: 45000,
    originalPrice: 60000,
    description:
      "Beragam kue kering lebaran dengan rasa yang lezat dan tekstur yang renyah. Tersedia dalam beberapa pilihan rasa.",
    image:
      "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-a-chef-preparing-a-dessert-33295-large.mp4",
    rating: 4.8,
    reviewCount: 278,
    stock: 120,
    seller: "Kue Nusantara",
    location: "Semarang, Jawa Tengah",
    tags: ["kue", "lebaran", "tradisional"],
    isFeatured: true,
    isVideoAvailable: true,
  },
  {
    id: 8,
    name: "Sabun Alami Lavender",
    category: "kecantikan",
    price: 25000,
    originalPrice: 35000,
    description:
      "Sabun alami dengan ekstrak lavender dan minyak zaitun. Membersihkan kulit tanpa membuat kering, cocok untuk semua jenis kulit.",
    image: "assets/products/pro2.jpg",
    video: "",
    rating: 4.7,
    reviewCount: 189,
    stock: 200,
    seller: "Natural Beauty",
    location: "Malang, Jawa Timur",
    tags: ["sabun", "alami", "skincare"],
    isFeatured: false,
    isVideoAvailable: false,
  },
  {
    id: 9,
    name: "Vas Bunga Keramik",
    category: "rumah-tangga",
    price: 95000,
    originalPrice: 135000,
    description:
      "Vas bunga keramik dengan motif etnik yang indah. Dibuat dengan teknik pembakaran tradisional untuk hasil yang maksimal.",
    image: "assets/products/pro4.jpg",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-forming-a-clay-pot-41591-large.mp4",
    rating: 4.5,
    reviewCount: 74,
    stock: 30,
    seller: "Keramik Nusantara",
    location: "Plered, Jawa Barat",
    tags: ["vas", "keramik", "dekorasi"],
    isFeatured: true,
    isVideoAvailable: true,
  },
  {
    id: 10,
    name: "Minyak Goreng Kelapa",
    category: "makanan",
    price: 25000,
    originalPrice: 50000,
    description:
      "Minyak goreng kelapa murni yang diolah secara tradisional. Lebih sehat dan cocok untuk segala jenis masakan.",
    image: "assets/products/pro1.jpg",
    video: "",
    rating: 4.6,
    reviewCount: 156,
    stock: 150,
    seller: "Kelapa Organik",
    location: "Sulawesi Selatan",
    tags: ["minyak", "kelapa", "sehat"],
    isFeatured: false,
    isVideoAvailable: false,
  },
];

let currentUser = null;
let cart = [];
let browsingHistory = [];

const initializeDemoUser = () => {
  currentUser = {
    id: 1,
    name: "Demo User",
    email: "demo@umkmdigital.id",
    isAdmin: false,
  };

  const savedCart = localStorage.getItem("umkmCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }

  const savedHistory = localStorage.getItem("umkmBrowsingHistory");
  if (savedHistory) {
    browsingHistory = JSON.parse(savedHistory);
  }
};

const domElements = {
  mobileMenuBtn: document.getElementById("mobile-menu-btn"),
  mobileMenu: document.getElementById("mobile-menu"),
  closeMobileMenu: document.getElementById("close-mobile-menu"),

  productsContainer: document.getElementById("products-container"),
  recommendedContainer: document.getElementById("recommended-container"),
  loadMoreBtn: document.getElementById("load-more"),

  categoryFilter: document.getElementById("category-filter"),
  priceFilter: document.getElementById("price-filter"),
  sortFilter: document.getElementById("sort-filter"),
  resetFiltersBtn: document.getElementById("reset-filters"),
  mainSearch: document.getElementById("main-search"),
  searchInput: document.getElementById("search-input"),
  searchBtn: document.getElementById("search-btn"),

  cartModal: document.getElementById("cart-modal"),
  productModal: document.getElementById("product-modal"),
  paymentModal: document.getElementById("payment-modal"),

  cartIcon: document.getElementById("cart-icon"),
  closeCart: document.getElementById("close-cart"),
  cartItems: document.getElementById("cart-items"),
  emptyCartMessage: document.getElementById("empty-cart-message"),
  cartSummary: document.getElementById("cart-summary"),
  cartTotalPrice: document.getElementById("cart-total-price"),
  clearCartBtn: document.getElementById("clear-cart"),
  checkoutBtn: document.getElementById("checkout-btn"),

  productModalContent: document.querySelector(".product-modal-content"),

  closePayment: document.getElementById("close-payment"),
  paymentMethodOptions: document.querySelectorAll(
    'input[name="payment-method"]'
  ),
  bankTransferDetails: document.getElementById("bank-transfer-details"),
  midtransDetails: document.getElementById("midtrans-details"),
  orderItems: document.getElementById("order-items"),
  orderTotalPrice: document.getElementById("order-total-price"),
  processPaymentBtn: document.getElementById("process-payment"),

  contactForm: document.getElementById("contact-form"),
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const getRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
};

const saveCartToStorage = () => {
  localStorage.setItem("umkmCart", JSON.stringify(cart));
};

const saveBrowsingHistoryToStorage = () => {
  localStorage.setItem("umkmBrowsingHistory", JSON.stringify(browsingHistory));
};

let isManualNav = false;
let navClickTimeout = null;

const updateActiveNav = () => {
  if (isManualNav) return;

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  let currentSection = "";
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  if (currentSection) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  } else {
    const homeLink = document.querySelector('.nav-link[href="#beranda"]');
    const mobileHomeLink = document.querySelector(
      '.mobile-nav-link[href="#beranda"]'
    );
    if (sections.length > 0 && scrollPosition < sections[0].offsetTop) {
      if (homeLink) homeLink.classList.add("active");
      if (mobileHomeLink) mobileHomeLink.classList.add("active");
    }
  }
};

const setActiveNavDirectly = (targetId) => {
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === targetId) {
      link.classList.add("active");
    }
  });
};

const renderProducts = (products, container, isRecommended = false) => {
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = `
            <div class="no-products-message">
                <i class="fas fa-search"></i>
                <h3>Tidak ada produk ditemukan</h3>
                <p>Coba ubah filter pencarian atau kata kunci</p>
            </div>
        `;
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-id", product.id);
    productCard.setAttribute("data-category", product.category);

    const hasDiscount = product.originalPrice > product.price;
    const discountPercentage = hasDiscount
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

    productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
                
                ${
                  product.isFeatured
                    ? '<span class="product-badge">Unggulan</span>'
                    : ""
                }
                
                ${
                  hasDiscount
                    ? `<span class="product-badge" style="left: ${
                        product.isFeatured ? "90px" : "15px"
                      }; background-color: var(--danger-color);">${discountPercentage}% OFF</span>`
                    : ""
                }
                
                ${
                  product.isVideoAvailable
                    ? `
                    <button class="product-video-btn" data-id="${product.id}">
                        <i class="fas fa-play"></i>
                    </button>
                `
                    : ""
                }
            </div>
            
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description.substring(
                  0,
                  80
                )}...</p>
                
                <div class="product-price">
                    ${formatCurrency(product.price)}
                    ${
                      hasDiscount
                        ? `<span style="font-size: 0.9rem; color: var(--gray-color); text-decoration: line-through; margin-left: 8px;">${formatCurrency(
                            product.originalPrice
                          )}</span>`
                        : ""
                    }
                </div>
                
                <div class="product-meta">
                    <div class="product-rating">
                        ${getRatingStars(product.rating)}
                        <span>(${product.reviewCount})</span>
                    </div>
                    <div class="product-stock">
                        <i class="fas fa-box"></i>
                        <span>${product.stock} tersedia</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="btn btn-outline view-detail-btn" data-id="${
                      product.id
                    }">
                        <i class="fas fa-eye"></i> Detail
                    </button>
                    <button class="btn btn-primary add-to-cart-btn" data-id="${
                      product.id
                    }">
                        <i class="fas fa-cart-plus"></i> Beli
                    </button>
                </div>
            </div>
        `;

    container.appendChild(productCard);
  });
};

const renderRecommendedProducts = () => {
  const recommendedProducts = productsData
    .filter((product) => product.isFeatured)
    .slice(0, 4);

  if (recommendedProducts.length > 0) {
    renderProducts(recommendedProducts, domElements.recommendedContainer, true);
  } else {
    domElements.recommendedContainer.innerHTML = `
            <div class="no-products-message">
                <i class="fas fa-info-circle"></i>
                <h3>Belum ada rekomendasi</h3>
                <p>Mulai jelajahi produk untuk mendapatkan rekomendasi</p>
            </div>
        `;
  }
};

let currentFilter = {
  category: "semua",
  price: "semua",
  sort: "terbaru",
  search: "",
};

let displayedProductsCount = 8;

const filterProducts = () => {
  let filteredProducts = [...productsData];

  if (currentFilter.category !== "semua") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === currentFilter.category
    );
  }

  if (currentFilter.price !== "semua") {
    switch (currentFilter.price) {
      case "murah":
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= 50000
        );
        break;
      case "sedang":
        filteredProducts = filteredProducts.filter(
          (product) => product.price > 50000 && product.price <= 200000
        );
        break;
      case "tinggi":
        filteredProducts = filteredProducts.filter(
          (product) => product.price > 200000
        );
        break;
    }
  }

  if (currentFilter.search) {
    const searchTerm = currentFilter.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  }

  switch (currentFilter.sort) {
    case "terbaru":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case "termurah":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "termahal":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "terlaris":
      filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
  }

  return filteredProducts;
};

const updateProductsDisplay = () => {
  const filteredProducts = filterProducts();
  const productsToDisplay = filteredProducts.slice(0, displayedProductsCount);

  renderProducts(productsToDisplay, domElements.productsContainer);

  if (displayedProductsCount >= filteredProducts.length) {
    domElements.loadMoreBtn.style.display = "none";
  } else {
    domElements.loadMoreBtn.style.display = "block";
  }
};

const updateCartCount = () => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElements = document.querySelectorAll(".cart-count");

  cartCountElements.forEach((element) => {
    element.textContent = totalItems;
  });
};

const renderCartItems = () => {
  domElements.cartItems.innerHTML = "";

  if (cart.length === 0) {
    domElements.emptyCartMessage.classList.remove("hidden");
    domElements.cartSummary.classList.add("hidden");
    return;
  }

  domElements.emptyCartMessage.classList.add("hidden");
  domElements.cartSummary.classList.remove("hidden");

  cart.forEach((item) => {
    const product = productsData.find((p) => p.id === item.productId);

    if (!product) return;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.setAttribute("data-id", item.productId);

    cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            
            <div class="cart-item-details">
                <h4 class="cart-item-title">${product.name}</h4>
                <p class="cart-item-price">${formatCurrency(product.price)}</p>
                
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease-quantity" data-id="${
                          item.productId
                        }">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-quantity" data-id="${
                          item.productId
                        }">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    
                    <button class="remove-item" data-id="${item.productId}">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </div>
            </div>
        `;

    domElements.cartItems.appendChild(cartItem);
  });

  updateCartTotal();
};

const updateCartTotal = () => {
  const total = cart.reduce((sum, item) => {
    const product = productsData.find((p) => p.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  domElements.cartTotalPrice.textContent = formatCurrency(total);
};

const addToCart = (productId, quantity = 1) => {
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }

  saveCartToStorage();
  updateCartCount();

  showNotification("Produk berhasil ditambahkan ke keranjang!", "success");
};

const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.productId !== productId);
  saveCartToStorage();
  updateCartCount();
  renderCartItems();

  showNotification("Produk dihapus dari keranjang", "info");
};

const updateCartItemQuantity = (productId, change) => {
  const item = cart.find((item) => item.productId === productId);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCartToStorage();
      renderCartItems();
    }
  }
};

const clearCart = () => {
  cart = [];
  saveCartToStorage();
  updateCartCount();
  renderCartItems();

  showNotification("Keranjang berhasil dikosongkan", "info");
};

const showProductDetail = (productId) => {
  const product = productsData.find((p) => p.id === productId);

  if (!product) return;

  if (!browsingHistory.includes(productId)) {
    browsingHistory.unshift(productId);
    if (browsingHistory.length > 10) browsingHistory.pop();
    saveBrowsingHistoryToStorage();
  }

  const hasDiscount = product.originalPrice > product.price;

  domElements.productModalContent.innerHTML = `
        <div class="product-detail-container">
            <div class="product-detail-gallery">
                <img src="${product.image}" alt="${
    product.name
  }" class="product-detail-image" id="product-detail-image">
                
                ${
                  product.isVideoAvailable
                    ? `
                    <video class="product-detail-video" id="product-detail-video" controls>
                        <source src="${product.video}" type="video/mp4">
                        Browser Anda tidak mendukung pemutaran video.
                    </video>
                    
                    <div class="gallery-controls">
                        <button class="btn btn-outline" id="toggle-media-btn">
                            <i class="fas fa-video"></i> Tampilkan Video
                        </button>
                    </div>
                `
                    : ""
                }
            </div>
            
            <div class="product-detail-content">
                <div class="product-detail-header">
                    <h2 class="product-detail-title">${product.name}</h2>
                    <div class="product-detail-price">${formatCurrency(
                      product.price
                    )}</div>
                </div>
                
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-detail-meta">
                    <div>
                        <i class="fas fa-store"></i>
                        <span>${product.seller}</span>
                    </div>
                    
                    <div>
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${product.location}</span>
                    </div>
                    
                    <div>
                        <i class="fas fa-star"></i>
                        <span>${product.rating} (${
    product.reviewCount
  } ulasan)</span>
                    </div>
                    
                    <div>
                        <i class="fas fa-box"></i>
                        <span>${product.stock} tersedia</span>
                    </div>
                </div>
                
                ${
                  hasDiscount
                    ? `
                    <div class="product-discount-info">
                        <span class="original-price">${formatCurrency(
                          product.originalPrice
                        )}</span>
                        <span class="discount-percentage">${Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}% OFF</span>
                    </div>
                `
                    : ""
                }
                
                <div class="product-tags">
                    ${product.tags
                      .map((tag) => `<span class="product-tag">${tag}</span>`)
                      .join("")}
                </div>
                
                <div class="product-detail-actions">
                    <button class="btn btn-outline" id="add-to-wishlist" data-id="${
                      product.id
                    }">
                        <i class="far fa-heart"></i> Wishlist
                    </button>
                    <button class="btn btn-primary" id="add-to-cart-detail" data-id="${
                      product.id
                    }">
                        <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                    </button>
                    <button class="btn btn-secondary" id="buy-now" data-id="${
                      product.id
                    }">
                        <i class="fas fa-bolt"></i> Beli Sekarang
                    </button>
                </div>
            </div>
        </div>
    `;

  domElements.productModal.classList.add("active");

  addProductDetailEventListeners(product);
};

const addProductDetailEventListeners = (product) => {
  const toggleMediaBtn = document.getElementById("toggle-media-btn");
  const productImage = document.getElementById("product-detail-image");
  const productVideo = document.getElementById("product-detail-video");

  if (toggleMediaBtn) {
    let showingVideo = false;

    toggleMediaBtn.addEventListener("click", () => {
      showingVideo = !showingVideo;

      if (showingVideo) {
        productImage.style.display = "none";
        productVideo.style.display = "block";
        productVideo.play();
        toggleMediaBtn.innerHTML =
          '<i class="fas fa-image"></i> Tampilkan Gambar';
      } else {
        productImage.style.display = "block";
        productVideo.style.display = "none";
        productVideo.pause();
        toggleMediaBtn.innerHTML =
          '<i class="fas fa-video"></i> Tampilkan Video';
      }
    });
  }

  const addToWishlistBtn = document.getElementById("add-to-wishlist");
  if (addToWishlistBtn) {
    addToWishlistBtn.addEventListener("click", () => {
      if (!currentUser) {
        showNotification(
          "Silakan login terlebih dahulu untuk menambahkan ke wishlist",
          "warning"
        );
        return;
      }

      const isInWishlist = addToWishlistBtn.classList.contains("active");

      if (isInWishlist) {
        addToWishlistBtn.classList.remove("active");
        addToWishlistBtn.innerHTML = '<i class="far fa-heart"></i> Wishlist';
        showNotification("Produk dihapus dari wishlist", "info");
      } else {
        addToWishlistBtn.classList.add("active");
        addToWishlistBtn.innerHTML =
          '<i class="fas fa-heart"></i> Dalam Wishlist';
        showNotification("Produk ditambahkan ke wishlist", "success");
      }
    });
  }

  const addToCartDetailBtn = document.getElementById("add-to-cart-detail");
  if (addToCartDetailBtn) {
    addToCartDetailBtn.addEventListener("click", () => {
      addToCart(product.id, 1);
      showNotification("Produk berhasil ditambahkan ke keranjang!", "success");
    });
  }

  const buyNowBtn = document.getElementById("buy-now");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      addToCart(product.id, 1);
      domElements.productModal.classList.remove("active");
      domElements.cartModal.classList.add("active");
      renderCartItems();
    });
  }
};

const renderOrderSummary = () => {
  domElements.orderItems.innerHTML = "";

  cart.forEach((item) => {
    const product = productsData.find((p) => p.id === item.productId);

    if (!product) return;

    const orderItem = document.createElement("div");
    orderItem.className = "order-item";

    orderItem.innerHTML = `
            <span>${product.name} x${item.quantity}</span>
            <span>${formatCurrency(product.price * item.quantity)}</span>
        `;

    domElements.orderItems.appendChild(orderItem);
  });

  const total = cart.reduce((sum, item) => {
    const product = productsData.find((p) => p.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  domElements.orderTotalPrice.textContent = formatCurrency(total);
};

const processPayment = () => {
  if (cart.length === 0) {
    showNotification("Keranjang belanja kosong", "warning");
    return;
  }

  const selectedPaymentMethod = document.querySelector(
    'input[name="payment-method"]:checked'
  ).value;

  if (selectedPaymentMethod === "midtrans") {
    showNotification("Mengarahkan ke halaman pembayaran Midtrans...", "info");

    setTimeout(() => {
      showNotification(
        "Pembayaran berhasil! Pesanan Anda sedang diproses.",
        "success"
      );

      clearCart();

      domElements.paymentModal.classList.remove("active");
      domElements.cartModal.classList.remove("active");
    }, 2000);
  } else {
    showNotification(
      "Silakan transfer sesuai instruksi di atas. Konfirmasi via WhatsApp setelah transfer.",
      "info"
    );

    setTimeout(() => {
      showNotification(
        "Pesanan Anda telah diterima. Silakan lakukan transfer dalam 24 jam.",
        "success"
      );

      clearCart();

      domElements.paymentModal.classList.remove("active");
      domElements.cartModal.classList.remove("active");
    }, 1500);
  }
};

const showNotification = (message, type = "info") => {
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;

  let icon = "info-circle";
  if (type === "success") icon = "check-circle";
  if (type === "warning") icon = "exclamation-circle";
  if (type === "error") icon = "times-circle";

  notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);

  notification.addEventListener("click", () => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  });
};

const addNotificationStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: white;
            color: var(--dark-color);
            padding: 15px 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-hover);
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 3000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 350px;
            cursor: pointer;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification i {
            font-size: 1.2rem;
        }
        
        .notification-success {
            border-left: 4px solid var(--success-color);
        }
        
        .notification-success i {
            color: var(--success-color);
        }
        
        .notification-info {
            border-left: 4px solid var(--primary-color);
        }
        
        .notification-info i {
            color: var(--primary-color);
        }
        
        .notification-warning {
            border-left: 4px solid var(--warning-color);
        }
        
        .notification-warning i {
            color: var(--warning-color);
        }
        
        .notification-error {
            border-left: 4px solid var(--danger-color);
        }
        
        .notification-error i {
            color: var(--danger-color);
        }
    `;

  document.head.appendChild(style);
};

const setupProductEventDelegation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".view-detail-btn")) {
      const btn = e.target.closest(".view-detail-btn");
      const productId = parseInt(btn.getAttribute("data-id"));
      showProductDetail(productId);
      return;
    }

    if (e.target.closest(".add-to-cart-btn")) {
      const btn = e.target.closest(".add-to-cart-btn");
      const productId = parseInt(btn.getAttribute("data-id"));

      if (!btn.classList.contains("clicked")) {
        btn.classList.add("clicked");
        addToCart(productId, 1);

        setTimeout(() => {
          btn.classList.remove("clicked");
        }, 1000);
      }
      return;
    }

    if (e.target.closest(".product-video-btn")) {
      const btn = e.target.closest(".product-video-btn");
      const productId = parseInt(btn.getAttribute("data-id"));
      showProductDetail(productId);

      setTimeout(() => {
        const toggleBtn = document.getElementById("toggle-media-btn");
        if (toggleBtn) toggleBtn.click();
      }, 300);
      return;
    }
  });
};

const setupEventListeners = () => {
  domElements.mobileMenuBtn.addEventListener("click", () => {
    domElements.mobileMenu.classList.add("active");
  });

  domElements.closeMobileMenu.addEventListener("click", () => {
    domElements.mobileMenu.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !domElements.mobileMenu.contains(e.target) &&
      !domElements.mobileMenuBtn.contains(e.target) &&
      domElements.mobileMenu.classList.contains("active")
    ) {
      domElements.mobileMenu.classList.remove("active");
    }
  });

  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          isManualNav = true;

          setActiveNavDirectly(targetId);

          if (navClickTimeout) {
            clearTimeout(navClickTimeout);
          }

          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });

          navClickTimeout = setTimeout(() => {
            isManualNav = false;
          }, 1500);

          if (domElements.mobileMenu.classList.contains("active")) {
            domElements.mobileMenu.classList.remove("active");
          }
        }
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (!isManualNav) {
      updateActiveNav();
    }
  });

  domElements.cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    renderCartItems();
    domElements.cartModal.classList.add("active");
  });

  domElements.closeCart.addEventListener("click", () => {
    domElements.cartModal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if (e.target === domElements.cartModal) {
      domElements.cartModal.classList.remove("active");
    }

    if (e.target === domElements.productModal) {
      domElements.productModal.classList.remove("active");
    }

    if (e.target === domElements.paymentModal) {
      domElements.paymentModal.classList.remove("active");
    }
  });

  domElements.categoryFilter.addEventListener("change", (e) => {
    currentFilter.category = e.target.value;
    displayedProductsCount = 8;
    updateProductsDisplay();
  });

  domElements.priceFilter.addEventListener("change", (e) => {
    currentFilter.price = e.target.value;
    displayedProductsCount = 8;
    updateProductsDisplay();
  });

  domElements.sortFilter.addEventListener("change", (e) => {
    currentFilter.sort = e.target.value;
    updateProductsDisplay();
  });

  domElements.resetFiltersBtn.addEventListener("click", () => {
    domElements.categoryFilter.value = "semua";
    domElements.priceFilter.value = "semua";
    domElements.sortFilter.value = "terbaru";
    domElements.mainSearch.value = "";

    currentFilter = {
      category: "semua",
      price: "semua",
      sort: "terbaru",
      search: "",
    };

    displayedProductsCount = 8;
    updateProductsDisplay();
  });

  domElements.mainSearch.addEventListener("input", (e) => {
    currentFilter.search = e.target.value;
    displayedProductsCount = 8;
    updateProductsDisplay();
  });

  domElements.searchBtn.addEventListener("click", () => {
    currentFilter.search = domElements.searchInput.value;
    displayedProductsCount = 8;
    updateProductsDisplay();
  });

  domElements.searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      currentFilter.search = e.target.value;
      displayedProductsCount = 8;
      updateProductsDisplay();
    }
  });

  domElements.loadMoreBtn.addEventListener("click", () => {
    displayedProductsCount += 4;
    updateProductsDisplay();
  });

  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      domElements.categoryFilter.value = category;
      currentFilter.category = category;
      displayedProductsCount = 8;
      updateProductsDisplay();

      const produkSection = document.getElementById("produk");
      if (produkSection) {
        isManualNav = true;

        setActiveNavDirectly("#produk");

        window.scrollTo({
          top: produkSection.offsetTop - 80,
          behavior: "smooth",
        });

        if (navClickTimeout) {
          clearTimeout(navClickTimeout);
        }
        navClickTimeout = setTimeout(() => {
          isManualNav = false;
        }, 1500);
      }
    });
  });

  domElements.clearCartBtn.addEventListener("click", clearCart);

  domElements.checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showNotification("Keranjang belanja kosong", "warning");
      return;
    }

    renderOrderSummary();
    domElements.cartModal.classList.remove("active");
    domElements.paymentModal.classList.add("active");
  });

  domElements.paymentMethodOptions.forEach((option) => {
    option.addEventListener("change", (e) => {
      if (e.target.value === "bank-transfer") {
        domElements.bankTransferDetails.style.display = "block";
        domElements.midtransDetails.style.display = "none";
      } else {
        domElements.bankTransferDetails.style.display = "none";
        domElements.midtransDetails.style.display = "block";
      }
    });
  });

  domElements.closePayment.addEventListener("click", () => {
    domElements.paymentModal.classList.remove("active");
  });

  domElements.processPaymentBtn.addEventListener("click", processPayment);

  if (domElements.contactForm) {
    domElements.contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showNotification(
        "Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.",
        "success"
      );
      domElements.contactForm.reset();
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".decrease-quantity")) {
      const productId = parseInt(
        e.target.closest(".decrease-quantity").getAttribute("data-id")
      );
      updateCartItemQuantity(productId, -1);
    }

    if (e.target.closest(".increase-quantity")) {
      const productId = parseInt(
        e.target.closest(".increase-quantity").getAttribute("data-id")
      );
      updateCartItemQuantity(productId, 1);
    }

    if (e.target.closest(".remove-item")) {
      const productId = parseInt(
        e.target.closest(".remove-item").getAttribute("data-id")
      );
      removeFromCart(productId);
    }
  });
};

const initializeApp = () => {
  initializeDemoUser();

  addNotificationStyles();

  setupEventListeners();

  setupProductEventDelegation();

  updateProductsDisplay();
  renderRecommendedProducts();
  updateCartCount();

  updateActiveNav();

  setTimeout(() => {
    showNotification(
      "Selamat datang di demo UMKM Digital! Gunakan akun demo untuk menjelajahi fitur.",
      "info"
    );
  }, 1000);
};

document.addEventListener("DOMContentLoaded", initializeApp);
