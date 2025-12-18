import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: subscribeEmail }]);

      if (error) throw error;

      setShowSubscribeSuccess(true);
      setSubscribeEmail('');
      setTimeout(() => setShowSubscribeSuccess(false), 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Error subscribing. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f7ff' }} className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Contact <span style={{ color: '#0073E6' }}>
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any queries or suggestions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>

            {showSuccess && (
              <div className="flex items-center space-x-2 p-4 rounded-xl" style={{ backgroundColor: '#e6f7f0', color: '#00A651' }}>
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ borderColor: '#0073E6', '--tw-ring-color': '#0073E6' } as React.CSSProperties}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ borderColor: '#0073E6', '--tw-ring-color': '#0073E6' } as React.CSSProperties}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  style={{ borderColor: '#0073E6', '--tw-ring-color': '#0073E6' } as React.CSSProperties}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: '#0073E6' }}
                className="w-full px-6 py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>

              <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ backgroundColor: '#e6f2ff' }}>
                <Mail style={{ color: '#0073E6' }} className="w-6 h-6" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a href="mailto:contact@codewithtechno.in" style={{ color: '#0073E6' }} className="font-semibold hover:underline">
                    contact@codewithtechno.in
                  </a>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0073E6' }} className="rounded-3xl shadow-xl p-8 text-white space-y-6">
              <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="opacity-90">
                Get updates about upcoming events, workshops, and exclusive community opportunities.
              </p>

              {showSubscribeSuccess && (
                <div className="flex items-center space-x-2 p-4 bg-white text-green-700 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>Successfully subscribed!</span>
                </div>
              )}

              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  required
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  style={{ color: '#0073E6' }}
                  className="w-full px-6 py-3 bg-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Get Updates
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
