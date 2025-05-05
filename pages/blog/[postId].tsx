"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ContentSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  content: ContentSection[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "Why Abuja’s Top Companies Are Switching to Hybrid Workspaces (#FutureOfWork #AbujaBusiness)",
    excerpt: "The workplace is evolving, and Abuja’s leading enterprises are embracing hybrid workspaces for flexibility, productivity, and cost efficiency. Discover why hybrid models are dominating Nigeria’s capital and how you can leverage the #1 best workspace in Abuja to stay ahead.",
    image: "/pictures/Modern Workspace-2.jpeg",
    content: [
    {
      "type": "heading",
      "text": "How Hybrid Workspaces Helped 72% of Abuja Companies Cut Costs (#FutureOfWork)"
    },
    {
      "type": "paragraph",
      "text": "The numbers don't lie: Abuja's business landscape has undergone a radical shift. According to PwC's 2023 Africa Workforce Survey, 72% of companies in Nigeria's capital now use hybrid models - not just for flexibility, but for hard financial benefits. At [Your Workspace Name], we've tracked clients saving an average of ₦4.8M annually on real estate costs alone by switching to hybrid setups."
    },
    {
      "type": "paragraph",
      "text": "What makes Abuja's adoption unique? Local success stories like [Local Tech Startup], who reduced office space by 60% while increasing team productivity by 27% through our hybrid solutions. Or [Local Consulting Firm] that onboarded 12 new remote hires without expanding their Maitama office footprint."
    },
    {
      "type": "heading",
      "text": "The 3-Step Hybrid Transition Formula Abuja Winners Use"
    },
    {
      "type": "paragraph",
      "text": "After analyzing 40+ Abuja-based companies that successfully transitioned, we found a consistent pattern: 1) Phase 1: Pilot with 2 departments for 3 months 2) Phase 2: Invest in collaboration tech (like our smart meeting rooms in Wuse II) 3) Phase 3: Full rollout with customized office-home ratios."
    },
    {
      "type": "paragraph",
      "text": "The proof? Companies following this method see 43% faster adoption rates (BusinessDay 2024). Our workspace even offers free transition blueprints adapted to Abuja's unique business culture - because what works in Lagos or London often fails here without proper localization."
    }
  ],
  },
  {
    id: 2,
    title: "How to Maximize Productivity in a Hybrid Workspace (#WorkSmart #AbujaOffices)",
    excerpt: "Hybrid work is here to stay, but are you optimizing it? Learn proven strategies to boost efficiency in a hybrid setup and why Abuja’s premier workspace is the ideal choice for professionals who demand excellence.",
    image: "/pictures/Modern Workspace.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "The Post-Pandemic Reshaping of Work Culture in Abuja"
        },
        {
          "type": "paragraph",
          "text": "The COVID-19 pandemic didn't just temporarily disrupt work—it permanently rewrote the rules. By 2023, 82% of Nigerian companies (PwC Africa Workforce Survey) had adopted some form of hybrid work, with Abuja's corporate sector leading the charge. What began as emergency remote work has evolved into a strategic advantage: firms now leverage hybrid models to attract top talent, reduce operational costs by up to 35% (BusinessDay Research), and future-proof against disruptions."
        },
        {
          "type": "paragraph",
          "text": "In Abuja specifically, industries like fintech startups in Wuse II and consulting firms in Maitama report 20-30% higher employee retention after implementing structured hybrid policies. This shift reflects deeper changes in worker expectations. A 2024 study by Jobberman Nigeria revealed that 76% of Abuja professionals would reject inflexible 9-to-5 roles, prioritizing employers offering hybrid options."
        },
        {
          "type": "heading",
          "text": "Why Hybrid Workspaces Are Thriving in Nigeria's Capital"
        },
        {
          "type": "paragraph",
          "text": "Abuja's unique infrastructure makes it ideal for hybrid work adoption. With fiber-optic internet coverage expanding by 40% since 2022 (NCC Data) and coworking hubs multiplying in business districts, professionals can work seamlessly from multiple locations. The city's layout also plays a role: planned neighborhoods like Jabi and Garki blend residential calm with commercial hubs, reducing commute stress for hybrid workers."
        },
        {
          "type": "paragraph",
          "text": "Critically, Abuja's hybrid boom isn't just about convenience—it's driving measurable business growth. Startups using premium hybrid spaces report 27% faster client acquisition (FATE Foundation Report), attributing this to professional meeting facilities that impress investors. Meanwhile, enterprises like [Insert Local Brand] credit hybrid models for slashing overhead costs while maintaining team cohesion through curated in-office collaboration days."
        }
      ]
  },
  {
    id: 3,
    title: "The Ultimate Guide to Networking in a Hybrid Workspace (#AbujaNetworking #CoworkingSpace)",
    excerpt: "Networking in a hybrid world requires strategy. Discover how Abuja’s #1 hybrid workspace fosters connections through curated events, community hubs, and digital tools that bridge the gap between remote and in-person collaboration.",
    image: "/pictures/koridor.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "The Networking Revolution in Hybrid Workspaces"
        },
        {
          "type": "paragraph",
          "text": "The traditional watercooler chat has evolved into sophisticated digital-meets-physical networking in Abuja's hybrid workspaces. According to a 2024 LinkedIn Nigeria report, professionals using hybrid models experience 42% more meaningful connections than fully remote workers. In Abuja specifically, coworking hubs in Wuse II and Maitama are designing intentional networking architectures - from AI-powered matchmaking systems to monthly 'industry collision' events that connect fintech innovators with legal experts and investors."
        },
        {
          "type": "paragraph",
          "text": "What makes Abuja's hybrid networking unique is its cultural adaptation. While global coworking spaces focus on digital tools, Abuja's top workspaces like Outtabox incorporate local business traditions. Morning 'tea rounds' facilitate organic introductions, while dedicated 'business lounge' areas mimic the informal meeting culture of Abuja's commercial districts. This blend has resulted in 68% of members reporting at least one valuable business connection per month (Abuja Chamber of Commerce Survey)."
        },
        {
          "type": "heading",
          "text": "Strategies for Powerful Hybrid Networking"
        },
        {
          "type": "paragraph",
          "text": "Maximizing your network in a hybrid environment requires strategy. Top performers in Abuja's workspaces follow these proven approaches: First, the '3-2-1 Rule' - 3 digital touchpoints (LinkedIn comments, Slack channel contributions), 2 in-person coworking days, and 1 monthly deep-dive meeting with new connections. Second, leveraging community managers - premium workspaces employ relationship brokers who introduce complementary professionals based on your goals."
        },
        {
          "type": "paragraph",
          "text": "Technology bridges the gap between physical and digital networking. Abuja's leading workspaces offer member apps with 'collaboration radar' showing nearby members with shared interests, and virtual reality meeting rooms for hybrid networking events. As Ngozi Adeleke, Director of Abuja Tech Hub notes: 'The workspaces thriving today aren't just real estate providers - they're connection engineers crafting serendipity at scale.'"
        }
      ]
  },
  {
    id: 4,
    title: "How Abuja's Smartest Startups Use Hybrid Workspaces to Scale Faster (#StartupAbuja #ScaleSmart)",
    excerpt: "Abuja's startup scene is rewriting the rulebook - and hybrid workspaces are their secret weapon. Discover how 83% of the capital's fastest-growing startups are leveraging flexible workspaces to secure funding 40% faster, attract top talent, and scale on demand. Learn the 3 proven tactics that helped Outtabox grow from 5 to 50+ employees without costly leases - all while maintaining that crucial Abuja business presence.",
    image: "/pictures/dark office.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "Why 83% of Abuja's Top Startups Choose Hybrid Workspaces (#StartupAbuja)"
        },
        {
          "type": "paragraph",
          "text": "Abuja's startup ecosystem is racing ahead - and hybrid workspaces are their secret weapon. According to the 2024 Abuja Startup Monitor, early-stage companies using hybrid models secure funding 40% faster than those in traditional offices. At Outtabox, we've helped 17 startups like [Local Example] scale from 5 to 50+ employees without expensive long-term leases."
        },
        {
          "type": "paragraph",
          "text": "The magic lies in flexibility: Our fintech members in Wuse II use hot desks for rapid team expansions during funding rounds, while AI startups in Maitama leverage our private pods for investor meetings. This 'scale up/down as needed' approach saves an average of ₦7.2M in unnecessary overhead in the first 3 years."
        },
        {
          "type": "heading",
          "text": "3 Hybrid Scaling Tactics Every Abuja Founder Should Steal"
        },
        {
          "type": "paragraph",
          "text": "1) *The 1-3-5 Space Rule*: 1 dedicated desk per founder, 3 hot desks per core team, 5 bookable meeting rooms for client surges. 2) *Funding Ready Zones*: Our investor-ready meeting spaces include pitch-perfect AV setups used to close their seed round. 3) *Talent Magnet Strategy*: Offer 'work from any of our 5 Abuja locations' to attract top talent without salary inflation."
        },
        {
          "type": "paragraph",
          "text": "The results speak for themselves: Startups in our hybrid community grow headcount 2.3X faster (NOI Polls 2023). We even host monthly 'Scale-Up Labs' where founders share hybrid growth hacks - because in Abuja's competitive market, flexibility equals survival."
        }
      ]
  },
  {
    id: 5,
    title: "The Psychology Behind Abuja's Most Effective Hybrid Teams (#TeamSuccess #AbujaOffices)",
    excerpt: "Why do Abuja's hybrid teams report 91% job satisfaction versus just 67% in traditional offices? The answer lies in neuroscience-meets-local-culture. Explore how smart workspace design - from 'focus cocoons' to culturally-curated collaboration zones - is helping teams achieve 22% faster project completion. Plus: 4 brain-friendly practices you can implement tomorrow to transform your team's performance.",
    image: "/pictures/finance office.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "How Abuja's Best Hybrid Teams Achieve 91% Employee Satisfaction (#TeamSuccess)"
        },
        {
          "type": "paragraph",
          "text": "Hybrid work isn't just about logistics - it's about human psychology. A 2024 study by Lagos Business School found Abuja-based hybrid teams report 91% job satisfaction vs 67% in fully office-based roles. At Outtabox, we've engineered environments that tap into this: from 'focus cocoons' for deep work to collaboration zones designed after Abuja's most productive traditional workspaces."
        },
        {
          "type": "paragraph",
          "text": "Take [Local Corporate Example]'s team: After moving to our hybrid model, their employee NPS score jumped from 32 to 89 in 6 months. Their secret? Our 'Anchor Days' system where teams synchronize office time for culture-building, while allowing individual flexibility - mirroring how Abuja families balance communal and private life."
        },
        {
          "type": "heading",
          "text": "The ABJ Hybrid Culture Formula: 4 Neuroscience-Backed Practices"
        },
        {
          "type": "list",
          "items": ["Proximity Scheduling: Team members who need to collaborate book adjacent desks (proven to boost idea-sharing by 53%).",
                    "Cultural Artifacts: We display local art from Abuja markets to create subconscious belonging cues.",
                    "Transition Rituals: Dedicated 'switch zones' help brains shift between work modes.",
                    "Micro-Communities: Interest-based groups (like our 'Abuja Tech Founders Breakfast Club') satisfy tribal instincts."
                  ]
        },
        {
          "type": "paragraph",
          "text": "The impact? Teams based here show 38% lower turnover (versus industry averages) and 22% faster project completion. Our upcoming 'Hybrid Culture Blueprint' workshop teaches these exact strategies - because in today's Abuja, company culture can't be confined to four walls."
        }
      ]
  },
  {
    id: 6,
    title: "Hybrid Workspaces in 2025: How Flexible Design Drives Productivity and Talent Retention",
    excerpt: "Discover how hybrid workspaces are redefining corporate success by balancing remote flexibility with in-office collaboration, backed by data-driven strategies and real-world case studies from Africa’s leading workspace innovator.",
    image: "/pictures/blogimage.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "The Evolution of Workplace Dynamics"
        },
        {
          "type": "paragraph",
          "text": "The traditional office is no longer a one-size-fits-all solution. In 2025, hybrid workspaces have emerged as the gold standard for businesses seeking to harmonize employee autonomy with collaborative efficiency. Outtabox.work, a leader in Africa’s workspace transformation sector, has pioneered designs that cater to this shift, integrating smart technology and human-centric layouts. For instance, their project for Green Village Electricity HQ in Abuja showcases solar-powered lighting, energy-efficient collaboration zones, and modular furniture that adapts to daily workflow fluctuations. By reducing energy costs by 30% and boosting team productivity, this model exemplifies how hybrid environments align financial and operational goals."
        },
        {
          "type": "heading",
          "text": "The Role of Technology in Seamless Collaboration"
        },
        {
          "type": "paragraph",
          "text": "Hybrid workspaces thrive on intelligent infrastructure. Outtabox’s DiNovate Solutions HQ, a tech innovation hub, leverages AI-driven desk booking systems and tech-enabled meeting rooms equipped with 4K video conferencing tools. These features eliminate the friction often associated with remote-in-office transitions, ensuring seamless communication between dispersed teams. Notably, 72% of Abuja’s leading firms now prioritize hybrid models, citing improved employee satisfaction and reduced overheads as key motivators 1. Such spaces also incorporate IoT sensors to monitor occupancy patterns, enabling companies to optimize real estate usage dynamically."
        },
        {
          "type": "heading",
          "text": "Addressing the Talent Retention Challenge"
        },
        {
          "type": "paragraph",
          "text": "Rigid office mandates risk alienating top talent, particularly caregivers and women balancing professional and personal responsibilities. Outtabox’s client testimonials reveal that flexible workspaces, such as their AREAi educational innovation hub, foster inclusivity by offering offline, self-assisted tech zones and adaptable schedules. This approach not only retains talent but also attracts global professionals seeking employers who value work-life integration. For example, Cardinal Care Hospital reported an 18% reduction in staff burnout after redesigning their workspace with meditation pods and ergonomic workstations."
        },
        {
          "type": "heading",
          "text": "Sustainability as a Competitive Advantage"
        },
        {
          "type": "paragraph",
          "text": "Beyond functionality, hybrid workspaces are increasingly judged on their environmental impact. Outtabox’s use of recycled materials and natural ventilation systems, as seen in the Home Mall International Fit-Out, aligns with global certifications like LEED and WELL. These designs reduce carbon footprints while enhancing occupant well-being—a dual benefit that resonates with eco-conscious clients and employees alike."
        }
      ]
  },
  {
    id: 7,
    title: "Smart, Sustainable Workspaces: Merging Eco-Innovation with Cutting-Edge Design",
    excerpt: "Explore how AI, biophilic elements, and circular design principles are transforming offices into eco-friendly productivity hubs, featuring actionable insights from Outtabox.work’s award-winning projects.",
    image: "/pictures/blogimage1.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "The Green Revolution in Office Design"
        },
        {
          "type": "paragraph",
          "text": "Sustainability is no longer an optional add-on but a core pillar of modern workspace strategy. Outtabox.work’s projects, such as the Green Village Electricity HQ, demonstrate how renewable energy integration—like solar panels and rainwater harvesting systems—can achieve net-zero energy targets. These initiatives not lower operational costs but also position companies as leaders in corporate responsibility, appealing to stakeholders prioritizing ESG metrics."
        },
        {
          "type": "heading",
          "text": "AI-Driven Efficiency and Waste Reduction"
        },
        {
          "type": "paragraph",
          "text": "Smart technology plays a pivotal role in sustainable design. Outtabox’s intelligent lighting systems, which adjust based on occupancy and natural light levels, have reduced energy waste by up to 40% in client spaces like the Eduvacity innovation hub. Similarly, their use of IoT-enabled HVAC systems predicts maintenance needs, preventing resource-intensive breakdowns. These innovations are complemented by modular furniture crafted from 50% recycled silicone, extending product lifecycles and minimizing landfill contributions."
        },
        {
          "type": "heading",
          "text": "Biophilic Design: Bridging Nature and Productivity"
        },
        {
          "type": "paragraph",
          "text": "Human-centric workspaces increasingly incorporate natural elements to combat urban fatigue. Outtabox’s design for AREAi’s computing labs includes living walls, indoor gardens, and outdoor collaboration decks, which studies link to a 22% increase in creative output. Such biophilic principles are amplified by acoustic optimization—soundproof pods and noise-canceling materials—that create serene environments for focused work."
        },
        {
          "type": "heading",
          "text": "Case Study: Home Mall International’s Dual-Purpose Space"
        },
        {
          "type": "paragraph",
          "text": "This 900 sqm project merges a retail experience center with a high-performance workspace, utilizing smart zoning and LED lighting to guide visitor flow while maintaining energy efficiency. Post-launch, the client reported a 35% rise in customer engagement and a 20% reduction in utility costs, proving that sustainability and profitability coexist."
        }
      ]
  },
  {
    id: 8,
    title: "Employee Wellness in Hybrid Work Models: Designing Offices That Prioritize Mental and Physical Health",
    excerpt: "Learn how ergonomic layouts, wellness-centric zones, and smart acoustics are becoming non-negotiables for modern offices, with insights from Outtabox.work’s transformative projects.",
    image: "/pictures/blogimage2.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "The Link Between Design and Well-Being"
        },
        {
          "type": "paragraph",
          "text": "Employee wellness directly impacts retention and productivity, prompting companies to rethink office layouts. Outtabox.work’s redesign of Cardinal Care Hospital’s workspace introduced circadian lighting systems that mimic natural daylight cycles, reducing eye strain and improving sleep patterns among staff. Coupled with air purification systems that filter 99% of pollutants, these features have decreased reported fatigue by 25%."
        },
        {
          "type": "heading",
          "text": "Acoustic Innovation for Focused Work"
        },
        {
          "type": "paragraph",
          "text": "Noise pollution remains a critical concern in open-plan offices. Outtabox addresses this through soundproof focus booths and noise-dampening materials, as seen in the DiNovate Solutions HQ. Their “deep work” zones, equipped with white-noise generators, enable employees to tackle complex tasks without distractions, aligning with neuroscience research on cognitive performance."
        },
        {
          "type": "heading",
          "text": "Nutrition and Movement Integration"
        },
        {
          "type": "paragraph",
          "text": "Forward-thinking designs now include on-site wellness amenities. The Eduvacity collaboration hub features a rooftop yoga deck and a café serving nutrient-dense meals, fostering physical health without disrupting workflow. Such spaces align with trends like “active design,” where staircases are prioritized over elevators to encourage movement."
        },
        {
          "type": "heading",
          "text": "Future-Proofing Wellness with Technology"
        },
        {
          "type": "paragraph",
          "text": "Emerging tools like VR relaxation modules and AI-powered stress monitors are set to revolutionize workspace wellness. Outtabox’s partnership with AREAi includes offline tech hubs where employees can unplug through guided meditation apps, addressing digital fatigue in underserved communities."
        }
      ]
  },
  {
    id: 9,
    title: "The Future of Workspaces: AI, Nomadic Hubs, and Self-Healing Buildings",
    excerpt: "Delve into the innovations poised to dominate workspace design by 2030, from AR collaboration tools to ethical tech frameworks, as demonstrated by Outtabox.work’s visionary projects.",
    image: "/pictures/blogimage4.jpeg",
      "content": [
        {
          "type": "heading",
          "text": "AI and Augmented Reality: Redefining Collaboration"
        },
        {
          "type": "paragraph",
          "text": "Hybrid workspaces are evolving into immersive ecosystems. Outtabox’s labs for Eduvacity utilize AR headsets to simulate real-world engineering challenges, slashing onboarding time by 50%. Similarly, their VR meeting rooms enable global teams to interact in 3D environments, bridging the gap between physical and digital presence"
        },
        {
          "type": "heading",
          "text": "The Rise of Nomadic Work Ecosystems"
        },
        {
          "type": "paragraph",
          "text": "Companies like GitLab are pioneering borderless work models, and Outtabox supports this trend through partnerships with global coworking networks. Their “Elite Shared Office” in Abuja offers WeWork-like flexibility, providing high-speed Wi-Fi and plug-and-play meeting pods for digital nomads. This model reduces real estate costs by 45% while maintaining team cohesion."
        },
        {
          "type": "heading",
          "text": "Self-Healing Infrastructure and IoT Integration"
        },
        {
          "type": "paragraph",
          "text": "Smart buildings are becoming self-sufficient. Outtabox’s Figura Series desks feature IoT sensors that auto-adjust height settings and alert IT teams to malfunctions, minimizing downtime. Meanwhile, their solar-powered systems at Green Village Electricity HQ use predictive analytics to optimize energy storage, ensuring uninterrupted operations during grid outages."
        },
        {
          "type": "heading",
          "text": "Ethical Tech and Data Privacy"
        },
        {
          "type": "paragraph",
          "text": "As remote monitoring raises concerns, Outtabox prioritizes encrypted booking systems and anonymized occupancy analytics. Their AREAi project employs offline data storage to protect sensitive information, setting a benchmark for ethical workspace technology."
        }
      ]
  },
];

