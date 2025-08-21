import React from 'react';

// Custom SVG Icons
const ServiceWorkerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500">
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

const NativeAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-green-500">
    <path fill="currentColor" d="M15 5h2v3h3v2h-3v3h-2V7h-3V5h3V2h2v3zm2 15c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V8h10v12zM8 5v1h10V5H8zm10-1c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10z"/>
  </svg>
);

const PerformanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-yellow-500">
    <path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
  </svg>
);

const UserEngagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-purple-500">
    <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const CrossPlatformIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-teal-500">
    <path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18V3zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm9 16H3V5h4v2h10V5h4v14z"/>
  </svg>
);

const SecureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-red-500">
    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4-3.31 7.54-7 8.86V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

const PWAFeatures = () => {
  const features = [
    { 
      icon: <ServiceWorkerIcon />, 
      title: 'Service Worker', 
      description: 'With the help of service worker, your PWA works in offline and background mode leading to improved productivity' 
    },
    { 
      icon: <NativeAppIcon />, 
      title: 'Native App-Like', 
      description: 'With PWA, the boundaries between native and web are merged. The look and feel no different from a native App' 
    },
    { 
      icon: <PerformanceIcon />, 
      title: 'Improved Performance', 
      description: 'PWA speed and performance are similar to native apps, in some cases better than native apps' 
    },
    { 
      icon: <UserEngagementIcon />, 
      title: 'High User Engagement', 
      description: 'With all the benefits listed above, your business will benefit from an increased user engagement' 
    },
    { 
      icon: <CrossPlatformIcon />, 
      title: 'Cross-Platform Compatible', 
      description: 'With PWA, you write code once, deploy anywhere-everywhere to avail cross-platform support' 
    },
    { 
      icon: <SecureIcon />, 
      title: 'Secure', 
      description: 'Since PWA is served over HTTPS, they offer the same security like native apps' 
    }
  ];

  const successStories = [
    { 
      logo: '/api/placeholder/150/50?text=UBER', 
      description: 'The commutation booking app loads in less than 3 seconds on a 2G network.' 
    },
    { 
      logo: '/api/placeholder/150/50?text=BookMyShow', 
      description: 'The app witnessed an 80% rise in conversions.' 
    },
    { 
      logo: '/api/placeholder/150/50?text=Tinder', 
      description: 'The dating app now loads in 4.69 seconds as opposed to 11.91 seconds earlier.' 
    },
    { 
      logo: '/api/placeholder/150/50?text=Twitter', 
      description: 'Twitter Lite led twitter to 65% increase in pages per session & 20% decrease in bounce rate.' 
    },
    { 
      logo: '/api/placeholder/150/50?text=Trivago', 
      description: 'The hotel booking app was installed by 150% more people on the home screen.' 
    },
    { 
      logo: '/api/placeholder/150/50?text=OpenSooq', 
      description: 'The PWA of this classified app got the business a 25% increase in engagement.' 
    }
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12">PWA Features</h1>
      
      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-bl from-aqua-400 to-black shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Success Stories Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">PWAs Are Revolutionizing Business Around The World</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are one of the leading PWA development companies, and we never are the sole patrons of the PWA power. 
          Many businesses witnessed a stark rise in their revenue due to tremendous conversion rates after PWA inclusion.
        </p>
      </div>

      {/* Success Stories Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {successStories.map((story, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-bl from-aqua-400 to-black shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            <img 
              src={story.logo} 
              alt={`Logo ${index + 1}`} 
              className="h-16 w-auto mb-4 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-gray-600">{story.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        
      </div>
    </div>
  );
};

export default PWAFeatures;