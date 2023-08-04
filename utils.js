function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getRandomCity() {
  const cities = [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Canberra",
  ];
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex];
}

function getRandomState() {
  const states = ["NSW", "VIC", "QLD", "WA", "SA", "ACT"];
  const randomIndex = Math.floor(Math.random() * states.length);
  return states[randomIndex];
}

function getRandomAge() {
  return Math.floor(Math.random() * 52) + 14; // Random age between 14 to 65 (inclusive)
}

// Function to generate predictive user traits for a given user
function generatePredictiveTraits() {
  const predictiveTraits = {};

  // Generate values for the 50 predictive traits
  predictiveTraits.userChurnProbability = Math.random(); // Replace with actual churn probability value
  predictiveTraits.userBuyPossibility = Math.random(); // Replace with actual buy possibility value
  predictiveTraits.userEngagementScore = Math.random(); // Replace with actual engagement score value
  predictiveTraits.userRetentionLikelihood = Math.random(); // Replace with actual retention likelihood value
  predictiveTraits.userLifetimeValue = Math.random() * 1000; // Replace with actual lifetime value value
  predictiveTraits.userPreferredCategory = "Electronics"; // Replace with actual preferred category value
  predictiveTraits.userPredictedAge = Math.floor(Math.random() * 50) + 18; // Replace with actual predicted age value
  predictiveTraits.userPredictedGender = "Male"; // Replace with actual predicted gender value
  predictiveTraits.userNextPurchaseDate = "2023-07-31"; // Replace with actual next purchase date value
  predictiveTraits.userPreferredCommunicationChannel = "Email"; // Replace with actual preferred communication channel value
  predictiveTraits.userPredictedLocation = "New York"; // Replace with actual predicted location value
  predictiveTraits.userPredictedInterest = "Sports"; // Replace with actual predicted interest value
  predictiveTraits.userPredictedDeviceType = "Mobile"; // Replace with actual predicted device type value
  predictiveTraits.userPredictedIncome = Math.random() * 100000; // Replace with actual predicted income value
  predictiveTraits.userSatisfactionScore = Math.random() * 5; // Replace with actual satisfaction score value
  predictiveTraits.userPreferredPaymentMethod = "Credit Card"; // Replace with actual preferred payment method value
  predictiveTraits.userPredictedPurchaseFrequency = Math.random() * 5; // Replace with actual predicted purchase frequency value
  predictiveTraits.userPreferredBrand = "Nike"; // Replace with actual preferred brand value
  predictiveTraits.userPredictedLoyalty = Math.random() * 100; // Replace with actual predicted loyalty value
  predictiveTraits.userPreferredContentType = "Video"; // Replace with actual preferred content type value
  predictiveTraits.userPredictedConversionRate = Math.random(); // Replace with actual predicted conversion rate value
  predictiveTraits.userPreferredLanguage = "English"; // Replace with actual preferred language value
  predictiveTraits.userPredictedAffinity = "Fitness"; // Replace with actual predicted affinity value
  predictiveTraits.userPreferredDiscountLevel = "Gold"; // Replace with actual preferred discount level value
  predictiveTraits.userPredictedSocialInfluence = Math.random() * 100; // Replace with actual predicted social influence value

  // Add more predictive traits...

  return predictiveTraits;
}

// Function to generate historical user traits based on user data
function generateHistoricalTraits() {
  const historicalTraits = {};

  // Generate values for the 25 historical traits
  historicalTraits.userTotalPurchaseAmount = Math.random() * 1000; // Replace with actual total purchase amount value
  historicalTraits.userTotalOrderCount = Math.floor(Math.random() * 100); // Replace with actual total order count value
  historicalTraits.userAverageOrderValue = Math.random() * 50; // Replace with actual average order value
  historicalTraits.userLastPurchaseDate = "2023-07-15"; // Replace with actual last purchase date value
  historicalTraits.userFirstPurchaseDate = "2022-01-30"; // Replace with actual first purchase date value
  historicalTraits.userTotalEngagementEvents = Math.floor(Math.random() * 1000); // Replace with actual total engagement events value
  historicalTraits.userTotalPageViews = Math.floor(Math.random() * 5000); // Replace with actual total page views value
  historicalTraits.userTotalClicks = Math.floor(Math.random() * 1000); // Replace with actual total clicks value
  historicalTraits.userTotalEmailsOpened = Math.floor(Math.random() * 500); // Replace with actual total emails opened value
  historicalTraits.userTotalAppSessions = Math.floor(Math.random() * 200); // Replace with actual total app sessions value
  historicalTraits.userTotalLogins = Math.floor(Math.random() * 300); // Replace with actual total logins value
  historicalTraits.userTotalProductReviews = Math.floor(Math.random() * 50); // Replace with actual total product reviews value
  historicalTraits.userTotalWishlistItems = Math.floor(Math.random() * 30); // Replace with actual total wishlist items value
  historicalTraits.userTotalReferralsMade = Math.floor(Math.random() * 20); // Replace with actual total referrals made value
  historicalTraits.userTotalReferralsReceived = Math.floor(Math.random() * 50); // Replace with actual total referrals received value
  historicalTraits.userTotalPointsEarned = Math.floor(Math.random() * 1000); // Replace with actual total points earned value
  historicalTraits.userTotalPointsRedeemed = Math.floor(Math.random() * 500); // Replace with actual total points redeemed value
  historicalTraits.userTotalAbandonedCarts = Math.floor(Math.random() * 100); // Replace with actual total abandoned carts value
  historicalTraits.userTotalSupportTickets = Math.floor(Math.random() * 10); // Replace with actual total support tickets value
  historicalTraits.userTotalFeedbackSubmissions = Math.floor(
    Math.random() * 20
  ); // Replace with actual total feedback submissions value
  historicalTraits.userTotalCouponsUsed = Math.floor(Math.random() * 50); // Replace with actual total coupons used value
  historicalTraits.userTotalSocialShares = Math.floor(Math.random() * 50); // Replace with actual total social shares value
  historicalTraits.userTotalSurveyResponses = Math.floor(Math.random() * 100); // Replace with actual total survey responses value
  historicalTraits.userTotalRecommendationsClicked = Math.floor(
    Math.random() * 50
  ); // Replace with actual total recommendations clicked value
  historicalTraits.userTotalSurveyAnswers = Math.floor(Math.random() * 100); // Replace with actual total survey answers value

  // Add more historical traits...

  return historicalTraits;
}

const eventNames = [
  "Add To Cart",
  "Purchase",
  "View Product",
  "Checkout",
  "Product Review",
  "Wishlist",
];

module.exports = {
  eventNames,
  getRandomAge,
  getRandomCity,
  getRandomState,
  generateRandomString,
  generatePredictiveTraits,
  generateHistoricalTraits,
};