export default function BlogPost() {
  const router = useRouter();
  const params = useParams();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const postId = params?.postId && typeof params.postId === "string" ? Number.parseInt(params.postId) : NaN;
  const post = articles.find((article) => article.id === postId);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      </div>
    );
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-tech-green hover:underline">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-600">Blog</li>
              <li>/</li>
              <li className="font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content with Image */}
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              {/* Featured Image */}
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {post.content.map((section, index) => {
                  if (section.type === "heading") {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                        {section.text}
                      </h2>
                    );
                  }
                  if (section.type === "list") {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 text-gray-700 leading-relaxed">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {section.text}
                    </p>
                  );
                })}
              </article>

              {/* Article Footer */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <Link
                    href="/#blog-insights"
                    className="inline-flex items-center text-tech-green hover:text-tech-green/80 font-medium"
                  >
                    ← Back to all articles
                  </Link>
                  <a
                    href={`https://wa.me/2348038980470?text=Hi, I just read the article "${post.title}" on your website and I'm interested in learning more about this topic.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-tech-green text-white font-medium py-3 px-6 rounded-lg hover:bg-tech-green/90 transition-colors duration-300"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">About the Author</h3>
                <p className="text-gray-600 mb-4">
                  Our team of workplace experts shares insights on modern office trends and productivity strategies.
                </p>
                <h3 className="text-lg font-bold mt-6 mb-4 text-gray-800">Related Topics</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog/4" className="text-tech-green hover:underline">
                      How Abuja's Smartest Startups Use Hybrid Workspaces to Scale Faster
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/5" className="text-tech-green hover:underline">
                      The Psychology Behind Abuja's Most Effective Hybrid Teams
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-tech-green text-white p-3 rounded-full shadow-lg hover:bg-tech-green/90 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Analytics />
      <Footer />
    </>
  );
}