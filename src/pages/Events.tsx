import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Events() {
  const upcomingEvents = [
    {
      title: "Design Innovation Summit 2025",
      tag: "Design · Offline",
      description: "A full-day seminar on graphic design, UI/UX principles, and creative thinking for students and professionals.",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      attendees: "200+",
      bgColor: "#0073E6"
    },
    {
      title: "Web Development Bootcamp",
      tag: "Tech · Hybrid",
      description: "Intensive hands-on workshop covering HTML, CSS, JavaScript, and React fundamentals with industry experts.",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      attendees: "80+",
      bgColor: "#00A651"
    },
    {
      title: "AI & Machine Learning Series",
      tag: "Tech · Online",
      description: "Expert-led webinar series exploring AI applications, ML models, and real-world implementations.",
      date: "March 28, 2025",
      time: "6:00 PM - 7:30 PM",
      attendees: "500+",
      bgColor: "#0073E6"
    },
    {
      title: "Figma Design Workshop",
      tag: "Design · Offline",
      description: "Learn professional UI/UX design using Figma. Create portfolios and design systems from scratch.",
      date: "April 5, 2025",
      time: "2:00 PM - 6:00 PM",
      attendees: "60+",
      bgColor: "#00A651"
    }
  ];

  const pastEvents = [
    {
      title: "Design Fusion Season 1",
      tag: "Design · Offline",
      description: "A seminar on design thinking, graphic design, and UI/UX for students.",
      participants: "180",
      bgColor: "#0073E6"
    },
    {
      title: "Design Fusion Season 2",
      tag: "Design · Offline",
      description: "A seminar on design thinking, graphic design, brand designing, and UI/UX for students.",
      participants: "220",
      bgColor: "#00A651"
    },
    {
      title: "Tech Talk Series",
      tag: "Tech · Online",
      description: "A series of webinars with industry speakers on technology and design topics.",
      participants: "450",
      bgColor: "#0073E6"
    },
    {
      title: "Hands-on Workshops",
      tag: "Hybrid",
      description: "Practical sessions on tools like Figma, Canva, and basic web development.",
      participants: "320",
      bgColor: "#00A651"
    }
  ];

  return (
    <div style={{ backgroundColor: '#f0f7ff' }} className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Our <span style={{ color: '#0073E6' }}>
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for inspiring workshops, seminars, and networking opportunities
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div style={{ backgroundColor: event.bgColor }} className="h-32 flex items-center justify-center relative">
                    <Calendar className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div style={{ backgroundColor: event.bgColor === '#0073E6' ? '#e6f2ff' : '#e6f7f0', color: event.bgColor }} className="inline-block px-4 py-1 rounded-full text-sm font-semibold">
                      {event.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    <div className="space-y-2 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">{event.attendees} expected attendees</span>
                      </div>
                    </div>
                    <button style={{ backgroundColor: event.bgColor }} className="w-full mt-4 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                      <span>Register Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div style={{ backgroundColor: event.bgColor }} className="h-32 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div style={{ backgroundColor: event.bgColor === '#0073E6' ? '#e6f2ff' : '#e6f7f0', color: event.bgColor }} className="inline-block px-4 py-1 rounded-full text-sm font-semibold">
                      {event.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Users className="w-5 h-5" />
                        <span className="text-sm">{event.participants} participants</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#0073E6' }} className="rounded-3xl p-12 text-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Never Miss an Event</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about upcoming workshops, webinars, and exclusive community events.
          </p>
          <Link
            to="/contact"
            style={{ color: '#0073E6' }}
            className="inline-block px-8 py-4 bg-white text-lg font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Join Community
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;
