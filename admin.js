const adminData = {
  products: JSON.parse(localStorage.getItem("umkmProducts")) || [
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
      status: "active",
      createdAt: "2023-10-15",
      views: 1245,
      sales: 89,
    },
  ],

  orders: [
    {
      id: "ORD-2023-001",
      customer: {
        name: "Ahmad Santoso",
        email: "ahmad@email.com",
        phone: "0812-3456-7890",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      date: "2023-11-15",
      products: [
        { id: 1, name: "Keripik Singkong Pedas", quantity: 2, price: 15000 },
        { id: 3, name: "Batik Tulis Cap", quantity: 1, price: 125000 },
      ],
      total: 155000,
      status: "delivered",
      paymentMethod: "bank-transfer",
      shippingAddress: "Jl. Merdeka No. 123, Jakarta Pusat",
    },
    {
      id: "ORD-2023-002",
      customer: {
        name: "Sari Dewi",
        email: "sari@email.com",
        phone: "0813-4567-8901",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      date: "2023-11-14",
      products: [
        { id: 5, name: "Lilin Aromaterapi", quantity: 3, price: 35000 },
      ],
      total: 105000,
      status: "processing",
      paymentMethod: "midtrans",
      shippingAddress: "Jl. Sudirman No. 456, Jakarta Selatan",
    },
    {
      id: "ORD-2023-003",
      customer: {
        name: "Budi Pratama",
        email: "budi@email.com",
        phone: "0814-5678-9012",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      date: "2023-11-13",
      products: [
        { id: 2, name: "Tas Anyaman Rotan", quantity: 1, price: 85000 },
        { id: 7, name: "Kue Kering Lebaran", quantity: 2, price: 45000 },
      ],
      total: 175000,
      status: "shipped",
      paymentMethod: "bank-transfer",
      shippingAddress: "Jl. Thamrin No. 789, Jakarta Pusat",
    },
    {
      id: "ORD-2023-004",
      customer: {
        name: "Rina Wijaya",
        email: "rina@email.com",
        phone: "0815-6789-0123",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      date: "2023-11-12",
      products: [
        { id: 9, name: "Vas Bunga Keramik", quantity: 1, price: 95000 },
      ],
      total: 95000,
      status: "pending",
      paymentMethod: "midtrans",
      shippingAddress: "Jl. Gatot Subroto No. 101, Jakarta Selatan",
    },
    {
      id: "ORD-2023-005",
      customer: {
        name: "Hendra Setiawan",
        email: "hendra@email.com",
        phone: "0816-7890-1234",
        avatar:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      date: "2023-11-11",
      products: [
        { id: 4, name: "Madu Hutan Asli", quantity: 1, price: 75000 },
        { id: 8, name: "Sabun Alami Lavender", quantity: 2, price: 25000 },
      ],
      total: 125000,
      status: "cancelled",
      paymentMethod: "bank-transfer",
      shippingAddress: "Jl. Asia Afrika No. 202, Bandung",
    },
  ],

  customers: [
    {
      id: 1,
      name: "Ahmad Santoso",
      email: "ahmad@email.com",
      phone: "0812-3456-7890",
      totalOrders: 5,
      totalSpent: 625000,
      joinDate: "2023-08-15",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Sari Dewi",
      email: "sari@email.com",
      phone: "0813-4567-8901",
      totalOrders: 3,
      totalSpent: 315000,
      joinDate: "2023-09-20",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Budi Pratama",
      email: "budi@email.com",
      phone: "0814-5678-9012",
      totalOrders: 2,
      totalSpent: 350000,
      joinDate: "2023-10-05",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Rina Wijaya",
      email: "rina@email.com",
      phone: "0815-6789-0123",
      totalOrders: 1,
      totalSpent: 95000,
      joinDate: "2023-10-25",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      name: "Hendra Setiawan",
      email: "hendra@email.com",
      phone: "0816-7890-1234",
      totalOrders: 2,
      totalSpent: 250000,
      joinDate: "2023-11-01",
      avatar:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ],

  reviews: [
    {
      id: 1,
      productId: 1,
      productName: "Keripik Singkong Pedas",
      customer: {
        name: "Ahmad Santoso",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      rating: 5,
      comment:
        "Rasanya sangat enak dan pedasnya pas. Pengiriman cepat dan packing rapi. Akan order lagi!",
      date: "2023-11-10",
      approved: true,
    },
    {
      id: 2,
      productId: 3,
      productName: "Batik Tulis Cap",
      customer: {
        name: "Sari Dewi",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      rating: 4,
      comment:
        "Kualitas batiknya bagus, motifnya indah. Hanya saja warnanya sedikit berbeda dengan gambar.",
      date: "2023-11-08",
      approved: true,
    },
    {
      id: 3,
      productId: 5,
      productName: "Lilin Aromaterapi",
      customer: {
        name: "Budi Pratama",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      rating: 5,
      comment:
        "Aromanya sangat menenangkan. Cocok untuk relaksasi setelah seharian bekerja. Sudah beli 3 kali!",
      date: "2023-11-05",
      approved: true,
    },
    {
      id: 4,
      productId: 2,
      productName: "Tas Anyaman Rotan",
      customer: {
        name: "Rina Wijaya",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      rating: 3,
      comment:
        "Desainnya bagus tapi ukurannya lebih kecil dari yang saya kira. Kualitas anyaman cukup baik.",
      date: "2023-11-03",
      approved: false,
    },
    {
      id: 5,
      productId: 7,
      productName: "Kue Kering Lebaran",
      customer: {
        name: "Hendra Setiawan",
        avatar:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      rating: 5,
      comment:
        "Kuenya renyah dan tidak terlalu manis. Keluarga sangat suka. Cocok untuk suguhan lebaran.",
      date: "2023-10-28",
      approved: true,
    },
  ],

  notifications: [
    {
      id: 1,
      title: "Pesanan Baru",
      message: "Pesanan ORD-2023-006 telah diterima dari pelanggan baru",
      time: "10 menit yang lalu",
      read: false,
      type: "order",
    },
    {
      id: 2,
      title: "Ulasan Baru",
      message: "Ada ulasan baru untuk produk 'Keripik Singkong Pedas'",
      time: "1 jam yang lalu",
      read: false,
      type: "review",
    },
    {
      id: 3,
      title: "Stok Menipis",
      message: "Stok produk 'Madu Hutan Asli' tersisa 5 unit",
      time: "3 jam yang lalu",
      read: true,
      type: "stock",
    },
    {
      id: 4,
      title: "Pembayaran Diterima",
      message: "Pembayaran untuk pesanan ORD-2023-004 telah diterima",
      time: "5 jam yang lalu",
      read: true,
      type: "payment",
    },
    {
      id: 5,
      title: "Pengiriman Berhasil",
      message: "Pesanan ORD-2023-002 telah berhasil dikirim",
      time: "1 hari yang lalu",
      read: true,
      type: "shipping",
    },
  ],

  media: [
    {
      id: 1,
      name: "keripik-singkong.jpg",
      url: "assets/products/pro7.jpg",
      type: "image",
      size: "1.2 MB",
      uploaded: "2023-10-15",
      usedIn: ["Keripik Singkong Pedas"],
    },
    {
      id: 2,
      name: "tas-anyaman.jpg",
      url: "assets/products/pro5.png",
      type: "image",
      size: "980 KB",
      uploaded: "2023-10-10",
      usedIn: ["Tas Anyaman Rotan"],
    },
    {
      id: 3,
      name: "batik-tulis.jpg",
      url: "assets/products/pro6.jpg",
      type: "image",
      size: "1.5 MB",
      uploaded: "2023-10-05",
      usedIn: ["Batik Tulis Cap"],
    },
    {
      id: 4,
      name: "lilin-aromaterapi.mp4",
      url: "assets/products/pro5.jpg",
      type: "image",
      size: "4.2 MB",
      uploaded: "2023-09-28",
      usedIn: ["Lilin Aromaterapi"],
    },
    {
      id: 5,
      name: "kue-lebaran.jpg",
      url: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      type: "image",
      size: "1.1 MB",
      uploaded: "2023-09-20",
      usedIn: ["Kue Kering Lebaran"],
    },
  ],
};

try {
  const mainProducts = JSON.parse(localStorage.getItem("productsData"));
  if (mainProducts && mainProducts.length > 0) {
    adminData.products = mainProducts.map((p) => ({
      ...p,
      status: "active",
      createdAt: "2023-10-15",
      views: Math.floor(Math.random() * 2000),
      sales: Math.floor(Math.random() * 100),
    }));
  }
} catch (e) {
  console.log("Using default admin products data");
}

let currentAdmin = null;
let currentSection = "dashboard";
let currentProductPage = 1;
let productsPerPage = 10;
let filteredProducts = [...adminData.products];

const domElements = {
  sidebar: document.getElementById("sidebar"),
  sidebarToggle: document.getElementById("sidebar-toggle"),
  mainContent: document.getElementById("main-content"),

  adminName: document.getElementById("admin-name"),
  adminEmail: document.getElementById("admin-email"),

  menuItems: document.querySelectorAll(".menu-item"),
  pageTitle: document.getElementById("page-title"),

  contentSections: document.querySelectorAll(".content-section"),

  notificationBtn: document.getElementById("notification-btn"),
  notificationPanel: document.getElementById("notification-panel"),
  closeNotifications: document.getElementById("close-notifications"),
  notificationList: document.getElementById("notification-list"),
  notificationCount: document.querySelector(".notification-count"),

  productCount: document.getElementById("product-count"),
  orderCount: document.getElementById("order-count"),
  customerCount: document.getElementById("customer-count"),
  salesChart: document.getElementById("salesChart"),
  topProducts: document.getElementById("top-products"),
  recentOrders: document.getElementById("recent-orders"),
  recentReviews: document.getElementById("recent-reviews"),

  addProductBtn: document.getElementById("add-product-btn"),
  addProductModal: document.getElementById("add-product-modal"),
  closeAddProductModal: document.getElementById("close-add-product-modal"),
  productForm: document.getElementById("product-form"),
  productsTableBody: document.getElementById("products-table-body"),
  productsCount: document.getElementById("products-count"),
  currentPage: document.getElementById("current-page"),
  totalPages: document.getElementById("total-pages"),
  prevPage: document.getElementById("prev-page"),
  nextPage: document.getElementById("next-page"),
  selectAllProducts: document.getElementById("select-all-products"),
  productSearch: document.getElementById("product-search"),
  productCategoryFilter: document.getElementById("product-category-filter"),
  productStatusFilter: document.getElementById("product-status-filter"),

  editProductModal: document.getElementById("edit-product-modal"),
  confirmModal: document.getElementById("confirm-modal"),
  closeConfirmModal: document.getElementById("close-confirm-modal"),
  confirmCancel: document.getElementById("confirm-cancel"),
  confirmAction: document.getElementById("confirm-action"),
  confirmTitle: document.getElementById("confirm-title"),
  confirmMessage: document.getElementById("confirm-message"),

  toastContainer: document.getElementById("toast-container"),

  logoutBtn: document.getElementById("logout-btn"),

  mobileMenuToggle: document.getElementById("mobile-sidebar-toggle"),

  backToStoreBtn: document.getElementById("back-to-store"),

  sidebarOverlay: document.getElementById("sidebar-overlay"),
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
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

const showToast = (message, type = "info") => {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "info-circle";
  if (type === "success") icon = "check-circle";
  if (type === "error") icon = "times-circle";
  if (type === "warning") icon = "exclamation-circle";

  toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;

  domElements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);

  toast.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  });
};

const showConfirmModal = (title, message, onConfirm) => {
  domElements.confirmTitle.textContent = title;
  domElements.confirmMessage.textContent = message;
  domElements.confirmModal.classList.add("active");

  const handleConfirm = () => {
    onConfirm();
    domElements.confirmModal.classList.remove("active");
    domElements.confirmAction.removeEventListener("click", handleConfirm);
  };

  domElements.confirmAction.addEventListener("click", handleConfirm);
};

const initializeAdmin = () => {
  const savedUser = localStorage.getItem("umkmUser");

  if (!savedUser) {
    window.location.href = "login.html";
    return;
  }

  currentAdmin = JSON.parse(savedUser);

  if (!currentAdmin.isAdmin) {
    showToast("Akses ditolak. Halaman ini untuk administrator saja.", "error");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
    return;
  }

  domElements.adminName.textContent = currentAdmin.name;
  domElements.adminEmail.textContent = currentAdmin.email;

  updateDashboardCounts();

  initializeDashboard();

  initializeProductManagement();

  initializeOrders();

  initializeCustomers();

  initializeReviews();

  initializeMedia();

  initializeNotifications();
};

const updateDashboardCounts = () => {
  domElements.productCount.textContent = adminData.products.length;
  domElements.orderCount.textContent = adminData.orders.length;
  domElements.customerCount.textContent = adminData.customers.length;
};

const initializeDashboard = () => {
  renderTopProducts();

  renderRecentOrders();

  renderRecentReviews();

  initializeCharts();
};

const renderTopProducts = () => {
  const topProducts = [...adminData.products]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5);

  domElements.topProducts.innerHTML = topProducts
    .map(
      (product) => `
        <div class="top-product-item">
            <div class="top-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="top-product-info">
                <h4>${product.name}</h4>
                <p>${product.category}</p>
            </div>
            <div class="top-product-sales">
                ${product.sales} terjual
            </div>
        </div>
    `
    )
    .join("");
};

const renderRecentOrders = () => {
  const recentOrders = [...adminData.orders]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  domElements.recentOrders.innerHTML = recentOrders
    .map((order) => {
      const statusClass = `status-${order.status}`;
      const statusText =
        {
          pending: "Menunggu Pembayaran",
          processing: "Diproses",
          shipped: "Dikirim",
          delivered: "Selesai",
          cancelled: "Dibatalkan",
        }[order.status] || order.status;

      return `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer.name}</td>
                <td>${formatDate(order.date)}</td>
                <td>${formatCurrency(order.total)}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon btn-view" data-order-id="${
                          order.id
                        }">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon btn-edit" data-order-id="${
                          order.id
                        }">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    })
    .join("");
};

const renderRecentReviews = () => {
  const recentReviews = [...adminData.reviews]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  domElements.recentReviews.innerHTML = recentReviews
    .map(
      (review) => `
        <div class="review-item">
            <div class="reviewer-avatar">
                <img src="${review.customer.avatar}" alt="${
        review.customer.name
      }">
            </div>
            <div class="review-content">
                <div class="reviewer-name">${review.customer.name}</div>
                <div class="review-rating">
                    ${getRatingStars(review.rating)}
                </div>
                <div class="review-text">${review.comment}</div>
                <div class="review-date">${formatDate(review.date)} • ${
        review.productName
      }</div>
            </div>
        </div>
    `
    )
    .join("");
};

const initializeCharts = () => {
  if (!domElements.salesChart) return;

  const salesCtx = domElements.salesChart.getContext("2d");
  const salesChart = new Chart(salesCtx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ],
      datasets: [
        {
          label: "Penjualan (juta Rp)",
          data: [
            8.2, 7.5, 9.1, 8.8, 10.5, 11.2, 10.8, 11.5, 12.1, 11.8, 12.4, 13.2,
          ],
          borderColor: "#4361ee",
          backgroundColor: "rgba(67, 97, 238, 0.1)",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + " jt";
            },
          },
        },
      },
    },
  });

  return salesChart;
};

const initializeProductManagement = () => {
  renderProductsTable();

  setupPagination();

  setupProductFilters();
};

const renderProductsTable = () => {
  if (!domElements.productsTableBody) return;

  const startIndex = (currentProductPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  domElements.productsTableBody.innerHTML = productsToDisplay
    .map((product) => {
      const statusClass = `status-${product.status}`;
      const statusText =
        {
          active: "Aktif",
          inactive: "Nonaktif",
          outofstock: "Habis",
        }[product.status] || product.status;

      return `
            <tr>
                <td>
                    <input type="checkbox" class="product-checkbox" value="${
                      product.id
                    }">
                </td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${product.image}" alt="${
        product.name
      }" style="width: 50px; height: 50px; border-radius: 5px; object-fit: cover;">
                        <div>
                            <div style="font-weight: 600;">${product.name}</div>
                            <div style="font-size: 0.85rem; color: var(--gray-color);">ID: ${
                              product.id
                            }</div>
                        </div>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>
                    ${product.stock}
                    ${
                      product.stock < 10
                        ? '<span style="color: var(--danger-color); font-size: 0.8rem; margin-left: 5px;">(rendah)</span>'
                        : ""
                    }
                </td>
                <td>${formatCurrency(product.price)}</td>
                <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                <td>
                    ${getRatingStars(product.rating)}
                    <span style="font-size: 0.85rem; color: var(--gray-color); margin-left: 5px;">(${
                      product.reviewCount
                    })</span>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon btn-view" data-id="${
                          product.id
                        }">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon btn-edit" data-id="${
                          product.id
                        }">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon btn-delete" data-id="${
                          product.id
                        }">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    })
    .join("");

  if (domElements.productsCount) {
    domElements.productsCount.textContent = `${filteredProducts.length} produk ditemukan`;
  }

  if (domElements.currentPage) {
    domElements.currentPage.textContent = currentProductPage;
  }

  if (domElements.totalPages) {
    domElements.totalPages.textContent = Math.ceil(
      filteredProducts.length / productsPerPage
    );
  }

  if (domElements.prevPage) {
    domElements.prevPage.disabled = currentProductPage === 1;
  }

  if (domElements.nextPage) {
    domElements.nextPage.disabled =
      currentProductPage ===
      Math.ceil(filteredProducts.length / productsPerPage);
  }

  addProductActionListeners();
};

const setupPagination = () => {
  if (!domElements.prevPage || !domElements.nextPage) return;

  domElements.prevPage.addEventListener("click", () => {
    if (currentProductPage > 1) {
      currentProductPage--;
      renderProductsTable();
    }
  });

  domElements.nextPage.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentProductPage < totalPages) {
      currentProductPage++;
      renderProductsTable();
    }
  });

  if (domElements.selectAllProducts) {
    domElements.selectAllProducts.addEventListener("change", (e) => {
      const checkboxes = document.querySelectorAll(".product-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = e.target.checked;
      });
    });
  }
};

const setupProductFilters = () => {
  if (
    !domElements.productSearch ||
    !domElements.productCategoryFilter ||
    !domElements.productStatusFilter
  )
    return;

  domElements.productSearch.addEventListener("input", (e) => {
    filterProducts();
  });

  domElements.productCategoryFilter.addEventListener("change", () => {
    filterProducts();
  });

  domElements.productStatusFilter.addEventListener("change", () => {
    filterProducts();
  });
};

const filterProducts = () => {
  const searchTerm = domElements.productSearch
    ? domElements.productSearch.value.toLowerCase()
    : "";
  const categoryFilter = domElements.productCategoryFilter
    ? domElements.productCategoryFilter.value
    : "all";
  const statusFilter = domElements.productStatusFilter
    ? domElements.productStatusFilter.value
    : "all";

  filteredProducts = adminData.products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      (product.tags &&
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm)));

    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;

    let productStatus = product.status;
    if (!productStatus) {
      productStatus = product.stock > 0 ? "active" : "outofstock";
    }
    const matchesStatus =
      statusFilter === "all" || productStatus === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  currentProductPage = 1;

  renderProductsTable();
};

