// src/mockResponse.js

// 1. Dropdown options array used for the dynamic category/type filtering
export const mockInventory = [
  { category: "electronics", subcategory: "mobile", name: "Redmi Note 12" },
  { category: "electronics", subcategory: "mobile", name: "iPhone 15 Pro" },
  { category: "electronics", subcategory: "mobile", name: "Samsung Galaxy S24 Ultra" },
  { category: "electronics", subcategory: "mobile", name: "Nokia 3310 (Vintage Edition)" } // Intentionally left out of the database below to test your funny "Ghost Town" screen!
];

// 2. The Dictionary Index Lookup system that changes your dashboard data dynamically
export const mockDatabase = {
  "Redmi Note 12": {
    product: {
      brand: "Xiaomi",
      category: "electronics",
      name: "Redmi Note 12",
      subcategory: "mobile",
      price: 14999
    },
    reviews: [
      {
        fake_score: 0.04,
        is_fake: false,
        rating: 5,
        review_date: "2026-05-28",
        review_text: "Incredible value for money. Battery life easily lasts two full days with normal use. The display is bright and crisp.",
        reviewer_name: "Suresh Kumar",
        sentiment_label: "POSITIVE",
        sentiment_score: 0.942,
        source: "flipkart"
      },
      {
        fake_score: 0.857,
        is_fake: true,
        rating: 4,
        review_date: "2026-05-24",
        review_text: "Value for money. Good smartphone and fast delivery execution. Highly recommend buying this right now product good.",
        reviewer_name: "Karan S.",
        sentiment_label: "NEUTRAL",
        sentiment_score: 0.634,
        source: "amazon"
      },
      {
        fake_score: 0.31,
        is_fake: false,
        rating: 2,
        review_date: "2026-05-10",
        review_text: "Disappointed with the charging speed. It takes almost two hours to get to full capacity, which feels way too slow.",
        reviewer_name: "Rahul Verma",
        sentiment_label: "NEGATIVE",
        sentiment_score: 0.189,
        source: "amazon"
      }
    ]
  },

  "iPhone 15 Pro": {
    product: {
      brand: "Apple",
      category: "electronics",
      name: "iPhone 15 Pro",
      subcategory: "mobile",
      price: 129900
    },
    reviews: [
      {
        fake_score: 0.02,
        is_fake: false,
        rating: 5,
        review_date: "2026-05-26",
        review_text: "The titanium build feels incredibly premium and noticeably lighter in hand. Cameras are absolutely mind-blowing, especially in low light.",
        reviewer_name: "Arjun Mehta",
        sentiment_label: "POSITIVE",
        sentiment_score: 0.985,
        source: "amazon"
      },
      {
        fake_score: 0.941,
        is_fake: true,
        rating: 5,
        review_date: "2026-05-21",
        review_text: "CHEAPEST IPHONE COMPARED TO MARKET ORIGINAL SEAL PACKED FAST DEALS CODES CLICK HERE BEST WORK EXCELLENT PHONE ALWAYS.",
        reviewer_name: "Spam_Bot_V8",
        sentiment_label: "POSITIVE",
        sentiment_score: 0.912,
        source: "flipkart"
      },
      {
        fake_score: 0.11,
        is_fake: false,
        rating: 3,
        review_date: "2026-05-18",
        review_text: "Great phone but the battery life is just average compared to the Plus models. Gets slightly warm during heavy recording sessions.",
        reviewer_name: "Sneha G.",
        sentiment_label: "NEUTRAL",
        sentiment_score: 0.521,
        source: "amazon"
      }
    ]
  },

  "Samsung Galaxy S24 Ultra": {
    product: {
      brand: "Samsung",
      category: "electronics",
      name: "Samsung Galaxy S24 Ultra",
      subcategory: "mobile",
      price: 114999
    },
    reviews: [
      {
        fake_score: 0.05,
        is_fake: false,
        rating: 5,
        review_date: "2026-05-27",
        review_text: "The anti-reflective glass display is an absolute game-changer under direct sunlight. Galaxy AI features are genuinely helpful for daily productivity.",
        reviewer_name: "Vikram Malhotra",
        sentiment_label: "POSITIVE",
        sentiment_score: 0.972,
        source: "amazon"
      },
      {
        fake_score: 0.782,
        is_fake: true,
        rating: 1,
        review_date: "2026-05-25",
        review_text: "DO NOT BUY SAMSUNG DEVICE SCREEN DIED ON DAY TWO TRASH PHONE WORST CUSTOMER SUPPORT SERVICE TRAPPED MY MONEY FRAUD SCAM.",
        reviewer_name: "Angered_User_32",
        sentiment_label: "NEGATIVE",
        sentiment_score: 0.043,
        source: "flipkart"
      },
      {
        fake_score: 0.18,
        is_fake: false,
        rating: 4,
        review_date: "2026-05-14",
        review_text: "The zoom tracking lens works great, and the flat panel edge profile is a massive usability improvement over previous generations.",
        reviewer_name: "Preeti Sinha",
        sentiment_label: "POSITIVE",
        sentiment_score: 0.865,
        source: "flipkart"
      }
    ]
  }
};

// Legacy support fallback container to ensure compatibility with any untouched files
export const mockBackendResponse = mockDatabase["Redmi Note 12"];