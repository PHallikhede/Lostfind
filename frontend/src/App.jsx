import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Plus, Search, Heart, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const initialItems = [
  {
    id: 1, type: 'lost', name: 'Black Leather Wallet',
    description: 'Brown leather bifold wallet with several cards inside. Last seen near Central Park.',
    date: '2026-06-20', time: '14:30', location: 'Central Park, New York',
    contact: 'sarah.johnson@email.com', image: 'https://picsum.photos/id/1015/600/400',
    status: 'active', postedBy: 'Sarah Johnson', postedAt: '2026-06-21T10:15:00'
  },
  {
    id: 2, type: 'found', name: 'iPhone 15 Pro',
    description: 'Silver iPhone 15 Pro in a clear case. Found on the 4th floor of the library.',
    date: '2026-06-22', time: '09:45', location: 'City Library, Downtown',
    contact: 'mike.chen@email.com', image: 'https://picsum.photos/id/20/600/400',
    status: 'active', postedBy: 'Mike Chen', postedAt: '2026-06-22T11:20:00'
  },
  {
    id: 3, type: 'lost', name: 'Keys with Blue Keychain',
    description: 'Set of 4 keys on a blue carabiner keychain. One key has a Toyota logo.',
    date: '2026-06-19', time: '18:00', location: 'Metro Station - 42nd Street',
    contact: 'emma.wilson@email.com', image: 'https://picsum.photos/id/106/600/400',
    status: 'active', postedBy: 'Emma Wilson', postedAt: '2026-06-20T08:45:00'
  }
];

// LANDING PAGE with Framer Motion scroll animations
function Landing() {
  const navigate = useNavigate();

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    viewport: { once: true, margin: "-50px" }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <nav className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-primary text-lg">🔍</span>
              </div>
              <span className="font-semibold text-3xl tracking-tighter">LostFinder</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Scroll Animated + Background Image */}
      <div 
        className="relative min-h-[620px] flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.72)), url('https://picsum.photos/id/1005/2000/1200')` 
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
        
        <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-8">
          For your college • office • society
        </motion.div>
        
        <motion.h1 
          {...fadeUp} 
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-7xl md:text-[82px] font-semibold tracking-[-4.5px] leading-[0.92] mb-6 text-white"
        >
          Lost something?<br />
          <span className="text-blue-300">We’ll help you find it.</span>
        </motion.h1>
        
        <motion.p 
          {...fadeUp} 
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-lg mx-auto text-2xl text-white/90 mb-10"
        >
          The most beautiful way to report lost items and reunite with what matters.
        </motion.p>

        <motion.button 
          {...fadeUp} 
          transition={{ duration: 0.6, delay: 0.4 }}
          onClick={() => navigate('/app')}
          className="btn-primary group inline-flex items-center gap-3 px-11 py-4 text-xl font-semibold bg-blue-500 text-white hover:bg-blue-900 rounded-3xl active:scale-[0.985] transition-all shadow-2xl"
        >
          Get Started 
          <ArrowRight className="group-hover:translate-x-1 transition" size={24} />
        </motion.button>
        
        <div className="mt-5 text-sm text-white/70">Free forever • Instant access</div>
      </div>
    </div>



      {/* How it Works - Scroll Animation */}
      <div className="bg-gradient-to-b from-blue-50/40 to-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-primary font-semibold mb-3 tracking-[2px] text-sm">HOW IT WORKS</div>
          <h2 className="text-5xl font-semibold tracking-tight mb-12">Three simple steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Report", desc: "Post a photo + details of your lost or found item." },
              { num: "02", title: "Connect", desc: "People reach out via email and messages." },
              { num: "03", title: "Reunite", desc: "Meet up safely and get your item back." }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                {...fadeUp}
                transition={{ delay: 0.15 * index }}
                className="text-left"
              >
                <div className="text-7xl font-bold text-blue-200 mb-1">{step.num}</div>
                <div className="text-3xl font-semibold tracking-tight mb-2">{step.title}</div>
                <p className="text-gray-600 pr-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl font-semibold tracking-[-2.5px] mb-4">Ready to start?</div>
        <p className="text-xl text-gray-600 mb-8">Perfect for colleges, offices &amp; housing societies.</p>
        
        <button 
          onClick={() => navigate('/app')}
          className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/30"
        >
          Open LostFinder <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

// MAIN APP
function MainApp() {
  const [items, setItems] = useState([]); //item state is now initialized as an empty array to hold items fetched from the backend
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('lost');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {   // Fetch items from the backend when the component mounts
  fetchItems();
}, []);