const addProductActionListeners = () => {
  document.querySelectorAll(".btn-view[data-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.currentTarget.getAttribute("data-id"));
      viewProduct(productId);
    });
  });

  document.querySelectorAll(".btn-edit[data-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.currentTarget.getAttribute("data-id"));
      editProduct(productId);
    });
  });

  document.querySelectorAll(".btn-delete[data-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.currentTarget.getAttribute("data-id"));
      deleteProduct(productId);
    });
  });
};

const viewProduct = (productId) => {
  const product = adminData.products.find((p) => p.id === productId);
  if (product) {
    showToast(`Melihat detail produk: ${product.name}`, "info");
  }
};

const editProduct = (productId) => {
  const product = adminData.products.find((p) => p.id === productId);
  if (product) {
    showToast(`Mengedit produk: ${product.name}`, "info");
    openEditProductModal(product);
  }
};

const deleteProduct = (productId) => {
  const product = adminData.products.find((p) => p.id === productId);
  if (product) {
    showConfirmModal(
      "Hapus Produk",
      `Apakah Anda yakin ingin menghapus produk "${product.name}"? Tindakan ini tidak dapat dibatalkan.`,
      () => {
        const index = adminData.products.findIndex((p) => p.id === productId);
        if (index !== -1) {
          adminData.products.splice(index, 1);

          localStorage.setItem(
            "umkmProducts",
            JSON.stringify(adminData.products)
          );

          filterProducts();

          updateDashboardCounts();

          showToast(`Produk "${product.name}" berhasil dihapus`, "success");
        }
      }
    );
  }
};

