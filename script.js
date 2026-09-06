// Инициализация данных
class Store {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.products = [
            { id: 1, name: "Ноутбук", price: 999, emoji: "💻" },
            { id: 2, name: "Смартфон", price: 699, emoji: "📱" },
            { id: 3, name: "Наушники", price: 199, emoji: "🎧" },
            { id: 4, name: "Клавиатура", price: 89, emoji: "⌨️" },
            { id: 5, name: "Монитор", price: 299, emoji: "🖥️" },
            { id: 6, name: "Мышь", price: 49, emoji: "🖱️" }
        ];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.purchases = JSON.parse(localStorage.getItem('purchases')) || [];
        this.isRegistering = false;
        
        this.init();
    }
    
    init() {
        this.updateUI();
        this.displayProducts();
        this.bindEvents();
        
        if (this.currentUser) {
            this.showSection('products');
        }
    }
    
    bindEvents() {
        document.getElementById('authForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAuth();
        });
        
        document.getElementById('paymentForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processPayment();
        });
    }
    
    updateUI() {
        const cartCount = document.getElementById('cartCount');
        cartCount.textContent = this.cart.length;
        
        const loginLink = document.getElementById('loginLink');
        const accountLink = document.getElementById('accountLink');
        const logoutLink = document.getElementById('logoutLink');
        
        if (this.currentUser) {
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline';
            accountLink.textContent = `👤 ${this.currentUser.username}`;
        } else {
            loginLink.style.display = 'inline';
            logoutLink.style.display = 'none';
            accountLink.textContent = 'Аккаунт';
        }
    }
    
    showSection(section) {
        const sections = ['products', 'cart', 'account', 'login', 'checkout'];
        sections.forEach(s => {
            document.getElementById(`${s}Section`).style.display = 'none';
        });
        
        document.getElementById(`${section}Section`).style.display = 'block';
        
        if (section === 'cart') {
            this.displayCart();
        } else if (section === 'account') {
            this.displayAccount();
        } else if (section === 'checkout') {
            this.displayCheckout();
        }
    }
    
    displayProducts() {
        const productsList = document.getElementById('productsList');
        productsList.innerHTML = '';
        
        this.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-image">${product.emoji}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <button class="btn btn-primary" onclick="store.addToCart(${product.id})">
                    В корзину
                </button>
            `;
            productsList.appendChild(productCard);
        });
    }
    
    addToCart(productId) {
        if (!this.currentUser) {
            alert('Пожалуйста, войдите в систему для совершения покупок');
            this.showSection('login');
            return;
        }
        
        this.cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateUI();
        alert('Товар добавлен в корзину!');
    }
    
    displayCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p>Корзина пуста</p>';
            cartTotal.innerHTML = '';
            return;
        }
        
        cartItems.innerHTML = '';
        let total = 0;
        
        this.cart.forEach((productId, index) => {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <span>${product.emoji} ${product.name}</span>
                    <span>$${product.price}</span>
                    <button class="btn btn-danger" onclick="store.removeFromCart(${index})">
                        Удалить
                    </button>
                `;
                cartItems.appendChild(cartItem);
                total += product.price;
            }
        });
        
        cartTotal.innerHTML = `<strong>Итого: $${total}</strong>`;
    }
    
    removeFromCart(index) {
        this.cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateUI();
        this.displayCart();
    }
    
    handleAuth() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const authMessage = document.getElementById('authMessage');
        
        if (this.isRegistering) {
            // Регистрация
            if (password !== confirmPassword) {
                authMessage.className = 'message error';
                authMessage.textContent = 'Пароли не совпадают';
                return;
            }
            
            if (this.users.find(u => u.username === username)) {
                authMessage.className = 'message error';
                authMessage.textContent = 'Пользователь с таким именем уже существует';
                return;
            }
            
            const newUser = {
                id: Date.now(),
                username,
                password,
                email,
                createdAt: new Date().toISOString()
            };
            
            this.users.push(newUser);
            localStorage.setItem('users', JSON.stringify(this.users));
            this.currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            authMessage.className = 'message success';
            authMessage.textContent = 'Регистрация успешна!';
            
            setTimeout(() => {
                this.updateUI();
                this.showSection('products');
            }, 1000);
        } else {
            // Вход
            const user = this.users.find(u => u.username === username && u.password === password);
            
            if (user) {
                this.currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                authMessage.className = 'message success';
                authMessage.textContent = 'Вход выполнен успешно!';
                
                setTimeout(() => {
                    this.updateUI();
                    this.showSection('products');
                }, 1000);
            } else {
                authMessage.className = 'message error';
                authMessage.textContent = 'Неверное имя пользователя или пароль';
            }
        }
    }
    
    toggleAuthMode() {
        this.isRegistering = !this.isRegistering;
        
        const authTitle = document.getElementById('authTitle');
        const authButton = document.getElementById('authButton');
        const toggleAuthLink = document.getElementById('toggleAuthLink');
        const emailGroup = document.getElementById('emailGroup');
        const confirmPasswordGroup = document.getElementById('confirmPasswordGroup');
        
        if (this.isRegistering) {
            authTitle.textContent = 'Регистрация';
            authButton.textContent = 'Зарегистрироваться';
            toggleAuthLink.textContent = 'Уже есть аккаунт? Войти';
            emailGroup.style.display = 'block';
            confirmPasswordGroup.style.display = 'block';
        } else {
            authTitle.textContent = 'Вход в систему';
            authButton.textContent = 'Войти';
            toggleAuthLink.textContent = 'Нет аккаунта? Зарегистрироваться';
            emailGroup.style.display = 'none';
            confirmPasswordGroup.style.display = 'none';
        }
    }
    
    displayAccount() {
        const accountInfo = document.getElementById('accountInfo');
        const purchaseHistory = document.getElementById('purchaseHistory');
        
        if (!this.currentUser) {
            accountInfo.innerHTML = '<p>Пожалуйста, войдите в систему</p>';
            purchaseHistory.innerHTML = '';
            return;
        }
        
        accountInfo.innerHTML = `
            <h3>Информация об аккаунте</h3>
            <p><strong>Имя пользователя:</strong> ${this.currentUser.username}</p>
            <p><strong>Email:</strong> ${this.currentUser.email || 'Не указан'}</p>
            <p><strong>Дата регистрации:</strong> ${new Date(this.currentUser.createdAt).toLocaleDateString()}</p>
        `;
        
        // История покупок
        const userPurchases = this.purchases.filter(p => p.userId === this.currentUser.id);
        
        if (userPurchases.length === 0) {
            purchaseHistory.innerHTML = '<h3>История покупок</h3><p>У вас пока нет покупок</p>';
        } else {
            let historyHTML = '<h3>История покупок</h3><table class="purchase-history-table">';
            historyHTML += '<tr><th>Дата</th><th>Товары</th><th>Сумма</th></tr>';
            
            userPurchases.forEach(purchase => {
                const productsList = purchase.items.map(item => {
                    const product = this.products.find(p => p.id === item);
                    return product ? product.name : 'Неизвестный товар';
                }).join(', ');
                
                historyHTML += `
                    <tr>
                        <td>${new Date(purchase.date).toLocaleDateString()}</td>
                        <td>${productsList}</td>
                        <td>$${purchase.total}</td>
                    </tr>
                `;
            });
            
            historyHTML += '</table>';
            purchaseHistory.innerHTML = historyHTML;
        }
    }
    
    displayCheckout() {
        const checkoutSummary = document.getElementById('checkoutSummary');
        
        if (this.cart.length === 0) {
            checkoutSummary.innerHTML = '<p>Корзина пуста. Добавьте товары перед оформлением заказа.</p>';
            return;
        }
        
        let summaryHTML = '<h3>Ваш заказ:</h3><ul>';
        let total = 0;
        
        this.cart.forEach(productId => {
            const product = this.products.find(p => p.id === productId);
            if (product) {
                summaryHTML += `<li>${product.emoji} ${product.name} - $${product.price}</li>`;
                total += product.price;
            }
        });
        
        summaryHTML += `</ul><p><strong>Итого к оплате: $${total}</strong></p>`;
        checkoutSummary.innerHTML = summaryHTML;
    }
    
    processPayment() {
        const paymentMessage = document.getElementById('paymentMessage');
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        
        // Простая валидация
        if (cardNumber.length < 16 || expiryDate.length < 4 || cvv.length < 3) {
            paymentMessage.className = 'message error';
            paymentMessage.textContent = 'Пожалуйста, проверьте правильность введенных данных';
            return;
        }
        
        // Создание записи о покупке
        const purchase = {
            id: Date.now(),
            userId: this.currentUser.id,
            items: [...this.cart],
            total: this.cart.reduce((sum, productId) => {
                const product = this.products.find(p => p.id === productId);
                return sum + (product ? product.price : 0);
            }, 0),
            date: new Date().toISOString()
        };
        
        this.purchases.push(purchase);
        localStorage.setItem('purchases', JSON.stringify(this.purchases));
        
        // Очистка корзины
        this.cart = [];
        localStorage.setItem('cart', JSON.stringify(this.cart));
        
        paymentMessage.className = 'message success';
        paymentMessage.textContent = 'Оплата прошла успешно! Спасибо за покупку!';
        
        setTimeout(() => {
            this.updateUI();
            this.showSection('account');
        }, 2000);
    }
    
    checkout() {
        if (!this.currentUser) {
            alert('Пожалуйста, войдите в систему для оформления заказа');
            this.showSection('login');
            return;
        }
        
        if (this.cart.length === 0) {
            alert('Корзина пуста');
            return;
        }
        
        this.showSection('checkout');
    }
    
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateUI();
        this.showSection('products');
    }
}

// Создание экземпляра магазина
const store = new Store();

// Глобальные функции для HTML onclick
function showSection(section) {
    store.showSection(section);
}

function toggleAuthMode() {
    store.toggleAuthMode();
}

function logout() {
    store.logout();
}
