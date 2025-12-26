import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://source.unsplash.com/300x300/?portrait,woman,professional,1',
    bio: 'Former Google engineer with 15 years of experience in web development.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://source.unsplash.com/300x300/?portrait,man,professional,2',
    bio: 'Full-stack developer specializing in React and Node.js ecosystems.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Lead',
    image: 'https://source.unsplash.com/300x300/?portrait,woman,professional,3',
    bio: 'UI/UX designer with a passion for creating beautiful user experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Community Manager',
    image: 'https://source.unsplash.com/300x300/?portrait,man,professional,4',
    bio: 'Experienced community builder and event organizer.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

const Team = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            The passionate individuals behind CodeWithTechno
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-indigo-600">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-600">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-indigo-600">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and education.
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;