import { Phone, Clock, MapPin, Pizza } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

export default function App() {
  const address = "57-29 Main St, Flushing, NY 11355";
  const phone = "(718) 961-0263";
  const hours = "11 AM–9 PM";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const orderNowUrl =
    "https://philandsonsonmain.com/order-now?utm_source=website&utm_medium=direct_ordering&utm_campaign=order_now";

  const [activeTab, setActiveTab] = useState("APPETIZERS");

  const menuData = {
    APPETIZERS: [
      {
        name: "HOT ANTIPASTO",
        price: "$12.20",
        description:
          "Eggplant rollatini, baked clams, mussels marinara, stuffed mushrooms & shrimp oreganata.",
      },
      {
        name: "BAKED CLAMS",
        price: "$11.20",
        description:
          "Baked fresh clams on a half shell, topped with seasoned bread crumbs.",
      },
      {
        name: "STUFFED MUSHROOMS",
        price: "$11.20",
        description:
          "Vegetable stuffing, a touch of garlic, marinara & fresh mozzarella",
      },
      {
        name: "FRIED CALAMARI",
        price: "$14.20",
        description:
          "Hot or mild. Lightly breaded & fried to golden perfection.",
      },
    ],
    Salads: [
      {
        name: "FRESH GARDEN SALAD",
        price: "$8.20",
        description:
          "Mixed greens, tomatoes, cucumbers, carrots, red onions & olives",
      },
      {
        name: "CAESAR SALAD",
        price: "$8.20",
        description:
          "Romaine lettuce, croutons, Parmigiano-Reggiano & homemade Caesar dressing.",
      },
      {
        name: "GREEK SALAD",
        price: "$8.20",
        description:
          "Mixed greens, tomato, cucumbers, fresh red peppers, red onions, olives & feta cheese.",
      },
      {
        name: "CHEF SALAD",
        price: "$15.20",
        description:
          "Mixed greens, ham, salami, American cheese, tomatoes, cucumbers, red onions, carrots, pepperoni, olives & hard-boiled egg.",
      },
    ],
    Desserts: [
      {
        name: "CHEESECAKE",
        price: "$7.20",
        description: "",
      },
      {
        name: "TIRAMISU",
        price: "$7.20",
        description: "",
      },
      {
        name: "OREO FUDGE CAKE",
        price: "$7.20",
        description: "",
      },
      {
        name: "CHOCOLATE CAKE",
        price: "$7.20",
        description: "",
      },
    ],
    BURGERS: [
      {
        name: "HAMBURGER",
        price: "$7.20",
        description: "",
      },
      {
        name: "CHEESEBURGER",
        price: "$8.20",
        description: "",
      },
      {
        name: "PIZZA BURGER (Deluxe)",
        price: "$9.20",
        description: "Topped with tomato sauce & mozzarella",
      },
      {
        name: "ITALIAN BURGER (Deluxe)",
        price: "$9.20",
        description:
          "Topped with tomato sauce, fresh mozzarella & roasted peppers",
      },
    ],
    PIZZA: [
      {
        name: "BIANCA PIE",
        price: "$15.50",
        description: "",
      },
      {
        name: "BROCCOLI OR SPINACH PIE",
        price: "$15.50",
        description: "",
      },
      {
        name: "PIZZA RUSTICA",
        price: "$17.25",
        description: "",
      },
      {
        name: "MEAT LOVERS PIZZA",
        price: "$17.25",
        description: "",
      },
    ],
  };

  const tabs = [
    "APPETIZERS",
    "Salads",
    "Desserts",
    "BURGERS",
    "PIZZA",
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F0] relative overflow-hidden">
      {/* Checkered Pattern Background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-conic-gradient(#D32F2F 0% 25%, transparent 0% 50%) 50% / 40px 40px
          `,
        }}
      />

      {/* Animated Pizza Slices Decoration */}
      <motion.div
        className="fixed top-20 -right-20 w-64 h-64 opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Pizza className="w-full h-full text-[#D32F2F]" />
      </motion.div>
      <motion.div
        className="fixed bottom-20 -left-20 w-48 h-48 opacity-10 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Pizza className="w-full h-full text-[#2E7D32]" />
      </motion.div>

      {/* Hero Section */}
      <header className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F] via-[#C62828] to-[#B71C1C]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 py-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            {/* Decorative Top Border */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[3px] w-16 bg-[#FFF8F0]" />
              <Pizza className="w-8 h-8 text-[#FFF8F0]" />
              <div className="h-[3px] w-16 bg-[#FFF8F0]" />
            </div>

            <h1
              className="text-7xl md:text-9xl font-black text-[#FFF8F0] mb-2 tracking-tight leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "4px 4px 0px rgba(0,0,0,0.3)",
              }}
            >
              PHIL & SONS
            </h1>

            <motion.div
              className="inline-block bg-[#FFF8F0] text-[#D32F2F] px-8 py-3 transform -rotate-1 mb-8"
              initial={{ rotate: -1, y: 20, opacity: 0 }}
              animate={{ rotate: -1, y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p
                className="text-2xl md:text-3xl font-bold italic"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Restaurant & Pizzeria
              </p>
            </motion.div>

            <motion.p
              className="text-xl text-[#FFF8F0] mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Source Serif 4', serif" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Family recipes. Fresh ingredients. Authentic
              Italian-American flavors since day one.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xl px-10 py-7 font-bold transform hover:scale-105 transition-all shadow-lg hover:shadow-2xl"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
                onClick={() =>
                  window.open(orderNowUrl, "_blank")
                }
              >
                ORDER NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#FFF8F0] hover:bg-white text-[#D32F2F] border-4 border-[#FFF8F0] text-xl px-10 py-7 font-bold transform hover:scale-105 transition-all shadow-lg"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
                onClick={() =>
                  window.open(googleMapsUrl, "_blank")
                }
              >
                <MapPin className="w-6 h-6 mr-2" />
                DIRECTIONS
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FFF8F0"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Contact Cards with Staggered Animation */}
        <h2 className="sr-only">Visit, Call, or Check Our Hours</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: MapPin,
              title: "VISIT US",
              content: address,
              action: "Get Directions",
              color: "#D32F2F",
              delay: 0,
            },
            {
              icon: Phone,
              title: "CALL US",
              content: phone,
              action: "Tap to Call",
              color: "#2E7D32",
              delay: 0.1,
            },
            {
              icon: Clock,
              title: "HOURS",
              content: `${hours}\nEvery Day`,
              action: null,
              color: "#1565C0",
              delay: 0.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: item.delay, duration: 0.5 }}
            >
              <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all bg-white">
                <CardContent className="p-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-700 mb-4 whitespace-pre-line"
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                    }}
                  >
                    {item.content}
                  </p>
                  {item.action && (
                    <Button
                      variant="link"
                      className="p-0 h-auto font-bold"
                      style={{
                        color: item.color,
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                      onClick={() => {
                        if (index === 0)
                          window.open(googleMapsUrl, "_blank");
                        if (index === 1)
                          window.location.href = `tel:${phone.replace(/[^0-9]/g, "")}`;
                      }}
                    >
                      {item.action} →
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Menu Section */}
        <motion.section
          id="menu"
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Menu Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[3px] w-16 bg-[#D32F2F]" />
              <Pizza className="w-8 h-8 text-[#D32F2F]" />
              <div className="h-[3px] w-16 bg-[#D32F2F]" />
            </div>
            <h2
              className="text-6xl md:text-7xl text-[#D32F2F] mb-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "3px 3px 0px rgba(0,0,0,0.1)",
              }}
            >
              OUR MENU
            </h2>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 border-4 border-black font-bold text-lg transition-all ${
                  activeTab === tab
                    ? "bg-[#D32F2F] text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                }`}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {menuData[activeTab as keyof typeof menuData].map(
              (item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className="text-2xl text-[#D32F2F] flex-1"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="text-2xl font-bold text-[#2E7D32] ml-4"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{
                        fontFamily: "'Source Serif 4', serif",
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ),
            )}
          </motion.div>

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-2xl px-12 py-8 font-bold border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
              onClick={() => window.open(orderNowUrl, "_blank")}
            >
              VIEW FULL MENU
            </Button>
          </div>
        </motion.section>

        {/* Feature Section with Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#D32F2F] -z-10" />
              {/* TODO(seo): this image is hotlinked from philandsonpizza.com, a
                  different business's site, not a verified Phil & Sons photo.
                  Needs a real photo asset from this restaurant before launch. */}
              <ImageWithFallback
                src="https://www.philandsonpizza.com/wp-content/uploads/2022/07/about-left.jpg"
                alt="Pepperoni pizza with fresh mozzarella at Phil & Sons"
                className="w-full h-[400px] object-cover border-4 border-black"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#2E7D32] text-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <h2
                className="text-5xl mb-6 leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                MADE FRESH
                <br />
                EVERY DAY
              </h2>
              <p
                className="text-lg mb-4 leading-relaxed"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                }}
              >
                At Phil & Sons, we don't cut corners - just
                pizza! Our dough is made fresh daily, our sauce
                is simmered to perfection, and our toppings are
                hand-selected for quality.
              </p>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                }}
              >
                Three generations of family recipes meet New
                York tradition. Every pie tells a story.
              </p>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D32F2F]" />
                <div className="w-12 h-12 rounded-full bg-white" />
                <div className="w-12 h-12 rounded-full bg-[#2E7D32]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Feature - Reversed */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="order-2 md:order-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <h2
                className="text-5xl mb-6 leading-none text-[#D32F2F]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                YOUR LOCAL
                <br />
                FAVORITE
              </h2>
              <p
                className="text-lg mb-4 leading-relaxed text-gray-700"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                }}
              >
                Nestled in the heart of Flushing, we've been
                serving our community with pride. Whether you're
                dining in or ordering out, we treat every
                customer like family.
              </p>
              <p
                className="text-lg mb-6 leading-relaxed text-gray-700"
                style={{
                  fontFamily: "'Source Serif 4', serif",
                }}
              >
                From classic margherita to loaded meat lovers,
                from fresh salads to hearty pasta - there's
                something for everyone at Phil & Sons.
              </p>
              <Button
                size="lg"
                className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xl px-8 py-6"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
                onClick={() =>
                  window.open(orderNowUrl, "_blank")
                }
              >
                ORDER NOW →
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#2E7D32] -z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768690753301-4dd667e3f880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNpbCUyMHRvbWF0byUyMGluZ3JlZGllbnRzfGVufDF8fHx8MTc3MzMzMzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh Ingredients"
                className="w-full h-[400px] object-cover border-4 border-black"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="relative bg-gradient-to-r from-[#1565C0] to-[#0D47A1] p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <h2
            className="text-6xl md:text-7xl text-white mb-6 relative z-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            HUNGRY YET?
          </h2>
          <p
            className="text-2xl text-white mb-8 max-w-2xl mx-auto relative z-10"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Order online for pickup or delivery. Fresh, hot
            pizza at your door in minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button
              size="lg"
              className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-2xl px-12 py-8 font-bold transform hover:scale-105 transition-all shadow-lg"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
              onClick={() => window.open(orderNowUrl, "_blank")}
            >
              ORDER ONLINE NOW
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#1565C0] text-2xl px-12 py-8 font-bold transform hover:scale-105 transition-all shadow-lg border-4 border-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.05em",
              }}
              onClick={() =>
                window.open(googleMapsUrl, "_blank")
              }
            >
              <MapPin className="w-6 h-6 mr-2" />
              FIND US
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative bg-black text-white py-12 mt-20 border-t-8 border-[#D32F2F]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3
              className="text-5xl mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              PHIL & SONS
            </h3>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#D32F2F]" />
              <Pizza className="w-6 h-6 text-[#D32F2F]" />
              <div className="h-[2px] w-12 bg-[#D32F2F]" />
            </div>
          </div>

          <div
            className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            <div>
              <h4
                className="text-[#D32F2F] font-bold mb-2"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                LOCATION
              </h4>
              <p className="text-gray-300">{address}</p>
            </div>
            <div>
              <h4
                className="text-[#2E7D32] font-bold mb-2"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                CONTACT
              </h4>
              <p className="text-gray-300">{phone}</p>
            </div>
            <div>
              <h4
                className="text-[#1565C0] font-bold mb-2"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                HOURS
              </h4>
              <p className="text-gray-300">{hours}</p>
              <p className="text-gray-400 text-sm">Every Day</p>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            <p>
              © 2026 Phil & Sons Restaurant & Pizzeria. All
              rights reserved.
            </p>
            <div
              className="mt-5 flex justify-center"
              aria-label="Download the Phil & Sons app"
            >
              <a
                className="inline-flex min-h-[52px] w-[168px] items-center gap-3 rounded-[11px] border border-white/35 bg-black px-3 py-2 text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-white"
                href="https://apps.apple.com/us/app/phil-sons/id6759742241"
                target="_blank"
                rel="noopener"
                aria-label="Download Phil & Sons on the App Store"
              >
                <svg
                  width="30"
                  height="36"
                  viewBox="0 0 30 36"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M24.4 18.9c0-4.5 3.7-6.7 3.9-6.8-2.1-3.1-5.4-3.5-6.6-3.6-2.8-.3-5.4 1.6-6.8 1.6-1.4 0-3.6-1.6-5.9-1.5-3 0-5.8 1.8-7.3 4.5-3.1 5.4-.8 13.4 2.2 17.8 1.5 2.1 3.2 4.5 5.5 4.4 2.2-.1 3-1.4 5.7-1.4s3.4 1.4 5.8 1.3c2.4 0 3.9-2.1 5.3-4.2 1.7-2.5 2.4-4.9 2.4-5.1-.1 0-4.2-1.6-4.2-7zM19.9 5.6C21.1 4.2 21.9 2.2 21.7.2c-1.7.1-3.8 1.1-5 2.5-1.1 1.3-2.1 3.3-1.8 5.2 1.9.1 3.8-1 5-2.3z"
                  />
                </svg>
                <span className="grid gap-px text-left leading-none">
                  <span className="text-[0.64rem] font-medium tracking-[0.04em]">
                    Download on the
                  </span>
                  <strong className="text-[1.18rem] font-semibold tracking-normal">
                    App Store
                  </strong>
                </span>
              </a>
              <a
                className="inline-flex min-h-[52px] w-[168px] items-center gap-3 rounded-[11px] border border-white/35 bg-black px-3 py-2 text-white shadow-[0_8px_28px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-white"
                href="https://play.google.com/store/apps/details?id=com.avco.philandsons"
                target="_blank"
                rel="noopener"
                aria-label="Get Phil & Sons on Google Play"
              >
                <svg
                  width="30"
                  height="34"
                  viewBox="0 0 30 34"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    fill="#34a853"
                    d="M2.2 1.1c-.7.4-1.2 1.2-1.2 2.3v27.2c0 1 .4 1.8 1.1 2.2l14.7-15.9L2.2 1.1z"
                  />
                  <path
                    fill="#4285f4"
                    d="m16.8 16.9 4.3-4.6L4.1.9C3.4.5 2.8.6 2.2 1.1l14.6 15.8z"
                  />
                  <path
                    fill="#fbbc04"
                    d="m16.8 16.9 4.3 4.6 5.8-3.4c1.7-1 1.7-2.6 0-3.6l-5.8-3.4-4.3 5.8z"
                  />
                  <path
                    fill="#ea4335"
                    d="M2.1 32.8c.6.5 1.3.5 2 .1l17-11.4-4.3-4.6L2.1 32.8z"
                  />
                </svg>
                <span className="grid gap-px text-left leading-none">
                  <span className="text-[0.64rem] font-medium tracking-[0.04em]">
                    GET IT ON
                  </span>
                  <strong className="text-[1.18rem] font-semibold tracking-normal">
                    Google Play
                  </strong>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.avcopremier.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              opacity: 0.7,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src="https://www.avcopremier.com/_next/image?url=%2Fimages%2Favco-premier-logo-black.png&w=96&q=75&dpl=dpl_HZwfP6XyLRcHK746zkSVpoeaMWwa"
              alt="Avco Premier"
              style={{ height: "14px", width: "auto" }}
            />
            Powered by Avco Premier
          </a>
        </div>
      </footer>
    </div>
  );
}