const openEditProductModal = (product) => {
  showToast(`Fitur edit produk akan segera tersedia`, "info");
};

const initializeOrders = () => {
  renderOrdersList();

  setupOrderFilters();
};

const renderOrdersList = () => {
  const ordersList = document.getElementById("orders-list");
  if (!ordersList) return;

  ordersList.innerHTML = adminData.orders
    .map((order) => {
      const statusClass = `status-${order.status}`;
      const statusText =
        {
          pending: "Menunggu Pembayaran",
          processing: "Diproses",
          shipped: "Dikirim",
          delivered: "Selesai",
          cancelled: "Dibatalkan",
        }[order.status] || order.status;

      const productCount = order.products.length;
      const firstProduct = order.products[0];

      return `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-id">${order.id}</div>
                        <div class="order-date">${formatDate(order.date)}</div>
                    </div>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
                
                <div class="order-customer">
                    <div class="customer-avatar">
                        <img src="${order.customer.avatar}" alt="${
        order.customer.name
      }">
                    </div>
                    <div class="customer-info">
                        <h4>${order.customer.name}</h4>
                        <p>${order.customer.email}</p>
                    </div>
                </div>
                
                <div class="order-products">
                    <div class="product-preview">
                        <img src="${getProductImage(firstProduct.id)}" alt="${
        firstProduct.name
      }">
                        ${
                          productCount > 1
                            ? `<span class="product-count">+${
                                productCount - 1
                              }</span>`
                            : ""
                        }
                    </div>
                </div>
                
                <div class="order-footer">
                    <div class="order-total">${formatCurrency(
                      order.total
                    )}</div>
                    <div class="order-actions">
                        <button class="btn btn-outline btn-sm" data-order-id="${
                          order.id
                        }">Detail</button>
                        <button class="btn btn-primary btn-sm" data-order-id="${
                          order.id
                        }">Proses</button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
};

const getProductImage = (productId) => {
  const product = adminData.products.find((p) => p.id === productId);
  return product
    ? product.image
    : "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";
};

const setupOrderFilters = () => {
  const filterTabs = document.querySelectorAll(".filter-tab[data-status]");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const status = tab.getAttribute("data-status");
      filterOrders(status);
    });
  });

  const orderSearch = document.getElementById("order-search");
  if (orderSearch) {
    orderSearch.addEventListener("input", () => {
      filterOrders();
    });
  }

  const dateFilter = document.getElementById("order-date-filter");
  if (dateFilter) {
    dateFilter.addEventListener("change", () => {
      filterOrders();
    });
  }
};

const filterOrders = (statusFilter = "all") => {
  const orderSearch = document.getElementById("order-search");
  const dateFilter = document.getElementById("order-date-filter");

  const searchTerm = orderSearch ? orderSearch.value.toLowerCase() : "";
  const dateValue = dateFilter ? dateFilter.value : "";

  const filteredOrders = adminData.orders.filter((order) => {
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;

    const matchesSearch =
      searchTerm === "" ||
      order.id.toLowerCase().includes(searchTerm) ||
      order.customer.name.toLowerCase().includes(searchTerm) ||
      order.customer.email.toLowerCase().includes(searchTerm);

    const matchesDate = dateValue === "" || order.date === dateValue;

    return matchesStatus && matchesSearch && matchesDate;
  });

  renderFilteredOrders(filteredOrders);
};

const renderFilteredOrders = (orders) => {
  const ordersList = document.getElementById("orders-list");
  if (!ordersList) return;

  ordersList.innerHTML = orders
    .map((order) => {
      const statusClass = `status-${order.status}`;
      const statusText =
        {
          pending: "Menunggu Pembayaran",
          processing: "Diproses",
          shipped: "Dikirim",
          delivered: "Selesai",
          cancelled: "Dibatalkan",
        }[order.status] || order.status;

      const productCount = order.products.length;
      const firstProduct = order.products[0];

      return `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-id">${order.id}</div>
                        <div class="order-date">${formatDate(order.date)}</div>
                    </div>
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
                
                <div class="order-customer">
                    <div class="customer-avatar">
                        <img src="${order.customer.avatar}" alt="${
        order.customer.name
      }">
                    </div>
                    <div class="customer-info">
                        <h4>${order.customer.name}</h4>
                        <p>${order.customer.email}</p>
                    </div>
                </div>
                
                <div class="order-products">
                    <div class="product-preview">
                        <img src="${getProductImage(firstProduct.id)}" alt="${
        firstProduct.name
      }">
                        ${
                          productCount > 1
                            ? `<span class="product-count">+${
                                productCount - 1
                              }</span>`
                            : ""
                        }
                    </div>
                </div>
                
                <div class="order-footer">
                    <div class="order-total">${formatCurrency(
                      order.total
                    )}</div>
                    <div class="order-actions">
                        <button class="btn btn-outline btn-sm" data-order-id="${
                          order.id
                        }">Detail</button>
                        <button class="btn btn-primary btn-sm" data-order-id="${
                          order.id
                        }">Proses</button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
};

