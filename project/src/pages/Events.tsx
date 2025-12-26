import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const upcomingWebinars = [
  {
    id: 1,
    title: 'Modern React Development Patterns',
    date: '2024-03-15',
    time: '10:00 AM PST',
    speaker: 'Sarah Johnson',
    description: 'Learn about the latest React patterns and best practices for building modern web applications.',
    category: 'Development',
    attendees: 150,
    image: 'https://source.unsplash.com/800x600/?coding,react',
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    date: '2024-03-20',
    time: '2:00 PM PST',
    speaker: 'Emily Rodriguez',
    description: 'Master the fundamentals of UI/UX design and create better user experiences.',
    category: 'Design',
    attendees: 120,
    image: 'https://source.unsplash.com/800x600/?design,ui',
  },
  {
    id: 3,
    title: 'Full-Stack Development with Node.js',
    date: '2024-03-25',
    time: '11:00 AM PST',
    speaker: 'Michael Chen',
    description: 'Build scalable applications using Node.js and modern backend technologies.',
    category: 'Development',
    attendees: 200,
    image: 'https://source.unsplash.com/800x600/?programming,computer',
  },
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Development', 'Design', 'DevOps'];

  const filteredWebinars = selectedCategory === 'All'
    ? upcomingWebinars
    : upcomingWebinars.filter(webinar => webinar.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Upcoming Webinars</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Join our expert-led sessions and enhance your skills
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebinars.map(webinar => (
              <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-indigo-600 mb-2">{webinar.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2" />
                      <span>{webinar.attendees} attending</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>Online Event</span>
                    </div>
                  </div>

                  <button
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
                    onClick={() => {
                      // Handle registration
                      console.log(`Registered for ${webinar.title}`);
                    }}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to become a speaker?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your knowledge with our community. We're always looking for expert speakers to host webinars.
          </p>
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
            onClick={() => {
              // Handle speaker application
              console.log('Speaker application clicked');
            }}
          >
            Apply as Speaker
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;