const fetchItems = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/items`);
    const data = await response.json();

    const formattedItems = data.map(item => ({
      id: item._id,
      name: item.itemName,
      description: item.description,
      image: item.image,
      date: item.date,
      time: item.time,
      location: item.location,
      contact: item.email,
      type: item.status.toLowerCase(),
      returned: item.returned, 
      postedBy: "You",
      postedAt: item.createdAt,
    }));

    setItems(formattedItems);

  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

  const filteredItems = items
    .filter(item => {
      const matchesSearch = 
        (item.name || "").toLowerCase().includes(searchTerm.toLowerCase()) || //made changes here to avoid error when item.name is undefined
        (item.description || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.location || "").toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTab = activeTab === 'all' || item.type === activeTab;
      return matchesSearch && matchesTab;
    })
    .sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));

// handleing the posted and saving the item in the backend using fetch api and displaying the toast message
  const handlePostItem = async (newItem) => {
  try {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: newItem.type === "lost" ? "Lost" : "Found",
        itemName: newItem.name,
        description: newItem.description,
        image: newItem.image,
        date: newItem.date,
        time: newItem.time,
        location: newItem.location,
        email: newItem.contact,
      }),
    });

    const data = await response.json();

    if (data.success) { //changed setitems with real mongoDB data to avoid duplicate items and to show the newly added item in the list
    await fetchItems();  // Fetch the updated list of items from the backend

      toast.success("Item Posted Successfully");

      setShowModal(false);

    } else {

      toast.error("Unable to save item");

    }

  } catch (err) {

    console.log(err);

    toast.error("Backend not running");

  }
};
  const handleDelete = async (id) => {

  try {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/items/${id}`, {
      method: "DELETE"
    });

    const data = await response.json();

    if(data.success){

      toast.success("Item Deleted");

      fetchItems();

    }else{

      toast.error("Unable to delete");

    }

  } catch (error) {

    console.log(error);

    toast.error("Error deleting item");

  }

};
const handleReturned = async (id) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/items/${id}/returned`,
      {
        method: "PATCH",
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Item marked as returned");
      fetchItems();
    } else {
      toast.error("Failed to update item");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
  const handleContact = (item) => {
    setSelectedItem(item);
    setShowContactModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      
      {/* Navbar - Consistent Premium Theme */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => window.location.href = '/'} 
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
              >
                ← Home
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow">
                 <span className="text-primary text-xs">🔍</span>
                </div>
              <div className="flex items-center">
                <span className="font-semibold text-3xl tracking-tight">LostFinder</span>
                <div className="ml-2 w-6 h-6 flex items-centerr">
                </div>
              </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => { setModalType('lost'); setShowModal(true); }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-2xl transition-colors"
              >
                <Plus size={18} /> Report Lost
              </button>
              <button 
                onClick={() => { setModalType('found'); setShowModal(true); }}
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-2xl transition-colors"
              >
                <Plus size={18} /> Report Found
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner - Consistent */}
      <div className="bg-gradient-to-br from-primary to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="max-w-xl">
            <h1 className="text-5xl font-semibold tracking-tighter mb-3">Find what you've lost.<br />Help others find theirs.</h1>
            <p className="text-xl text-blue-100">A beautiful, modern platform to reunite people with their belongings.</p>
          </div>
        </div>
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Search + Filters - Mobile Responsive */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="relative flex-1 w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search items, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:border-primary text-sm"
            />
          </div>

          <div className="flex bg-white rounded-3xl border border-gray-200 p-1 w-full md:w-auto">
            {['all', 'lost', 'found'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 md:px-8 py-2.5 text-sm font-medium rounded-3xl transition-all ${activeTab === tab 
                  ? 'bg-primary text-white shadow' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div key={item.id} className="card bg-white border border-gray-100 rounded-3xl overflow-hidden group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-56 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3.5 py-1 rounded-2xl text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow
                    ${item.type === 'lost' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'}`}>
                    {item.type.toUpperCase()}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-semibold text-xl mb-1 tracking-tight">{item.name}</h3>
                  {item.returned && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold inline-block mt-2">
                      ✅ Returned</span>
                    )}
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin size={15} /> {item.location}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} /> {new Date(item.date).toLocaleDateString('en-US', {month:'short', day:'numeric'})}
                    </div>
                    <div>by {(item.postedBy || "You").split(' ')[0]}</div> 
                  </div>

                  <button 
                    onClick={() => handleContact(item)}
                    className="w-full py-2.5 flex items-center justify-center gap-3 text-sm font-semibold bg-gray-900 hover:bg-black-500 transition-colors text-white rounded-2xl"
                  >
                  {!item.returned ? (
                  <button
                    onClick={() => handleReturned(item.id)}
                    className=" mt-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-semibold"
                    >
                       Mark as Returned
                    </button>
                  ) : (
                  <button
                  onClick={() => handleDelete(item.id)}
                  className=" mt-2 py-3  hover:bg-red-600 text-white rounded-2xl font-semibold"
                  >
                  🗑 Delete Item
                  </button>
                )} 

                    <Heart size={16} /> Contact {item.type === 'lost' ? 'Owner' : 'Finder'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl font-medium">No items found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Post Item Modal */}
      {showModal && (
        <PostItemModal 
          type={modalType} 
          onClose={() => setShowModal(false)} 
          onSubmit={handlePostItem} 
        />
      )}
      {/* Contact Modal */}
{showContactModal && selectedItem && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4">
    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-7">

      <h3 className="text-2xl font-bold text-gray-800">
        Contact Owner
      </h3>

      <p className="text-gray-500 mb-5">
        Send a message to the owner of this item.
      </p>

      {/* Item Details */}
      <div className="bg-gray-50 border rounded-2xl p-4 mb-5">

        <h4 className="font-semibold text-lg">
          {selectedItem.name}
        </h4>

        <p className="text-sm text-gray-600">
          📍 {selectedItem.location}
        </p>

        <p className="text-sm text-gray-600 mt-2">
          <strong>Owner Email:</strong><br />
          {selectedItem.contact}
        </p>

      </div>

      {/* Contact Form */}
      <div className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={senderPhone}
          onChange={(e) => setSenderPhone(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={4}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-3">

        <button
          type="button"
          onClick={async () => {

            if (!senderName || !senderEmail || !senderPhone || !message) {
              toast.error("Please fill all fields");
              return;
            }

            try {

              const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ //sending the data to the backend to send the email
                  itemName: selectedItem.name,
                  ownerEmail: selectedItem.contact,
                  senderName,
                  senderEmail,
                  senderPhone,
                  message,
                }),
              });

              const data = await res.json();

              if (data.success) {

                toast.success("Message sent successfully!");

                setSenderName("");
                setSenderEmail("");
                setSenderPhone("");
                setMessage("");

                setShowContactModal(false);

              } else {

                toast.error(data.error || "Failed to send message");

              }

            } catch (err) {

              toast.error("Backend is not running.");

            }

          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          📧 Send Message
        </button>

        <button
          type="button"
          onClick={() => setShowContactModal(false)}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition"
        >
          Close
        </button>

      </div>

    </div>
  </div>
      )}
    </div>
  );
}