const initializeCustomers = () => {
  renderCustomersTable();
};

const renderCustomersTable = () => {
  const customersTableBody = document.getElementById("customers-table-body");
  if (!customersTableBody) return;

  customersTableBody.innerHTML = adminData.customers
    .map((customer) => {
      return `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${customer.avatar}" alt="${
        customer.name
      }" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                        <div>
                            <div style="font-weight: 600;">${
                              customer.name
                            }</div>
                            <div style="font-size: 0.85rem; color: var(--gray-color);">ID: ${
                              customer.id
                            }</div>
                        </div>
                    </div>
                </td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.totalOrders}</td>
                <td>${formatCurrency(customer.totalSpent)}</td>
                <td>${formatDate(customer.joinDate)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon btn-view" data-customer-id="${
                          customer.id
                        }">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon btn-edit" data-customer-id="${
                          customer.id
                        }">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    })
    .join("");
};

const initializeReviews = () => {
  renderAllReviews();

  setupReviewFilters();
};

const renderAllReviews = () => {
  const allReviews = document.getElementById("all-reviews");
  if (!allReviews) return;

  allReviews.innerHTML = adminData.reviews
    .map((review) => {
      const approvedBadge = review.approved
        ? '<span class="status-badge status-delivered" style="margin-left: 10px;">Disetujui</span>'
        : '<span class="status-badge status-pending" style="margin-left: 10px;">Menunggu</span>';

      return `
            <div class="review-item">
                <div class="reviewer-avatar">
                    <img src="${review.customer.avatar}" alt="${
        review.customer.name
      }">
                </div>
                <div class="review-content">
                    <div style="display: flex; align-items: center; margin-bottom: 5px;">
                        <div class="reviewer-name">${review.customer.name}</div>
                        ${approvedBadge}
                    </div>
                    <div class="review-rating">
                        ${getRatingStars(review.rating)}
                        <span style="margin-left: 10px; color: var(--gray-color); font-size: 0.9rem;">${
                          review.productName
                        }</span>
                    </div>
                    <div class="review-text">${review.comment}</div>
                    <div class="review-date">${formatDate(review.date)}</div>
                    <div style="margin-top: 10px; display: flex; gap: 10px;">
                        <button class="btn btn-outline btn-sm" data-review-id="${
                          review.id
                        }" data-action="approve">
                            <i class="fas fa-check"></i> Setujui
                        </button>
                        <button class="btn btn-outline btn-sm" data-review-id="${
                          review.id
                        }" data-action="delete">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
};

