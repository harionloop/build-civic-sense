const categories = [
  {
    title: "Public Places",
    description: "Learn how to be a considerate citizen in shared public spaces.",
    imageUrl: "https://placehold.co/400x300/6b7280/ffffff?text=Public+Places",
    chapters: [
      {
        title: "Chapter 1: Respecting Public Property",
        sections: [
          {
            heading: "Shared Ownership",
            content: [
              "Public property, from benches and buses to monuments and libraries, belongs to the community. Vandalism, graffiti, and misuse not only cost taxpayers but also degrade our shared heritage.",
              "These shared assets are a testament to our collective investment. When you respect public property, you are respecting every single person who has contributed to and relies on it. Your actions show that you understand and value this shared trust."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.468 9.563 5 8 5a4 4 0 000 8h2m0-8h2m-2 8a4 4 0 01-8 0H3c.801-4.04 4.145-6.6 8.5-6.6a9.492 9.492 0 014.288.948" />
          </svg>`
          },
          {
            heading: "A Personal Responsibility",
            content: [
              "A key part of civic sense is treating public property with the same care and respect you would treat your own. Be a guardian of your community's assets and encourage others to do the same. This personal responsibility is a sign of maturity and social awareness."
            ]
          }
        ]
      },
      {
        title: "Chapter 2: Responsibility to Public Spaces",
        sections: [
          {
            heading: "Keep it Clean",
            content: [
              "Public spaces like parks, streets, and public transport are shared resources. It is everyone's responsibility to keep them clean and well-maintained. Littering is a major issue that detracts from the beauty and cleanliness of our surroundings. It shows a lack of respect for the environment and for the people who share these spaces with you.",
              "Properly disposing of your trash, even if it means carrying it with you until you find a bin, is a simple yet powerful act of civic sense. It's a clear signal that you value your community."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-green-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>`
          },
          {
            heading: "Vandalism and Damage",
            content: [
              "Defacing public property, whether through graffiti or physical damage, is not just a crime; it's a direct attack on the community's resources. Such acts cost taxpayers money and make the environment less inviting for everyone. Report damages instead of ignoring them.",
              "Instead of a destructive mindset, cultivate a protective one. If you see a damaged bench or a broken street light, take the initiative to report it to the proper authorities. You are a guardian of your community's assets."
            ],
            tip: "Next time you're in a public space, try to find the nearest dustbin or recycling container. Being aware of these resources is the first step to using them!"
          },
        ]
      },
    ]
  },
  {
    title: "Community Living",
    description: "Essential etiquette for peaceful co-existence with your neighbors.",
    imageUrl: "https://placehold.co/400x300/4a5568/ffffff?text=Community+Living",
    chapters: [
      {
        title: "Chapter 1: The Role of Community",
        sections: [
          {
            heading: "Building a Collective",
            content: [
              "A community is a collective. Participating in local events, volunteering for neighborhood clean-ups, and helping your neighbors builds a stronger, more connected society. Don't be a passive bystander; be an active participant.",
              "When you get involved, you not only improve your neighborhood but also build social bonds. These connections are vital for community resilience and well-being. Look for opportunities to contribute, no matter how small."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h-7c-2.761 0-5-2.239-5-5s2.239-5 5-5h7l-3-3m0 6l3 3m-3-3v-6" />
          </svg>`
          },
          {
            heading: "Fostering a Sense of Belonging",
            content: [
              "Being an active and engaged member of your community helps foster a sense of belonging and collective responsibility. When you contribute, you'll feel a greater connection to the people and places around you. This sense of belonging is a powerful motivator for positive change."
            ],
            tip: "Consider joining a local community group or volunteer for a cause you care about. It's a great way to meet like-minded people and contribute to a cause you believe in."
          }
        ]
      }
    ]
  },
  {
    title: "Digital World",
    description: "Responsible conduct for online interactions and social media.",
    imageUrl: "https://placehold.co/400x300/a0aec0/000000?text=Digital+World",
    chapters: [
      {
        title: "Chapter 1: Digital Civic Sense",
        sections: [
          {
            heading: "Civic Sense in the Digital World",
            content: [
              "In the modern age, civic sense extends to the digital world. This includes responsible social media use, avoiding the spread of misinformation, and being respectful in online communities. The same rules of respect and politeness apply online.",
              "Just as in the physical world, your actions online have a direct impact on others. Cyberbullying, trolling, and spreading false information can cause real harm. Be a positive force in your online interactions."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-purple-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>`
          },
          {
            heading: "Think Before You Post",
            content: [
              "Before sharing something online, consider its accuracy and potential impact. Fact-check information, and remember that there's a real person behind every screen. Your online actions have a real-world impact, both on others and on your own reputation. Be a source of truth and positivity in the digital space."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Environment",
    description: "How to conserve resources and manage waste for a cleaner planet.",
    imageUrl: "https://placehold.co/400x300/48bb78/ffffff?text=Environment",
    chapters: [
      {
        title: "Chapter 1: Environment & Waste Management",
        sections: [
          {
            heading: "Proper Waste Disposal",
            content: [
              "Proper waste disposal is crucial for a clean environment. Segregating waste into recyclables and non-recyclables is a simple yet impactful habit. Remember that a clean neighborhood reflects a conscientious community. When you dispose of waste correctly, you are actively participating in protecting your local ecosystem.",
              "By choosing to recycle, you're helping to reduce the amount of waste sent to landfills and conserving natural resources. It’s a small step that makes a big difference over time."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`
          },
          {
            heading: "Reduce, Reuse, Recycle",
            content: [
              "Avoid single-use plastics and choose sustainable alternatives whenever possible. Every small effort helps in the collective fight against environmental degradation. Your choices as a consumer have a direct impact on the world around you. By reducing your consumption and reusing items, you minimize your environmental footprint."
            ],
            tip: "Keep a reusable bag with you at all times. This small change eliminates the need for plastic bags, a major source of pollution."
          }
        ]
      }
    ]
  },
  {
    title: "Road Safety",
    description: "Understanding and following traffic rules is a shared responsibility.",
    imageUrl: "https://placehold.co/400x300/ecc94b/000000?text=Road+Safety",
    chapters: [
      {
        title: "Chapter 1: Road Safety & Traffic Rules",
        sections: [
          {
            heading: "It's a Shared Responsibility",
            content: [
              "Following traffic rules is not just a legal obligation; it's a fundamental aspect of civic sense that ensures the safety of all road users. This includes pedestrians, cyclists, and drivers. Ignoring rules puts everyone at risk.",
              "When you are on the road, you are part of a complex system. Your adherence to rules, such as using indicators and staying within speed limits, contributes to the smooth and safe flow of traffic for everyone. It's a collective effort to prevent accidents and save lives."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-yellow-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14m-9 0v-5m-6 5V9m9 0h6m-3-6h.01M9 19v-5" />
          </svg>`
          },
          {
            heading: "Simple Rules to Live By",
            content: [
              "Always use crosswalks, respect traffic signals, and give way to emergency vehicles. These simple actions prevent accidents and contribute to a smoother flow of traffic. Be a patient and predictable presence on the road. Remember, your actions on the road have consequences for everyone around you."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Food Eating",
    description: "Etiquette and behavior related to food in public and private spaces.",
    imageUrl: "https://placehold.co/400x300/f6ad55/000000?text=Food+Etiquette",
    chapters: [
      {
        title: "Chapter 1: Dining with Civic Sense",
        sections: [
          {
            heading: "Cleanliness and Consideration",
            content: [
              "Whether you're in a food court or a restaurant, leaving your table clean for the next person is a fundamental act of civic sense. This includes clearing your plates, disposing of waste, and wiping up any spills. This small effort helps maintain a clean and pleasant environment for everyone.",
              "Consider the impact of your actions on others. Loud eating noises, leaving a mess, or taking up more space than you need can be disruptive. Be mindful of your surroundings."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-orange-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 21v-8m0 0a4 4 0 00-4-4H4m8 4a4 4 0 014-4h4" />
            </svg>`
          },
          {
            heading: "Handling Leftovers",
            content: [
              "If you have leftovers from a meal, ensure they are disposed of properly. Don't leave food waste in public bins that are not designed for it, as this can attract pests and create bad smells. It's your responsibility to handle your food waste properly."
            ],
            tip: "When dining out, try to finish everything on your plate to minimize food waste. If you can't, ask for a to-go box rather than throwing it away."
          }
        ]
      }
    ]
  },
  {
    title: "Public Transport",
    description: "Navigating buses, trains, and subways with courtesy and respect.",
    imageUrl: "https://placehold.co/400x300/718096/ffffff?text=Public+Transport",
    chapters: [
      {
        title: "Chapter 1: Etiquette on the Go",
        sections: [
          {
            heading: "Be Considerate to Others",
            content: [
              "Public transport is a shared space. Offer your seat to the elderly, pregnant women, or people with disabilities. Avoid blocking the entry and exit points and keep your bags close to you to save space for others. This simple act of courtesy makes a huge difference in someone's day.",
              "Respect others' personal space. Avoid loud phone calls and keep your music volume low. Public transport should be a calm and comfortable experience for everyone."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0h5m-5 0h8m0 0v-10a2 2 0 00-2-2H9m1.5-6h.01M16 19v-6a2 2 0 00-2-2h-2m2 8h2a2 2 0 002-2v-6a2 2 0 00-2-2h-2" />
            </svg>`
          },
          {
            heading: "Mind Your Manners",
            content: [
              "Waiting in line to board a bus or train is a sign of respect for others. Avoid pushing or cutting in line. When you exit, let others off the vehicle first. These small courtesies make the journey smoother for everyone."
            ],
            tip: "If you are standing, try to hold onto the railings instead of leaning on a seat. This is a subtle way to show respect for the person sitting below you."
          }
        ]
      }
    ]
  },
  {
    title: "Foreign Lands",
    description: "Understanding cultural norms and traditions to be a respectful visitor.",
    imageUrl: "https://placehold.co/400x300/a0aec0/ffffff?text=Foreign+Lands",
    chapters: [
      {
        title: "Chapter 1: Respecting Local Customs",
        sections: [
          {
            heading: "Cultural Sensitivity",
            content: [
              "When visiting a foreign country, it is a sign of respect to learn about and follow local customs and traditions. This includes understanding appropriate dress codes, greetings, and dining etiquette. What is acceptable in your country may not be in another.",
              "Take the time to research local laws and social norms before you travel. Your actions as a tourist reflect on your entire culture, so it’s important to be a good ambassador."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7-7-7m0 0v-2a1 1 0 011-1h3m3 8h6M9 9h6" />
            </svg>`
          },
          {
            heading: "Language and Communication",
            content: [
              "Even a basic understanding of a few key phrases in the local language can go a long way. People appreciate the effort you make to communicate. Be patient and polite, even if there is a language barrier. A smile is a universal sign of respect."
            ],
            tip: "Learn to say 'hello,' 'please,' and 'thank you' in the local language. This simple gesture can open doors and create a positive experience."
          }
        ]
      }
    ]
  },
  {
    title: "Communication",
    description: "Politeness and empathy in daily conversations.",
    imageUrl: "https://placehold.co/400x300/d53f8c/ffffff?text=Communication",
    chapters: [
      {
        title: "Chapter 1: The Art of Civil Conversation",
        sections: [
          {
            heading: "Mind Your Words",
            content: [
              "Civic sense in communication is about being polite and respectful, even when you disagree with someone. Avoid shouting, insults, and personal attacks. Remember that a civil conversation can lead to a productive outcome.",
              "Listen more than you speak. Show genuine interest in what others have to say. This not only makes them feel valued but also helps you better understand their perspective."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-pink-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16l3-3m0 0l3 3m-3-3v8" />
            </svg>`
          },
          {
            heading: "Show Empathy",
            content: [
              "Try to put yourself in someone else's shoes. Understand their feelings and perspectives. This empathy can help you diffuse tense situations and build stronger, more meaningful connections with the people around you. A little empathy can create a lot of kindness."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Emergency Situations",
    description: "Responding responsibly and calmly during emergencies.",
    imageUrl: "https://placehold.co/400x300/f6e05e/000000?text=Emergency",
    chapters: [
      {
        title: "Chapter 1: Keeping a Cool Head",
        sections: [
          {
            heading: "Staying Calm",
            content: [
              "In an emergency, your actions can have a profound impact on the safety of others. The most important thing is to stay calm and follow the instructions of emergency personnel. Avoid panicking or spreading misinformation, as this can cause more harm than good.",
              "If you are able to, help others who may be in distress. Check on your neighbors, assist the elderly or children, and provide any help you can. Your help in these situations can save lives."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-yellow-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4.5a9 9 0 1113.876 0M10 21v-3" />
            </svg>`
          },
          {
            heading: "Giving Way to Emergency Vehicles",
            content: [
              "Always give way to emergency vehicles like ambulances and fire trucks. Pull over to the side of the road and let them pass. Every second counts in an emergency, and your cooperation can make a life-saving difference."
            ],
            tip: "Keep a basic first-aid kit in your car or home. It's a small step that can make a huge difference in a minor emergency."
          }
        ]
      }
    ]
  },
  {
    title: "Noise Pollution",
    description: "Tips for minimizing noise and respecting others' peace.",
    imageUrl: "https://placehold.co/400x300/d32f2f/ffffff?text=Noise",
    chapters: [
      {
        title: "Chapter 1: Noise Pollution & Etiquette",
        sections: [
          {
            heading: "The Problem of Noise",
            content: [
              "Noise pollution can be a major source of frustration in shared living spaces. Loud conversations on phones, blaring music, and excessive honking all contribute to a less peaceful environment. This can be especially disruptive in residential areas and public transport.",
              "Unnecessary noise disrupts the peace and tranquility of others. It can affect their concentration, sleep, and overall well-being. A silent environment is a gift you give to your community."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.899a9 9 0 010 12.728M8.464 8.464l7.072 7.072m-.707 3.536a5 5 0 01-7.072 0m-2.828 9.899a9 9 0 01-12.728 0m.707-.707l-7.072-7.072" />
          </svg>`
          },
          {
            heading: "Practice Quiet Etiquette",
            content: [
              "Practice quiet etiquette in public places like hospitals, libraries, and movie theaters. This shows respect for others who need a peaceful environment. A little thoughtfulness goes a long way in ensuring a calm and respectful atmosphere for everyone. It's about being aware of your surroundings and the people in them."
            ],
            tip: "Consider wearing headphones in public even if you're not listening to anything. This is a subtle way to show others that you're being mindful of noise levels."
          }
        ]
      }
    ]
  },
  {
    title: "Energy & Water",
    description: "Simple steps for conserving valuable resources.",
    imageUrl: "https://placehold.co/400x300/3182ce/ffffff?text=Energy+%26+Water",
    chapters: [
      {
        title: "Chapter 1: Conservation",
        sections: [
          {
            heading: "Conserving Our Resources",
            content: [
              "Our natural resources are finite. Civic sense includes a responsibility to conserve water and energy for future generations. This is a crucial element of being a responsible global citizen. By using resources wisely, you're ensuring that they are available for others and for the future.",
              "Small actions, like turning off lights when you leave a room or taking shorter showers, can add up to a significant impact. Be a steward of the environment in your daily life."
            ],
            svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-indigo-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>`
          },
          {
            heading: "Habits for a Sustainable Future",
            content: [
              "Turn off lights when you leave a room, fix leaky faucets, and be mindful of your water usage. Every drop and watt saved contributes to a more sustainable future. These habits start at home and can be applied everywhere you go. Encourage others to do the same by setting a good example."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "The Foundation",
    description: "Understanding the core principles of civic sense.",
    imageUrl: "https://placehold.co/400x300/9b2c2c/ffffff?text=The+Foundation",
    chapters: [
      {
        title: "Chapter 1: The Foundation of Civic Sense",
        sections: [
          {
            heading: "What is Civic Sense?",
            content: [
              "Civic sense is an unwritten code of conduct that people in a society are expected to follow. It's about respecting public spaces, being courteous to others, and contributing to a harmonious community. It's not about big, grand gestures, but the small, consistent actions that collectively make a big impact.",
              "Think of it as the social glue that holds a community together. It's the silent agreement to be a responsible, respectful, and considerate neighbor to everyone, whether you know them or not. From keeping public areas clean to being mindful of your words, civic sense is a reflection of your character and your commitment to a better society."
            ],
            lottie: {
              "v": "5.7.4", "fr": 30, "ip": 0, "op": 60, "w": 100, "h": 100, "nm": "Civic Sense Start", "ddd": 0,
              "assets": [],
              "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Circle", "sr": 1, "ks": { "o": { "a": 0, "k": 100 }, "r": { "a": 1, "k": [{ "i": { "x": 0.67, "y": 0 }, "o": { "x": 0.33, "y": 1 }, "t": 0, "v": 0 }, { "t": 60, "v": 360 }] }, "p": { "a": 0, "k": [50, 50, 0] }, "s": { "a": 0, "k": [100, 100, 100] } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "el", "d": 1, "s": { "a": 0, "k": [60, 60] }, "p": { "a": 0, "k": [0, 0] } }, { "ty": "st", "c": { "a": 0, "k": [0.6, 0.4, 0.9, 1] }, "o": { "a": 0, "k": 100 }, "w": { "a": 0, "k": 5 } }, { "ty": "tr", "p": { "a": 0, "k": [0, 0] }, "a": { "a": 0, "k": [0, 0] }, "s": { "a": 0, "k": [100, 100] } }], "nm": "Ellipse Group" }], "ip": 0, "op": 60 }]
            }
          },
          {
            heading: "Why It Matters",
            content: [
              "A strong civic sense is the bedrock of a well-functioning society. It reduces conflict, promotes public safety, and fosters a sense of collective ownership. When everyone contributes, the community becomes a more pleasant and efficient place to live.",
              "This app is your guide to understanding and practicing these core values, helping you become a more responsible and respected member of your community. It's about moving from an 'I' mentality to a 'we' mentality."
            ],
            tip: "A good way to start practicing civic sense is to simply smile at strangers you pass on the street. It can brighten their day and costs you nothing!"
          },
          {
            heading: "A Quick Check",
            content: [
              "Civic sense is not about large, grand gestures, but is built on small, consistent actions."
            ]
          }
        ]
      },
    ]
  },
];


export default categories;
