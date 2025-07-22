const users = {
    "9063163226": { code: "1234", balance: 5000, history: ["Bought Book - ₹500", "ATM Withdrawal - ₹1000"] }
};

function login() {
    const card = document.getElementById("loginCard").value;
    const code = document.getElementById("loginCode").value;

    if (users[card] && users[card].code === code) {
        sessionStorage.setItem("cardNumber", card);
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("machineSection").style.display = "block";
        document.getElementById("exitBtn").style.display = "inline-block";
        document.getElementById("cardNumber").value = card;
        document.getElementById("secretCode").value = code;
    } else {
        alert("Invalid credentials!");
    }
}

function registerCard() {
    const newCard = document.getElementById("newCard").value;
    const newCode = document.getElementById("newCode").value;

    if (newCard && newCode) {
        users[newCard] = { code: newCode, balance: 0, history: [] };
        alert("Card registered successfully!");
    } else {
        alert("Please enter both card number and code!");
    }
}

function swipeCard() {
    const card = document.getElementById("cardNumber").value;
    const code = document.getElementById("secretCode").value;
    const amount = parseInt(document.getElementById("amount").value);

    if (users[card] && users[card].code === code) {
        if (amount > 0 && users[card].balance >= amount) {
            users[card].balance -= amount;
            const time = new Date().toLocaleString();
            users[card].history.push(`Swiped ₹${amount} on ${time}`);
            document.getElementById("message").innerText = `Transaction Successful!`;
            document.getElementById("receipt").innerText =
                `--- RECEIPT ---\nCard No: ${card}\nAmount: ₹${amount}\nTime: ${time}\n-----------------`;
        } else {
            document.getElementById("message").innerText = "Insufficient balance or invalid amount!";
        }
    } else {
        document.getElementById("message").innerText = "Invalid card or code.";
    }
}

function checkBalance() {
    const card = document.getElementById("cardNumber").value;
    const code = document.getElementById("secretCode").value;
    if (users[card] && users[card].code === code) {
        document.getElementById("message").innerText = "Balance: ₹" + users[card].balance;
    } else {
        document.getElementById("message").innerText = "Invalid card or code.";
    }
}

function viewHistory() {
    const card = document.getElementById("cardNumber").value;
    const code = document.getElementById("secretCode").value;
    if (users[card] && users[card].code === code) {
        document.getElementById("message").innerText = "History: " + users[card].history.join(", ");
    } else {
        document.getElementById("message").innerText = "Invalid card or code.";
    }
}

function exitApp() {
    sessionStorage.clear();
    document.getElementById("machineSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("exitBtn").style.display = "none";
}

// Language Support
const translations = {
    en: {
        loginTitle: "Login",
        cardPlaceholder: "Enter Card Number",
        codePlaceholder: "Enter Secret Code",
        loginBtn: "Login",
        registerTitle: "New Card? Register Below",
        newCardPlaceholder: "New Card Number",
        newCodePlaceholder: "New Secret Code",
        registerBtn: "Register",
        swipeTitle: "Swipe Your Card",
        amountPlaceholder: "Enter Amount to Swipe",
        swipeBtn: "💳 Swipe",
        balanceBtn: "💰 Balance",
        historyBtn: "📜 History"
    },
    te: {
        loginTitle: "ప్రవేశించండి",
        cardPlaceholder: "కార్డు నంబర్ నమోదు చేయండి",
        codePlaceholder: "సీక్రెట్ కోడ్ నమోదు చేయండి",
        loginBtn: "ప్రవేశించండి",
        registerTitle: "కొత్త కార్డ్? నమోదు చేయండి",
        newCardPlaceholder: "కొత్త కార్డ్ నంబర్",
        newCodePlaceholder: "కొత్త సీక్రెట్ కోడ్",
        registerBtn: "నమోదు",
        swipeTitle: "మీ కార్డును స్వైప్ చేయండి",
        amountPlaceholder: "స్వైప్ చేయాల్సిన మొత్తం",
        swipeBtn: "💳 స్వైప్",
        balanceBtn: "💰 బ్యాలెన్స్",
        historyBtn: "📜 చరిత్ర"
    },
    kn: {
        loginTitle: "ಲಾಗಿನ್ ಮಾಡಿ",
        cardPlaceholder: "ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
        codePlaceholder: "ಸೀಕ್ರೆಟ್ ಕೋಡ್ ನಮೂದಿಸಿ",
        loginBtn: "ಲಾಗಿನ್",
        registerTitle: "ಹೊಸ ಕಾರ್ಡ್? ನೋಂದಾಯಿಸಿ",
        newCardPlaceholder: "ಹೊಸ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ",
        newCodePlaceholder: "ಹೊಸ ಸೀಕ್ರೆಟ್ ಕೋಡ್",
        registerBtn: "ನೋಂದಾಯಿಸಿ",
        swipeTitle: "ನಿಮ್ಮ ಕಾರ್ಡ್ ಸ್ವೈಪ್ ಮಾಡಿ",
        amountPlaceholder: "ಸ್ವೈಪ್ ಮಾಡುವ ಮೊತ್ತ",
        swipeBtn: "💳 ಸ್ವೈಪ್",
        balanceBtn: "💰 ಶೆಷ",
        historyBtn: "📜 ಇತಿಹಾಸ"
    },
    ml: {
        loginTitle: "ലോഗിൻ",
        cardPlaceholder: "കാർഡ് നമ്പർ നൽകുക",
        codePlaceholder: "റഹസ്യ കോഡ് നൽകുക",
        loginBtn: "ലോഗിൻ",
        registerTitle: "പുതിയ കാർഡ്? രജിസ്റ്റർ ചെയ്യുക",
        newCardPlaceholder: "പുതിയ കാർഡ് നമ്പർ",
        newCodePlaceholder: "പുതിയ രഹസ്യ കോഡ്",
        registerBtn: "രജിസ്റ്റർ",
        swipeTitle: "നിങ്ങളുടെ കാർഡ് സ്വൈപ്പ് ചെയ്യുക",
        amountPlaceholder: "തുക നൽകുക",
        swipeBtn: "💳 സ്വൈപ്പ്",
        balanceBtn: "💰 ബാലൻസ്",
        historyBtn: "📜 ചരിത്രം"
    },
    ta: {
        loginTitle: "உள்நுழைய",
        cardPlaceholder: "அட்டை எண்ணை உள்ளிடவும்",
        codePlaceholder: "ரகசிய குறியீட்டை உள்ளிடவும்",
        loginBtn: "உள்நுழைய",
        registerTitle: "புதிய அட்டை? பதிவு செய்யவும்",
        newCardPlaceholder: "புதிய அட்டை எண்",
        newCodePlaceholder: "புதிய ரகசிய குறியீடு",
        registerBtn: "பதிவு",
        swipeTitle: "உங்கள் கார்டைப் சொடுக்கவும்",
        amountPlaceholder: "தொகையை உள்ளிடவும்",
        swipeBtn: "💳 ஸ்வைப்",
        balanceBtn: "💰 இருப்பு",
        historyBtn: "📜 வரலாறு"
    }
};

function setLanguage(lang) {
    const text = translations[lang];
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (text[key]) el.innerText = text[key];
    });
    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        const key = el.getAttribute("data-key-placeholder");
        if (text[key]) el.placeholder = text[key];
    });
}