const setupReviewFilters = () => {
  const filterTabs = document.querySelectorAll(
    ".filter-tab[data-rating], .filter-tab[data-status]"
  );

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-tab")
        .forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const rating = tab.getAttribute("data-rating");
      const status = tab.getAttribute("data-status");
      filterReviews(rating, status);
    });
  });

  const reviewsSort = document.getElementById("reviews-sort");
  if (reviewsSort) {
    reviewsSort.addEventListener("change", () => {
      filterReviews();
    });
  }
};

const filterReviews = (ratingFilter = "all", statusFilter = "all") => {
  const reviewsSort = document.getElementById("reviews-sort");
  const sortValue = reviewsSort ? reviewsSort.value : "newest";

  let filteredReviews = [...adminData.reviews];

  if (ratingFilter !== "all") {
    filteredReviews = filteredReviews.filter(
      (review) => review.rating === parseInt(ratingFilter)
    );
  }

  if (statusFilter === "unapproved") {
    filteredReviews = filteredReviews.filter((review) => !review.approved);
  }

  switch (sortValue) {
    case "newest":
      filteredReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "oldest":
      filteredReviews.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "highest":
      filteredReviews.sort((a, b) => b.rating - a.rating);
      break;
    case "lowest":
      filteredReviews.sort((a, b) => a.rating - b.rating);
      break;
  }

  renderFilteredReviews(filteredReviews);
};

