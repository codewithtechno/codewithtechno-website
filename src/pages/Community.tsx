import { Users, Award, Briefcase, TrendingUp, Star, MessageSquare, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function Community() {
  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Expert Mentors' },
    { number: '1000+', label: 'Connections Made' }
  ];

  const testimonials = [
    {
      quote: "CodeWithTechno transformed my understanding of UI/UX design. The mentorship and practical experience were invaluable!",
      author: "Priya Sharma",
      role: "UI/UX Designer",
      impact: "Got hired as a Senior Designer"
    },
    {
      quote: "The events gave me clarity about careers in design and tech. I landed my first internship through the community.",
      author: "Rahul Kumar",
      role: "Computer Science Student",
      impact: "Accepted full-time offer"
    },
    {
      quote: "Best community for learning practical skills and networking. This platform accelerated my career growth immensely.",
      author: "Ananya Patel",
      role: "Full Stack Developer",
      impact: "Started own freelance business"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Learn from Industry Professionals",
      description: "Get insights from experienced designers and developers working at top companies"
    },
    {
      icon: Award,
      title: "Get Exposure to Real-World Tools",
      description: "Hands-on experience with Figma, Adobe Suite, VS Code, and industry-standard software"
    },
    {
      icon: Briefcase,
      title: "Network with Peers and Mentors",
      description: "Build connections that last beyond the classroom with like-minded professionals"
    },
    {
      icon: TrendingUp,
      title: "Showcase Your Work and Grow",
      description: "Build a portfolio that stands out to employers and get career opportunities"
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff' }} className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Our <span style={{ color: '#0073E6' }}>
              Community
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 500+ students and professionals passionate about design and technology
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-4xl sm:text-5xl font-bold" style={{ color: '#0073E6' }}>
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Member Success Stories</h2>
            <p className="text-xl text-gray-600">Real impact from real community members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 space-y-4 hover:shadow-2xl transition-all"
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-gray-200 space-y-1">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-semibold" style={{ color: '#00A651' }}>
                    {testimonial.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join CodeWithTechno?</h2>
            <p className="text-xl text-gray-600">Comprehensive benefits for your career growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{ backgroundColor: index % 2 === 0 ? '#e6f2ff' : '#e6f7f0' }}
                className="flex items-start space-x-4 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <div style={{ backgroundColor: index % 2 === 0 ? '#0073E6' : '#00A651' }} className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Engagement</h2>
            <p className="text-xl text-gray-600">Active discussions and collaborations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <MessageSquare style={{ color: '#0073E6' }} className="w-12 h-12 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">Daily Discussions</h3>
              <p className="text-gray-600">Share ideas, ask questions, and get feedback from the community on Slack and Discord</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <Zap style={{ color: '#00A651' }} className="w-12 h-12 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">Monthly Challenges</h3>
              <p className="text-gray-600">Participate in design and coding challenges with prizes and recognition</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <Users style={{ color: '#0073E6' }} className="w-12 h-12 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">Networking Events</h3>
              <p className="text-gray-600">Connect with industry professionals and fellow members at exclusive meetups</p>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#0073E6' }} className="rounded-3xl p-12 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Ready to Join Our Community?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Become part of CodeWithTechno and start your transformative journey in design and technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              style={{ color: '#0073E6' }}
              className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/events"
              className="inline-block px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
            >
              View Events
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Community;
