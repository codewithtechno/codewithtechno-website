import { Code, Palette, Users, Award, Target, Lightbulb, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const focusAreas = [
    { title: 'Graphic Design', description: 'Learn principles of visual design and creative branding' },
    { title: 'UI/UX Design', description: 'Master user experience and interface design patterns' },
    { title: 'Web Development', description: 'Build responsive and modern web applications' },
    { title: 'App Development', description: 'Develop mobile apps for iOS and Android' },
    { title: 'Emerging Tech', description: 'Explore AI, ML, IoT, and blockchain technologies' },
    { title: 'Career Growth', description: 'Get mentorship and job opportunities' }
  ];

  const teamMembers = [
    { name: 'Founder & Lead', role: 'Vision & Strategy', icon: Target },
    { name: 'Event Manager', role: 'Event Organization', icon: Calendar },
    { name: 'Community Lead', role: 'Member Support', icon: Users }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff' }} className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            About <span style={{ color: '#0073E6' }}>
              CodeWithTechno
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            CodeWithTechno is a vibrant community empowering engineering students and tech enthusiasts through quality education, industry mentorship, and hands-on project opportunities in design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div style={{ backgroundColor: '#e6f2ff' }} className="rounded-2xl p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Target style={{ color: '#0073E6' }} className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To create an inclusive community where students develop professional skills, build real-world projects, and connect with industry experts to launch successful careers in design and technology.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div style={{ backgroundColor: '#e6f7f0' }} className="rounded-2xl p-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Lightbulb style={{ color: '#00A651' }} className="w-8 h-8" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be the leading platform for design and tech education in India, fostering innovation and building a community of skilled professionals who drive positive change in the industry.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Heart style={{ color: '#0073E6' }} className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Passion</h3>
              <p className="text-gray-600">We are driven by passion for design, technology, and education</p>
            </div>
            <div className="text-center space-y-4">
              <Users style={{ color: '#00A651' }} className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Community</h3>
              <p className="text-gray-600">We believe in the power of collective learning and support</p>
            </div>
            <div className="text-center space-y-4">
              <Award style={{ color: '#0073E6' }} className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every event and interaction</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div style={{ backgroundColor: '#e6f2ff' }} className="flex items-start space-x-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <Calendar style={{ color: '#0073E6' }} className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Organize Events</h3>
                <p className="text-gray-600">
                  Conduct seminars, webinars, workshops, and hackathons on campus and online, bringing together students and industry experts
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#e6f7f0' }} className="flex items-start space-x-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <Users style={{ color: '#00A651' }} className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Communities</h3>
                <p className="text-gray-600">
                  Bridge the gap between students and industry professionals through mentorship and networking opportunities
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#e6f7f0' }} className="flex items-start space-x-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <Award style={{ color: '#00A651' }} className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Portfolios</h3>
                <p className="text-gray-600">
                  Help students create impressive portfolios and work on real-world projects that showcase their skills
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: '#e6f2ff' }} className="flex items-start space-x-4 p-6 rounded-2xl hover:shadow-lg transition-shadow">
              <Code style={{ color: '#0073E6' }} className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-on Learning</h3>
                <p className="text-gray-600">
                  Provide practical workshops on industry-standard tools and cutting-edge technologies
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Palette style={{ color: index % 2 === 0 ? '#0073E6' : '#00A651' }} className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold" style={{ color: '#0073E6' }}>15+</p>
              <p className="text-gray-600 font-semibold">Events Organized</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold" style={{ color: '#00A651' }}>1000+</p>
              <p className="text-gray-600 font-semibold">Students Reached</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold" style={{ color: '#0073E6' }}>50+</p>
              <p className="text-gray-600 font-semibold">Industry Speakers</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold" style={{ color: '#00A651' }}>500+</p>
              <p className="text-gray-600 font-semibold">Active Members</p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#0073E6' }} className="rounded-3xl p-12 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Join Our Growing Community</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Be part of a movement that's transforming design and tech education in India. Connect with passionate students and industry experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
              style={{ color: '#0073E6' }}
            >
              Get Started
            </Link>
            <Link
              to="/events"
              className="inline-block px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