const renderFilteredReviews = (reviews) => {
  const allReviews = document.getElementById("all-reviews");
  if (!allReviews) return;

  allReviews.innerHTML = reviews
    .map((review) => {
      const approvedBadge = review.approved
        ? '<span class="status-badge status-delivered" style="margin-left: 10px;">Disetujui</span>'
        : '<span class="status-badge status-pending" style="margin-left: 10px;">Menunggu</span>';

      return `
            <div class="review-item">
                <div class="reviewer-avatar">
                    <img src="${review.customer.avatar}" alt="${
        review.customer.name
      }">
                </div>
                <div class="review-content">
                    <div style="display: flex; align-items: center; margin-bottom: 5px;">
                        <div class="reviewer-name">${review.customer.name}</div>
                        ${approvedBadge}
                    </div>
                    <div class="review-rating">
                        ${getRatingStars(review.rating)}
                        <span style="margin-left: 10px; color: var(--gray-color); font-size: 0.9rem;">${
                          review.productName
                        }</span>
                    </div>
                    <div class="review-text">${review.comment}</div>
                    <div class="review-date">${formatDate(review.date)}</div>
                    <div style="margin-top: 10px; display: flex; gap: 10px;">
                        <button class="btn btn-outline btn-sm" data-review-id="${
                          review.id
                        }" data-action="approve">
                            <i class="fas fa-check"></i> Setujui
                        </button>
                        <button class="btn btn-outline btn-sm" data-review-id="${
                          review.id
                        }" data-action="delete">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
};

const initializeMedia = () => {
  renderMediaGrid();

  setupMediaFilters();

  setupFileUpload();
};

const renderMediaGrid = () => {
  const mediaGrid = document.getElementById("media-grid");
  if (!mediaGrid) return;

  mediaGrid.innerHTML = adminData.media
    .map((media) => {
      const isImage = media.type === "image";
      const isVideo = media.type === "video";

      return `
            <div class="media-item" data-type="${media.type}">
                <div class="media-preview">
                    ${
                      isImage
                        ? `<img src="${media.url}" alt="${media.name}">`
                        : ""
                    }
                    ${isVideo ? `<video src="${media.url}" muted></video>` : ""}
                    <span class="media-type">${media.type.toUpperCase()}</span>
                </div>
                <div class="media-info">
                    <div class="media-name">${media.name}</div>
                    <div class="media-meta">
                        <span>${media.size}</span>
                        <span>${formatDate(media.uploaded)}</span>
                    </div>
                    <div class="media-actions">
                        <button class="btn-icon btn-view" data-media-id="${
                          media.id
                        }">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon btn-edit" data-media-id="${
                          media.id
                        }">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon btn-delete" data-media-id="${
                          media.id
                        }">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
};

const setupMediaFilters = () => {
  const filterTabs = document.querySelectorAll(".filter-tab[data-type]");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-tab")
        .forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      const type = tab.getAttribute("data-type");
      filterMedia(type);
    });
  });

  const mediaSort = document.getElementById("media-sort");
  if (mediaSort) {
    mediaSort.addEventListener("change", () => {
      filterMedia();
    });
  }
};

const filterMedia = (typeFilter = "all") => {
  const mediaSort = document.getElementById("media-sort");
  const sortValue = mediaSort ? mediaSort.value : "newest";

  let filteredMedia = [...adminData.media];

  if (typeFilter !== "all") {
    filteredMedia = filteredMedia.filter((media) => media.type === typeFilter);
  }

  if (typeFilter === "unused") {
    filteredMedia = filteredMedia.filter((media) => media.usedIn.length === 0);
  }

  switch (sortValue) {
    case "newest":
      filteredMedia.sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded));
      break;
    case "oldest":
      filteredMedia.sort((a, b) => new Date(a.uploaded) - new Date(b.uploaded));
      break;
    case "name":
      filteredMedia.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "size":
      filteredMedia.sort((a, b) => {
        const sizeA = parseFloat(a.size);
        const sizeB = parseFloat(b.size);
        return sizeB - sizeA;
      });
      break;
  }

  renderFilteredMedia(filteredMedia);
};

