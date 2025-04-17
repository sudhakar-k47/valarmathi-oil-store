import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";

interface StickyCheckoutFooterProps {
  totalItems?: number
  totalPrice?: number
  checkoutUrl?: string
}

export function StickyCheckoutFooter({
  totalItems = 0,
  totalPrice = 0,
  checkoutUrl = "/checkout",
}: StickyCheckoutFooterProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide footer when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          {totalItems > 0 && (
            <>
              <span className="text-sm text-gray-600">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </>
          )}
        </div>
        <Button asChild size="lg" className="px-8">
          <Link to={`/cart}`}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Go to Checkout
          </Link>
        </Button>
      </div>
    </div>
  )
}
