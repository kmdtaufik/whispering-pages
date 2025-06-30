"use client";

import { useState } from "react";
import {
  Heart,
  Share2,
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

const productData = {
  id: "1",
  name: "Premium Wireless Headphones",
  price: 299.99,
  originalPrice: 399.99,
  rating: 4.5,
  reviewCount: 128,
  description:
    "Experience premium sound quality with our latest wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Premium comfort padding",
    "Bluetooth 5.0 connectivity",
    "Quick charge - 5 min for 2 hours",
    "Voice assistant compatible",
  ],
  specifications: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    Impedance: "32 ohms",
    Weight: "250g",
    Connectivity: "Bluetooth 5.0, 3.5mm jack",
    Battery: "30 hours playback",
  },
  colors: [
    { name: "Midnight Black", value: "#1a1a1a", available: true },
    { name: "Pearl White", value: "#f8f9fa", available: true },
    { name: "Rose Gold", value: "#e8b4b8", available: true },
    { name: "Ocean Blue", value: "#0066cc", available: false },
  ],
  sizes: [{ name: "One Size", available: true }],
  images: [
    "https://via.placeholder.com/600x600?text=Headphones+1",
    "https://via.placeholder.com/600x600?text=Headphones+2",
    "https://via.placeholder.com/600x600?text=Headphones+3",
    "https://via.placeholder.com/600x600?text=Headphones+4",
  ],
  inStock: true,
  stockCount: 15,
};

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Amazing sound quality! The noise cancellation works perfectly and the battery life is exactly as advertised.",
    verified: true,
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great headphones overall. Very comfortable for long listening sessions. Only minor complaint is the case could be smaller.",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    date: "2024-01-08",
    comment:
      "Best purchase I've made this year! The sound is crystal clear and they're so comfortable I forget I'm wearing them.",
    verified: true,
  },
];

// const relatedProducts = [
//   {
//     id: "2",
//     name: "Wireless Earbuds Pro",
//     price: 199.99,
//     image: "https://via.placeholder.com/200x200?text=Earbuds",
//     rating: 4.3,
//   },
//   {
//     id: "3",
//     name: "Bluetooth Speaker",
//     price: 149.99,
//     image: "https://via.placeholder.com/200x200?text=Speaker",
//     rating: 4.6,
//   },
//   {
//     id: "4",
//     name: "USB-C Cable",
//     price: 29.99,
//     image: "https://via.placeholder.com/200x200?text=Cable",
//     rating: 4.4,
//   },
// ];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity((prev) =>
      Math.max(1, Math.min(prev + change, productData.stockCount))
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: productData.id,
      name: productData.name,
      price: productData.price,
      quantity: quantity,
      color: selectedColor.name,
      size: selectedSize.name,
      image: productData.images[0],
    };
    console.log("Adding to cart:", cartItem);
    // Add your cart logic here
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) =>
        (prev - 1 + productData.images.length) % productData.images.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Electronics</span>
            <span>/</span>
            <span>Headphones</span>
            <span>/</span>
            <span className="text-gray-900">{productData.name}</span>
          </div>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              {/* Image Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productData.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-2 h-2 rounded-full ${
                      selectedImage === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {productData.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {renderStars(productData.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {productData.rating} ({productData.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${productData.price}
                </span>
                {productData.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${productData.originalPrice}
                  </span>
                )}
                {productData.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Save $
                    {(productData.originalPrice - productData.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {productData.inStock ? (
                  <>
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-medium">
                      In Stock ({productData.stockCount} available)
                    </span>
                  </>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium mb-3">
                Color: {selectedColor.name}
              </h3>
              <div className="flex gap-3">
                {productData.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => color.available && setSelectedColor(color)}
                    disabled={!color.available}
                    className={`relative w-10 h-10 rounded-full border-2 ${
                      selectedColor.name === color.name
                        ? "border-blue-500"
                        : "border-gray-300"
                    } ${
                      !color.available
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {selectedColor.name === color.name && (
                      <Check className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    )}
                    {!color.available && (
                      <div className="absolute inset-0 bg-gray-400/50 rounded-full flex items-center justify-center">
                        <div className="w-6 h-0.5 bg-gray-600 rotate-45"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= productData.stockCount}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {productData.stockCount} available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!productData.inStock}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart - ${(productData.price * quantity).toFixed(2)}
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex-1 border-2 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                    isWishlisted
                      ? "border-red-500 text-red-500 bg-red-50"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Heart
                    className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`}
                  />
                  {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                </button>

                <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Key Features</h3>
              <ul className="space-y-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">30-Day Returns</p>
                  <p className="text-sm text-gray-600">
                    Easy returns & exchanges
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">2-Year Warranty</p>
                  <p className="text-sm text-gray-600">
                    Manufacturer warranty included
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                  {tab === "reviews" && ` (${reviews.length})`}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="max-w-4xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {productData.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our premium wireless headphones deliver exceptional audio
                  quality with deep bass, crystal-clear mids, and crisp highs.
                  The advanced active noise cancellation technology blocks out
                  unwanted ambient noise, allowing you to immerse yourself
                  completely in your music.
                </p>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="max-w-4xl">
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(productData.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-100"
                      >
                        <span className="font-medium text-gray-900">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-4xl space-y-6">
                {/* Reviews Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold">
                      {productData.rating}
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        {renderStars(productData.rating)}
                      </div>
                      <p className="text-sm text-gray-600">
                        Based on {productData.reviewCount} reviews
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-6"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-blue-600">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{review.name}</h4>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {renderStars(review.rating)}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {/* <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-lg font-bold">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
