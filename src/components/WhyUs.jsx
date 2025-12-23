import { TrendingUp, Sparkles, Users, Headphones, Rocket } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={30} className="text-yellow-500" />,
    title: "Tailored Content",
    desc: "We never reuse designs or videos—everything is made specifically for your business.",
  },
  {
    icon: <Rocket size={30} className="text-pink-500" />,
    title: "Creative + Strategic",
    desc: "Fresh, bold ideas mixed with proven strategies to make your brand stand out.",
  },
  {
    icon: <Headphones size={30} className="text-blue-500" />,
    title: "Complete Support",
    desc: "We’re with you from start to finish, ensuring your brand continues to grow.",
  },
  {
    icon: <Users size={30} className="text-green-500" />,
    title: "Trend-Focused",
    desc: "We keep up with online trends so your content always feels current and engaging.",
  },
  {
    icon: <TrendingUp size={30} className="text-purple-500" />,
    title: "Growth-Driven",
    desc: "Our work is designed to get real results—more engagement, followers, and customers.",
  },
];

function WhyUs() {
  return(
    <section className="space-y-7">
      <h2 className="text-4xl text-center font-bold">💡 Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => (

          <div
            key={i}
            className="py-6 px-3 bg-white rounded-2xl text-center hover:shadow-lg 
            space-y-2 transition-all hover:-translate-y-2"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
