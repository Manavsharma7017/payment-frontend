import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Shield, 
  Globe, 
  Gift, 
  Headphones, 
  Smartphone,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react';
import { ScrollArea } from '../components/ScrollArea';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(255,105,180,0.3),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 min-h-screen gap-12">
          {/* Hero Content */}
          <div className={`flex-1 max-w-2xl transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Lightning Fast Payments
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Pay<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Smart</span>
              <br />
              Live<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Better</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the future of digital payments with our secure, lightning-fast platform. 
              Send money, split bills, and manage your finances with unparalleled ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/auth">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$50B+</div>
                <div className="text-sm text-gray-600">Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`flex-1 flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="h-full bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex flex-col">
                    <div className="flex items-center justify-between text-white mb-8">
                      <div className="text-sm">9:41 AM</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-white text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>
                      <p className="text-indigo-100">Your balance</p>
                      <p className="text-4xl font-bold">$12,847</p>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">Quick Pay</p>
                              <p className="text-indigo-100 text-sm">Send instantly</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">Split Bill</p>
                              <p className="text-indigo-100 text-sm">With friends</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-pulse">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce">
                <CheckCircle className="w-6 h-6 text-indigo-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">PaySmart</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for the modern world, our platform combines cutting-edge technology with intuitive design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Experience instant transfers with our advanced infrastructure. No more waiting for payments to process.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Bank-Grade Security",
                description: "Your money and data are protected by enterprise-level encryption and multi-factor authentication.",
                color: "from-green-400 to-emerald-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Send and receive payments across 180+ countries with real-time currency conversion.",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Rewards & Cashback",
                description: "Earn points and cashback on every transaction. Turn your payments into savings.",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Our dedicated support team is always ready to help, no matter the time or issue.",
                color: "from-indigo-400 to-purple-500"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Intuitive Design",
                description: "Clean, modern interface designed for everyone. Powerful features made simple.",
                color: "from-rose-400 to-red-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Millions</span>
            </h2>
            <p className="text-xl text-gray-600">See what our users are saying about their PaySmart experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Small Business Owner",
                content: "PaySmart transformed how I handle my business payments. The instant transfers and low fees have saved me thousands. The interface is incredibly intuitive!",
                rating: 5,
                avatar: "SC"
              },
              {
                name: "Marcus Johnson",
                role: "Freelance Designer",
                content: "Finally, a payment app that actually works as promised. The global reach feature is amazing - I can work with clients worldwide without payment headaches.",
                rating: 5,
                avatar: "MJ"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Everything You Need to Know</h2>
            <p className="text-xl text-gray-600">Comprehensive information about our platform and services</p>
          </div>

          <ScrollArea className="h-96 w-full rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg">
            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  Welcome to PaySmart
                </h3>
                <p className="text-lg leading-relaxed">
                  <strong className="text-indigo-600">Simplify Your Payments, Amplify Your Life</strong><br />
                  Our revolutionary platform makes digital payments effortless, secure, and rewarding. Whether you're shopping online, splitting dinner bills, or running a business, PaySmart adapts to your needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-blue-500 mr-3" />
                  Uncompromising Security
                </h3>
                <p className="leading-relaxed">
                  Your financial data is protected by military-grade encryption, biometric authentication, and real-time fraud detection. We're PCI DSS compliant and regularly audited by top security firms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-purple-500 mr-3" />
                  Truly Global Platform
                </h3>
                <p className="leading-relaxed">
                  Send money across borders in seconds. Our platform supports 50+ currencies with competitive exchange rates and transparent fees. No hidden charges, ever.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Gift className="w-5 h-5 text-pink-500 mr-3" />
                  Rewarding Experience
                </h3>
                <p className="leading-relaxed">
                  Every transaction earns you points. Redeem for cashback, exclusive deals, or donate to charity. Our partnership network includes top brands and services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Headphones className="w-5 h-5 text-green-500 mr-3" />
                  Always Here for You
                </h3>
                <p className="leading-relaxed">
                  Questions? Issues? Our award-winning support team is available 24/7 via chat, phone, or email. Average response time: under 30 seconds.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Smartphone className="w-5 h-5 text-indigo-500 mr-3" />
                  Start Your Journey Today
                </h3>
                <p className="leading-relaxed">
                  Join over 2 million users who've made PaySmart their go-to payment solution. Download our app and experience the future of digital payments. Your first transaction is on us!
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* CTA Section */}
   
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 PaySmart. All rights reserved. • Created with ❤️ by Manav Sharma
            </p>
          </div>
    

    </>
  );
};

export default Landing;