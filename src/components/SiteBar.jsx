import React from 'react'

function SiteBar() {
  const trends = [
    { id: 1, country: "Germany", topic: "Revolution", tweets: "50.4K Tweets" },
    { id: 2, country: "Germany", topic: "Revolution", tweets: "50.4K Tweets" },
    { id: 3, country: "Germany", topic: "Revolution", tweets: "50.4K Tweets" },
  ];

  const suggestions = [
    { id: 1, name: "Mushtariy", handle: "@Mushtar565266", img: "https://picsum.photos/50" },
    { id: 2, name: "Shuhratbek", handle: "@mrshukhrat", img: "https://picsum.photos/50" },
  ];
  return (
    <div className='sitebar overflow-y-auto w-[25%] h-[100vh]'>
    <div className="w-[20%x] p-4 space-y-4">
      <div className="flex items-center bg-gray-100 rounded-full p-2">
        <svg className="w-5 h-5 text-gray-500 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l4-4m0 0l4-4m-4 4v12" />
        </svg>
        <input type="text" placeholder="Search Twitter" className="bg-transparent outline-none pl-3 w-full" />
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Trends for you</h2>
        {trends.map(trend => (
          <div key={trend.id} className="mb-4">
            <p className="text-gray-500">Trending in {trend.country}</p>
            <p className="font-bold">{trend.topic}</p>
            <p className="text-gray-500 text-sm">{trend.tweets}</p>
          </div>
        ))}
        <button className="text-blue-500">Show more</button>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">You might like</h2>
        {suggestions.map(user => (
          <div key={user.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img className="rounded-full" src={user.img} alt={user.name} width={40} height={40} />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-500">{user.handle}</p>
              </div>
            </div>
            <button className="bg-black text-white py-1 px-4 rounded-full">Follow</button>
          </div>
        ))}
        <button className="text-blue-500">Show more</button>
      </div>

      <div className="text-gray-500 text-sm">
        <p className="mb-1">Terms of Service Privacy Policy Cookie Policy</p>
        <p className="mb-1">Imprint Ads Info More ...</p>
        <p>© 2021 Twitter, Inc.</p>
      </div>
    </div>
    </div>
  );
}


export default SiteBar