import { Link } from 'react-router-dom';
import { Calendar, Award, Users, TrendingUp, Star } from 'lucide-react';

function Home() {
  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '15+', label: 'Events Organized' },
    { number: '1000+', label: 'Students Reached' },
    { number: '50+', label: 'Industry Speakers' }
  ];

  const testimonials = [
    {
      quote: 'CodeWithTechno transformed my understanding of UI/UX design. The community support is incredible!',
      author: 'Sarah Johnson',
      role: 'UI/UX Designer'
    },
    {
      quote: 'The workshops here are practical and industry-relevant. I landed my first dev job after attending!',
      author: 'Arjun Singh',
      role: 'Full Stack Developer'
    },
    {
      quote: 'Being part of this community opened so many networking opportunities. Highly recommended!',
      author: 'Priya Sharma',
      role: 'Graphic Designer'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff' }} className="min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Design. Code. Innovate with{' '}
                <span style={{ color: '#0073E6' }}>
                  CodeWithTechno
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A vibrant community where students learn, build projects, and connect with industry professionals through design and tech events.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/contact"
                style={{ backgroundColor: '#0073E6' }}
                className="px-8 py-4 text-white text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Join the Community
              </Link>
              <Link
                to="/events"
                style={{ borderColor: '#0073E6', color: '#0073E6' }}
                className="px-8 py-4 bg-white text-lg font-semibold rounded-full border-2 hover:bg-blue-50 transform hover:scale-105 transition-all"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-4xl sm:text-5xl font-bold" style={{ color: '#0073E6' }}>
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Join CodeWithTechno?</h2>
            <p className="text-xl text-gray-600">Learn, network, and grow with the best community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: '#e6f2ff' }} className="rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <Calendar style={{ color: '#0073E6' }} className="w-12 h-12" />
              <h3 className="text-2xl font-bold text-gray-900">Diverse Events</h3>
              <p className="text-gray-600">Seminars, webinars, hackathons, and hands-on workshops across design and technology</p>
            </div>

            <div style={{ backgroundColor: '#e6f7f0' }} className="rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <Users style={{ color: '#00A651' }} className="w-12 h-12" />
              <h3 className="text-2xl font-bold text-gray-900">Expert Mentors</h3>
              <p className="text-gray-600">Learn directly from industry professionals with years of real-world experience</p>
            </div>

            <div style={{ backgroundColor: '#f0f7ff' }} className="rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
              <TrendingUp style={{ color: '#0073E6' }} className="w-12 h-12" />
              <h3 className="text-2xl font-bold text-gray-900">Career Growth</h3>
              <p className="text-gray-600">Build your portfolio, network with peers, and unlock career opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Real feedback from real members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 space-y-4 hover:shadow-xl transition-shadow">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0073E6' }} className="py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">Upcoming Featured Event</h2>
          <h3 className="text-3xl font-semibold">Design Innovation Summit 2025</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A full-day seminar on graphic design, UI/UX principles, and creative thinking for students and professionals.
          </p>
          <Link
            to="/events"
            style={{ color: '#0073E6' }}
            className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all mt-6"
          >
            Explore All Events
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of students and professionals who are advancing their careers through design and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              style={{ backgroundColor: '#0073E6' }}
              className="px-8 py-4 text-white text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              style={{ borderColor: '#0073E6', color: '#0073E6' }}
              className="px-8 py-4 bg-white text-lg font-semibold rounded-full border-2 hover:bg-blue-50 transform hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
