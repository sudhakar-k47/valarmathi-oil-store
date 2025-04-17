import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import Layout from "../components/layout/Layout"
import { getProductById } from "../data/products"
import { useCart } from "../context/CartContext"
import { toast } from "../components/ui/use-toast"
import { motion, AnimatePresence } from "framer-motion"

// Add this after the imports
const floatingBubbleVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart, cart, updateQuantity, removeFromCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const product = id ? getProductById(Number(id)) : undefined
  const cartItem = id ? cart.find((item) => item.id === Number(id)) : undefined

  useEffect(() => {
    if (!product) {
      navigate("/products")
    }
    window.scrollTo({ top: 0, behavior: "smooth" })

    // If the product is already in the cart, set the initial quantity to match
    if (cartItem) {
      setQuantity(cartItem.quantity)
    } else {
      setQuantity(1)
    }
  }, [product, navigate, cartItem])

  if (!product) {
    return null
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (cartItem) {
      // Update existing cart item quantity
      updateQuantity(product.id, quantity)
    } else {
      // Add new item to cart
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })

      // If quantity is more than 1, update it
      if (quantity > 1) {
        updateQuantity(product.id, quantity)
      }
    }

    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
      duration: 3000,
    })
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-md">
              <div
                className={`aspect-square bg-cream-50 flex items-center justify-center ${isImageLoaded ? "hidden" : "block"}`}
              >
                <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className={`w-full h-auto object-cover aspect-square transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-serif font-bold mb-3 text-teal-900 animate-text-reveal">{product.name}</h1>
            <p
              className="text-2xl text-salmon-600 font-medium mb-6 animate-text-reveal"
              style={{ animationDelay: "0.1s" }}
            >
              ${product.price.toFixed(2)}
            </p>
            <p className="text-foreground mb-6 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
              {product.description}
            </p>

            {/* Size */}
            <div className="mb-6 animate-text-reveal" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-lg font-medium mb-2">Size</h3>
              <p className="bg-cream-50 inline-block px-4 py-2 rounded">{product.size}</p>
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-6 animate-text-reveal" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-lg font-medium mb-2">Ingredients</h3>
                <p className="text-foreground">{product.ingredients}</p>
              </div>
            )}

            {/* Benefits */}
            {product.benefits && (
              <div className="mb-6 animate-text-reveal" style={{ animationDelay: "0.5s" }}>
                <h3 className="text-lg font-medium mb-2">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-foreground">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart */}
            <div className="mt-8 animate-text-reveal" style={{ animationDelay: "0.6s" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="flex border border-teal-200 rounded-md overflow-hidden shadow-sm">
                      <motion.button
                        onClick={handleDecreaseQuantity}
                        className="px-3 py-2 bg-cream-50 hover:bg-cream-100 text-teal-700 transition-colors"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus className="h-4 w-4" />
                      </motion.button>

                      <motion.input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleInputChange}
                        className="w-16 text-center border-x border-teal-200 focus:outline-none"
                        whileFocus={{ backgroundColor: "rgba(45, 212, 191, 0.1)" }}
                      />

                      <motion.button
                        onClick={handleIncreaseQuantity}
                        className="px-3 py-2 bg-cream-50 hover:bg-cream-100 text-teal-700 transition-colors"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleAddToCart}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md flex items-center justify-center gap-2 transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 15px -3px rgba(45, 212, 191, 0.2), 0 4px 6px -4px rgba(45, 212, 191, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {cartItem ? "Update Cart" : "Add to Cart"}
                    </motion.span>

                    <motion.div
                      className="absolute right-0 top-0 w-full h-full rounded-md"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{
                        scale: 1.5,
                        opacity: 1,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        transition: { duration: 0.4 },
                      }}
                      animate={{ scale: 0, opacity: 0 }}
                    />
                  </motion.button>

                  {/* Floating cart notification */}
                  <AnimatePresence>
                    {cartItem && (
                      <motion.div
                        className="mt-4 bg-cream-50 border border-teal-200 rounded-md p-3 text-sm text-teal-800 flex items-center justify-between"
                        initial={{ opacity: 0, y: 10, height: 0, padding: 0, margin: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto", padding: "0.75rem", marginTop: "1rem" }}
                        exit={{ opacity: 0, y: -10, height: 0, padding: 0, margin: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <span>
                          <span className="font-medium">{cartItem.quantity}×</span> in your cart
                        </span>
                        <motion.button
                          onClick={() => removeFromCart(product.id)}
                          className="text-salmon-600 hover:text-salmon-700 text-xs underline"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Remove
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