// Post Item Modal with Image Upload - Mobile Responsive
function PostItemModal({ type, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '', description: '', date: '', time: '', location: '', contact: '',
    image: 'https://picsum.photos/id/1016/600/400'
  });
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview(event.target.result);
      setFormData(prev => ({ ...prev, image: event.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, type, postedBy: 'Alex Rivera' });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="modal bg-white rounded-3xl max-w-md w-full p-6 md:p-7 max-h-[92vh] overflow-auto">
        <h2 className="text-2xl font-semibold tracking-tight mb-1">
          Report {type === 'lost' ? 'Lost' : 'Found'} Item
        </h2>
        <p className="text-gray-500 text-sm mb-5">Help others find their belongings</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Item Name</label>
            <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full border px-4 py-3 rounded-2xl" placeholder="e.g. Black iPhone case" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Description</label>
            <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
              rows={3} className="w-full border px-4 py-3 rounded-2xl resize-y" placeholder="Provide details..." />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1.5">Photo of the item</label>
            <div className="border border-dashed border-gray-300 rounded-2xl p-4">
              <input type="file" accept="image/*" onChange={handleImageChange} 
                className="block w-full text-sm file:mr-4 file:py-2 file:px-5 file:rounded-2xl file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white" />
              {(preview || formData.image) && (
                <img src={preview || formData.image} alt="Preview" className="mt-4 w-full h-40 object-cover rounded-xl border" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Date</label>
              <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full border px-4 py-3 rounded-2xl" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Time</label>
              <input type="time" required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full border px-4 py-3 rounded-2xl" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Location</label>
            <input type="text" required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full border px-4 py-3 rounded-2xl" placeholder="Where it was lost/found" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Your Email</label>
            <input type="email" required value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} className="w-full border px-4 py-3 rounded-2xl" placeholder="your@email.com" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button type="button" onClick={onClose} className="flex-1 py-3.5 border border-gray-300 rounded-2xl font-medium">Cancel</button>
            <button type="submit" className="flex-1 py-3.5 bg-green-400 text-white  border border-gray-300 font-semibold rounded-2xl">Post Item</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ROOT APP
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;