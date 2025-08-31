import { Video, Facebook, Instagram, TrendingUp, Sparkles, Users, Headphones, Rocket } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={28} className="text-yellow-500" />,
    title: "Tailored Content",
    desc: "We never reuse designs or videos—everything is made specifically for your business.",
  },
  {
    icon: <Rocket size={28} className="text-pink-500" />,
    title: "Creative + Strategic",
    desc: "Fresh, bold ideas mixed with proven strategies to make your brand stand out.",
  },
  {
    icon: <Headphones size={28} className="text-blue-500" />,
    title: "Complete Support",
    desc: "We’re with you from start to finish, ensuring your brand continues to grow.",
  },
  {
    icon: <Users size={28} className="text-green-500" />,
    title: "Trend-Focused",
    desc: "We keep up with online trends so your content always feels current and engaging.",
  },
  {
    icon: <TrendingUp size={28} className="text-purple-500" />,
    title: "Growth-Driven",
    desc: "Our work is designed to get real results—more engagement, followers, and customers.",
  },
];

function WhyUs() {
  return(
      <div className="text-center mt-20">
          <h2 className="text-4xl font-bold mb-12">💡 Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="flex justify-center mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default WhyUs