const renderFilteredMedia = (media) => {
  const mediaGrid = document.getElementById("media-grid");
  if (!mediaGrid) return;

  mediaGrid.innerHTML = media
    .map((item) => {
      const isImage = item.type === "image";
      const isVideo = item.type === "video";

      return `
            <div class="media-item">
                <div class="media-preview">
                    ${
                      isImage
                        ? `<img src="${item.url}" alt="${item.name}">`
                        : ""
                    }
                    ${isVideo ? `<video src="${item.url}" muted></video>` : ""}
                    <span class="media-type">${item.type.toUpperCase()}</span>
                </div>
                <div class="media-info">
                    <div class="media-name">${item.name}</div>
                    <div class="media-meta">
                        <span>${item.size}</span>
                        <span>${formatDate(item.uploaded)}</span>
                    </div>
                    <div class="media-actions">
                        <button class="btn-icon btn-view" data-media-id="${
                          item.id
                        }">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon btn-edit" data-media-id="${
                          item.id
                        }">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon btn-delete" data-media-id="${
                          item.id
                        }">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
};

const setupFileUpload = () => {
  const fileUpload = document.getElementById("file-upload");
  const uploadArea = document.getElementById("upload-area");

  if (!fileUpload || !uploadArea) return;

  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = "#4361ee";
    uploadArea.style.backgroundColor = "rgba(67, 97, 238, 0.1)";
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.style.borderColor = "";
    uploadArea.style.backgroundColor = "";
  });

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = "";
    uploadArea.style.backgroundColor = "";

    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  fileUpload.addEventListener("change", (e) => {
    const files = e.target.files;
    handleFiles(files);
  });
};

const handleFiles = (files) => {
  if (files.length === 0) return;

  showToast(`${files.length} file dipilih. Mengupload...`, "info");

  setTimeout(() => {
    for (let i = 0; i < Math.min(files.length, 3); i++) {
      const file = files[i];
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");

      if (!isImage && !isVideo) {
        showToast(
          `File ${file.name} tidak didukung. Hanya gambar dan video.`,
          "error"
        );
        continue;
      }

      const newMedia = {
        id: adminData.media.length + 1,
        name: file.name,
        url: isImage
          ? "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          : "https://assets.mixkit.co/videos/preview/mixkit-candle-flame-flickering-close-up-4083-large.mp4",
        type: isImage ? "image" : "video",
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        uploaded: new Date().toISOString().split("T")[0],
        usedIn: [],
      };

      adminData.media.unshift(newMedia);
    }

    renderMediaGrid();

    showToast(`${Math.min(files.length, 3)} file berhasil diupload`, "success");

    document.getElementById("file-upload").value = "";
  }, 1500);
};

const initializeNotifications = () => {
  renderNotifications();

  updateNotificationCount();
};

const renderNotifications = () => {
  if (!domElements.notificationList) return;

  const unreadCount = adminData.notifications.filter((n) => !n.read).length;

  domElements.notificationList.innerHTML = adminData.notifications
    .map((notification) => {
      const unreadClass = notification.read ? "" : "unread";

      return `
            <div class="notification-item ${unreadClass}" data-id="${notification.id}">
                <div class="notification-title">${notification.title}</div>
                <div class="notification-message">${notification.message}</div>
                <div class="notification-time">${notification.time}</div>
            </div>
        `;
    })
    .join("");

  document.querySelectorAll(".notification-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const notificationId = parseInt(e.currentTarget.getAttribute("data-id"));
      markNotificationAsRead(notificationId);
    });
  });
};

const updateNotificationCount = () => {
  if (!domElements.notificationCount) return;

  const unreadCount = adminData.notifications.filter((n) => !n.read).length;
  domElements.notificationCount.textContent = unreadCount;

  if (unreadCount === 0) {
    domElements.notificationCount.style.display = "none";
  } else {
    domElements.notificationCount.style.display = "flex";
  }
};

const markNotificationAsRead = (notificationId) => {
  const notification = adminData.notifications.find(
    (n) => n.id === notificationId
  );
  if (notification && !notification.read) {
    notification.read = true;
    updateNotificationCount();

    const notificationItem = document.querySelector(
      `.notification-item[data-id="${notificationId}"]`
    );
    if (notificationItem) {
      notificationItem.classList.remove("unread");
    }
  }
};

const setupEventListeners = () => {
  if (domElements.sidebarToggle) {
    domElements.sidebarToggle.addEventListener("click", () => {
      domElements.sidebar.classList.toggle("collapsed");
      domElements.mainContent.classList.toggle("expanded");
    });
  }

  if (domElements.mobileMenuToggle) {
    domElements.mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      domElements.sidebar.classList.toggle("active");
      if (domElements.sidebarOverlay) {
        domElements.sidebarOverlay.classList.toggle("active");
      }
    });
  }

  const backToStoreBtn = document.getElementById("back-to-store-btn");
  if (backToStoreBtn) {
    backToStoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      showConfirmModal(
        "Kembali ke Toko",
        "Apakah Anda yakin ingin kembali ke halaman toko? Perubahan yang belum disimpan akan hilang.",
        function () {
          window.location.href = "index.html";
        }
      );
    });
  }

  if (domElements.sidebarOverlay) {
    domElements.sidebarOverlay.addEventListener("click", () => {
      domElements.sidebar.classList.remove("active");
      domElements.sidebarOverlay.classList.remove("active");
    });
  }

  domElements.menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      domElements.menuItems.forEach((i) => i.classList.remove("active"));

      item.classList.add("active");

      const sectionId = item.getAttribute("href").substring(1);

      currentSection = sectionId;

      updatePageTitle(sectionId);

      domElements.contentSections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === sectionId) {
          section.classList.add("active");
        }
      });

      if (window.innerWidth <= 992) {
        domElements.sidebar.classList.remove("active");
        if (domElements.sidebarOverlay) {
          domElements.sidebarOverlay.classList.remove("active");
        }
      }

      initializeSection(sectionId);
    });
  });

  if (domElements.notificationBtn) {
    domElements.notificationBtn.addEventListener("click", () => {
      domElements.notificationPanel.classList.add("active");
    });
  }

  if (domElements.closeNotifications) {
    domElements.closeNotifications.addEventListener("click", () => {
      domElements.notificationPanel.classList.remove("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (
      domElements.notificationPanel &&
      domElements.notificationBtn &&
      !domElements.notificationPanel.contains(e.target) &&
      !domElements.notificationBtn.contains(e.target) &&
      domElements.notificationPanel.classList.contains("active")
    ) {
      domElements.notificationPanel.classList.remove("active");
    }
  });

  if (domElements.addProductBtn) {
    domElements.addProductBtn.addEventListener("click", () => {
      domElements.addProductModal.classList.add("active");
    });
  }

  if (domElements.closeAddProductModal) {
    domElements.closeAddProductModal.addEventListener("click", () => {
      domElements.addProductModal.classList.remove("active");
    });
  }

  if (domElements.productForm) {
    domElements.productForm.addEventListener("submit", (e) => {
      e.preventDefault();
      saveNewProduct();
    });
  }

  const cancelProductForm = document.getElementById("cancel-product-form");
  if (cancelProductForm) {
    cancelProductForm.addEventListener("click", () => {
      domElements.addProductModal.classList.remove("active");
      domElements.productForm.reset();
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("active");
    }
  });

  if (domElements.closeConfirmModal) {
    domElements.closeConfirmModal.addEventListener("click", () => {
      domElements.confirmModal.classList.remove("active");
    });
  }

  if (domElements.confirmCancel) {
    domElements.confirmCancel.addEventListener("click", () => {
      domElements.confirmModal.classList.remove("active");
    });
  }

  if (domElements.logoutBtn) {
    domElements.logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showConfirmModal(
        "Konfirmasi Keluar",
        "Apakah Anda yakin ingin keluar dari panel admin?",
        () => {
          localStorage.removeItem("umkmUser");
          window.location.href = "login.html";
        }
      );
    });
  }

  console.log("Back to store button:", domElements.backToStoreBtn);

  if (domElements.backToStoreBtn) {
    const newBackBtn = domElements.backToStoreBtn.cloneNode(true);
    domElements.backToStoreBtn.parentNode.replaceChild(
      newBackBtn,
      domElements.backToStoreBtn
    );
    domElements.backToStoreBtn = newBackBtn;

    domElements.backToStoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      showConfirmModal(
        "Kembali ke Toko",
        "Apakah Anda yakin ingin kembali ke halaman toko?",
        () => {
          window.location.href = "index.html";
        }
      );

      return false;
    });
  }

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 992 && domElements.sidebar) {
      const isSidebarOpen = domElements.sidebar.classList.contains("active");
      const isClickInsideSidebar = domElements.sidebar.contains(e.target);
      const isClickOnToggle =
        domElements.mobileMenuToggle &&
        domElements.mobileMenuToggle.contains(e.target);

      if (isSidebarOpen && !isClickInsideSidebar && !isClickOnToggle) {
        domElements.sidebar.classList.remove("active");
        if (domElements.sidebarOverlay) {
          domElements.sidebarOverlay.classList.remove("active");
        }
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      domElements.sidebar.classList.remove("active");
      if (domElements.sidebarOverlay) {
        domElements.sidebarOverlay.classList.remove("active");
      }
    }
  });
};

const updatePageTitle = (sectionId) => {
  if (!domElements.pageTitle) return;

  const titles = {
    dashboard: "Dashboard",
    produk: "Manajemen Produk",
    pesanan: "Pesanan",
    pelanggan: "Pelanggan",
    analitik: "Analitik & Laporan",
    ulasan: "Ulasan & Rating",
    media: "Media Library",
    pengaturan: "Pengaturan",
  };

  domElements.pageTitle.textContent = titles[sectionId] || "Dashboard";
};

const initializeSection = (sectionId) => {
  switch (sectionId) {
    case "analitik":
      initializeAnalyticsCharts();
      break;
    case "pengaturan":
      initializeSettings();
      break;
  }
};

const initializeAnalyticsCharts = () => {
  const analyticsCtx = document.getElementById("analyticsChart");
  if (analyticsCtx) {
    new Chart(analyticsCtx.getContext("2d"), {
      type: "bar",
      data: {
        labels: [
          "Makanan",
          "Kerajinan",
          "Fashion",
          "Kecantikan",
          "Rumah Tangga",
        ],
        datasets: [
          {
            label: "Penjualan (juta Rp)",
            data: [5.2, 3.8, 2.5, 1.8, 1.2],
            backgroundColor: [
              "#4361ee",
              "#7209b7",
              "#f72585",
              "#4cc9f0",
              "#ff9e00",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value + " jt";
              },
            },
          },
        },
      },
    });
  }

  const categoryCtx = document.getElementById("categoryChart");
  if (categoryCtx) {
    new Chart(categoryCtx.getContext("2d"), {
      type: "pie",
      data: {
        labels: ["Makanan", "Kerajinan", "Fashion", "Lainnya"],
        datasets: [
          {
            data: [45, 25, 20, 10],
            backgroundColor: ["#4361ee", "#7209b7", "#f72585", "#4cc9f0"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }

  const trafficCtx = document.getElementById("trafficChart");
  if (trafficCtx) {
    new Chart(trafficCtx.getContext("2d"), {
      type: "doughnut",
      data: {
        labels: ["Pencarian", "Sosial Media", "Direct", "Referral"],
        datasets: [
          {
            data: [40, 30, 20, 10],
            backgroundColor: ["#4361ee", "#7209b7", "#f72585", "#4cc9f0"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }
};

const initializeSettings = () => {
  const settingsTabs = document.querySelectorAll(".settings-tab");
  const settingsPanels = document.querySelectorAll(".settings-panel");

  settingsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      settingsTabs.forEach((t) => t.classList.remove("active"));
      settingsPanels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");

      const tabId = tab.getAttribute("data-tab");
      const panel = document.getElementById(`${tabId}-settings`);
      if (panel) {
        panel.classList.add("active");
      }
    });
  });

  const saveGeneralSettings = document.getElementById("save-general-settings");
  if (saveGeneralSettings) {
    saveGeneralSettings.addEventListener("click", () => {
      showToast("Pengaturan berhasil disimpan", "success");
    });
  }
};

const saveNewProduct = () => {
  if (!domElements.productForm) return;

  const name = document.getElementById("product-name").value;
  const category = document.getElementById("product-category").value;
  const price = parseInt(document.getElementById("product-price").value);
  const stock = parseInt(document.getElementById("product-stock").value);
  const description = document.getElementById("product-description").value;
  const tags = document
    .getElementById("product-tags")
    .value.split(",")
    .map((tag) => tag.trim());
  const isFeatured = document.getElementById("product-featured").checked;
  const isActive = document.getElementById("product-active").checked;

  const newProduct = {
    id: adminData.products.length + 1,
    name,
    category,
    price,
    originalPrice: price * 1.3,
    description,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    video: "",
    rating: 4.5,
    reviewCount: 0,
    stock,
    seller: currentAdmin.name,
    location: "Indonesia",
    tags,
    isFeatured,
    isVideoAvailable: false,
    status: isActive ? "active" : "inactive",
    createdAt: new Date().toISOString().split("T")[0],
    views: 0,
    sales: 0,
  };

  adminData.products.unshift(newProduct);

  localStorage.setItem("umkmProducts", JSON.stringify(adminData.products));

  domElements.addProductModal.classList.remove("active");
  domElements.productForm.reset();

  filterProducts();

  updateDashboardCounts();

  showToast(`Produk "${name}" berhasil ditambahkan`, "success");
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("Admin panel initialized");

  console.log(
    "Mobile menu toggle found:",
    document.getElementById("mobile-sidebar-toggle")
  );
  console.log(
    "Back to store button found:",
    document.getElementById("back-to-store")
  );

  initializeAdmin();
  setupEventListeners();

  if (currentSection) {
    updatePageTitle(currentSection);
    initializeSection(currentSection);
  }

  const backBtn = document.getElementById("back-to-store");
  if (backBtn) {
    backBtn.addEventListener("click", function (e) {
      console.log("Tombol kembali ke toko diklik!");
      e.preventDefault();
      window.location.href = "index.html";
    });
  }
});
