'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch, FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaGamepad, FaVideo, FaComment, FaTrophy, FaUsers, FaYoutube, FaTwitch, FaEye, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import MainNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ScrollFadeIn, ScrollSlideIn } from '../../components/ScrollAnimation';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Get current date dynamically
  const getCurrentDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  };

  const gameCategories = [
    { id: 'all', name: 'All Content', icon: <FaGamepad /> },
    { id: 'fortnite', name: 'Fortnite', icon: <FaGamepad /> },
    { id: 'cod', name: 'Call of Duty', icon: <FaGamepad /> },
    { id: 'commentary', name: 'Commentary', icon: <FaComment /> },
    { id: 'highlights', name: 'Highlights', icon: <FaVideo /> },
    { id: 'tournaments', name: 'Tournaments', icon: <FaTrophy /> }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Epic Fortnite Victory Royale - 20 Kill Solo Win!",
      excerpt: "Watch as we dominate the Fortnite battlefield with insane building skills and clutch plays.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "2 days ago",
      watchTime: "12:45",
      views: "12.5K",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Call of Duty: Warzone - Insane 1v4 Clutch Commentary",
      excerpt: "Breaking down the most intense 1v4 clutch in Warzone history.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "5 days ago",
      watchTime: "8:32",
      views: "8.9K",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Fortnite vs Call of Duty: Meta Analysis & Strategy Breakdown",
      excerpt: "Our gaming experts dive deep into the current meta for both games.",
      category: "commentary",
      author: "Saint Daniels Gaming",
      date: "1 week ago",
      watchTime: "15:20",
      views: "15.2K",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      featured: true,
      videoUrl: "#"
    }
  ];

  const regularContent = [
    {
      id: 4,
      title: "Fortnite Chapter 5: New Map Locations & Loot Routes",
      excerpt: "Exploring the latest Fortnite map changes and the best landing spots.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "1 week ago",
      watchTime: "10:15",
      views: "9.3K",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "Call of Duty: Best Loadouts for Ranked Play",
      excerpt: "Top-tier weapon builds and class setups for dominating ranked matches.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "1 week ago",
      watchTime: "7:28",
      views: "7.1K",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "Fortnite Tournament Highlights - Saint Daniels Championship",
      excerpt: "Relive the best moments from our recent Fortnite tournament.",
      category: "tournaments",
      author: "Saint Daniels Gaming",
      date: "2 weeks ago",
      watchTime: "20:45",
      views: "18.7K",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 7,
      title: "Call of Duty: Warzone 2.0 - New Meta Breakdown",
      excerpt: "Analyzing the latest Warzone 2.0 updates and weapon changes.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "2 weeks ago",
      watchTime: "9:12",
      views: "6.8K",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 8,
      title: "Fortnite Building Techniques: Advanced Edit Course",
      excerpt: "Master the most advanced building and editing techniques.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "2 weeks ago",
      watchTime: "14:30",
      views: "11.4K",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 9,
      title: "Top 10 Plays of the Week - Fortnite & Call of Duty",
      excerpt: "The most insane plays, clutches, and highlights this week.",
      category: "highlights",
      author: "Saint Daniels Gaming",
      date: "3 weeks ago",
      watchTime: "18:05",
      views: "22.1K",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 10,
      title: "Fortnite Zero Build Mode - Pro Tips & Strategies",
      excerpt: "Master the no-build meta with advanced movement and positioning techniques.",
      category: "fortnite",
      author: "Saint Daniels Gaming",
      date: "3 weeks ago",
      watchTime: "11:20",
      views: "10.5K",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    },
    {
      id: 11,
      title: "Call of Duty: Sniping Guide - Long Range Domination",
      excerpt: "Learn the art of long-range sniping and become a deadly marksman in Warzone.",
      category: "cod",
      author: "Saint Daniels Gaming",
      date: "4 weeks ago",
      watchTime: "13:45",
      views: "8.2K",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "#"
    }
  ];

  const allContent = [...featuredContent, ...regularContent];

  const filteredContent = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      fortnite: '#C4A962',
      cod: '#b39855',
      commentary: '#d4b876',
      highlights: '#C4A962',
      tournaments: '#e8d4a0',
      all: '#2c5530'
    };
    return colors[category] || '#2c5530';
  };

  return (
    <div className="news-page">
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="mission-section-professional" style={{ paddingTop: '4rem', paddingBottom: '3rem', background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="align-items-center">
              <Col lg={6}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <FaGamepad size={50} style={{ color: '#C4A962' }} />
                  <h1 className="mission-title-professional" style={{ color: 'white', fontSize: '2.5rem', margin: 0 }}>
                    Saint Daniels Video Game Network
                  </h1>
                </div>
                <div className="mission-divider" style={{ margin: '1.5rem 0', background: '#C4A962', width: '100px' }}></div>
                <p className="mission-description-professional" style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                  Your destination for the coolest Fortnite and Call of Duty videos, epic gameplay highlights, 
                  expert commentary, and tournament coverage. Join the Saint Daniels gaming community and never miss a play.
                </p>
                <p style={{ fontSize: '1rem', color: '#C4A962', fontWeight: 600, marginTop: '1.5rem' }}>
                  📧 Newsletter: Stay updated with the latest gaming content, tournament highlights, and exclusive gameplay from the Saint Daniels network.
                </p>
              </Col>
              <Col lg={6}>
                <ScrollSlideIn direction="right">
                  <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%', // 16:9 aspect ratio
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
                    background: '#000'
                  }}>
                    <iframe
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '12px'
                      }}
                      src="https://www.youtube.com/embed/PkXxV7v1x8E"
                      title="Fortnite Gameplay Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </ScrollSlideIn>
              </Col>
            </Row>
          </ScrollFadeIn>
        </Container>
      </section>

      {/* Search Section */}
      <section className="service-fullpage-section" style={{ background: '#f8f9fa', paddingTop: '3rem', paddingBottom: '2rem' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="justify-content-center">
              <Col lg={6} md={8} sm={10}>
                <div className="search-container" style={{ width: '100%' }}>
                  <InputGroup>
                    <InputGroup.Text style={{ background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)', color: '#C4A962', border: 'none' }}>
                      <FaSearch />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search videos and content..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="news-search-input"
                      style={{ borderLeft: 'none', borderColor: '#C4A962' }}
                    />
                  </InputGroup>
                </div>
              </Col>
            </Row>
          </ScrollFadeIn>
        </Container>
      </section>

      {/* YouTube-Style Video Grid */}
      <section className="service-fullpage-section" style={{ background: '#f9f9f9', paddingTop: '2rem', paddingBottom: '3rem' }}>
        <Container fluid style={{ maxWidth: '1400px' }}>
          <ScrollFadeIn>
            <Row className="mb-4">
              <Col>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#030303', marginBottom: '0.5rem' }}>{getCurrentDate()}</h2>
              </Col>
            </Row>
          </ScrollFadeIn>

          <Row className="g-3">
            {featuredContent.map((item, index) => (
              <Col xl={4} lg={4} md={6} sm={12} key={item.id}>
                <ScrollFadeIn delay={index * 0.1}>
                  <div style={{
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <div style={{ position: 'relative', width: '100%', marginBottom: '0.75rem' }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={225}
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          aspectRatio: '16/9',
                          objectFit: 'cover',
                          borderRadius: '12px'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <FaClock size={10} />
                        {item.watchTime}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}>
                        <FaGamepad size={18} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          color: '#030303',
                          marginBottom: '0.25rem',
                          lineHeight: '1.4',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>{item.title}</h3>
                        <p style={{
                          fontSize: '0.85rem',
                          color: '#606060',
                          marginBottom: '0.25rem'
                        }}>{item.author}</p>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: '#606060'
                        }}>
                          <span>{item.views} views</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Latest Videos - YouTube Style Grid */}
      <section className="service-fullpage-section" style={{ background: '#f9f9f9', paddingTop: '1rem', paddingBottom: '3rem' }}>
        <Container fluid style={{ maxWidth: '1400px' }}>
          <ScrollFadeIn>
            <Row className="mb-4">
              <Col>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#030303', marginBottom: '0.5rem' }}>Latest</h2>
              </Col>
            </Row>
          </ScrollFadeIn>

          <Row className="g-3">
            {filteredContent.filter((item: any) => !item.featured).map((item: any, index: number) => (
              <Col xl={3} lg={4} md={6} sm={12} key={item.id}>
                <ScrollFadeIn delay={index * 0.1}>
                  <div style={{
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    <div style={{ position: 'relative', width: '100%', marginBottom: '0.75rem' }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={225}
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          aspectRatio: '16/9',
                          objectFit: 'cover',
                          borderRadius: '12px'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <FaClock size={10} />
                        {item.watchTime}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2c5530 0%, #4a7c59 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}>
                        <FaGamepad size={18} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h3 style={{
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          color: '#030303',
                          marginBottom: '0.25rem',
                          lineHeight: '1.4',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>{item.title}</h3>
                        <p style={{
                          fontSize: '0.85rem',
                          color: '#606060',
                          marginBottom: '0.25rem'
                        }}>{item.author}</p>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.85rem',
                          color: '#606060'
                        }}>
                          <span>{item.views} views</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollFadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="service-fullpage-section" style={{ background: 'linear-gradient(135deg, #1B392F 0%, #2c5530 100%)', color: 'white' }}>
        <Container>
          <ScrollFadeIn>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '3rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <FaGamepad size={50} style={{ color: '#C4A962', marginBottom: '1rem' }} />
                  </div>
                  <h3 className="service-title-large" style={{ color: 'white', marginBottom: '1rem' }}>Join the Gaming Network</h3>
                  <p className="mission-description-professional" style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '2rem',
                    fontSize: '1.1rem'
                  }}>
                    Subscribe to get notified about new Fortnite and Call of Duty videos, tournament highlights, 
                    and exclusive gaming content from the Saint Daniels network.
                  </p>
                  <div style={{
                    background: 'rgba(196, 169, 98, 0.2)',
                    borderRadius: '12px',
                    padding: '2rem',
                    marginBottom: '2rem',
                    border: '1px solid rgba(196, 169, 98, 0.3)'
                  }}>
                    <p style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '1rem'
                    }}>
                      Want to submit your gaming content?
                    </p>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      Send your Fortnite and Call of Duty videos, highlights, and commentary to:
                    </p>
                    <a 
                      href="mailto:submissions@saintdaniels.com"
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)',
                        color: '#1B392F',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #d4b876 0%, #C4A962 100%)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(196, 169, 98, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #C4A962 0%, #b39855 100%)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      submissions@saintdaniels.com
                    </a>
                  </div>
                  <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap'
                  }}>
                    <a href="https://youtube.com/@saintdaniels" target="_blank" rel="noopener noreferrer" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <FaYoutube size={20} /> YouTube
                    </a>
                    <a href="https://instagram.com/saintdaniels" target="_blank" rel="noopener noreferrer" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <FaInstagram size={20} /> Instagram
                    </a>
                    <a href="https://facebook.com/saintdaniels" target="_blank" rel="noopener noreferrer" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <FaFacebook size={20} /> Facebook
                    </a>
                    <a href="https://tiktok.com/@_saintdaniels" target="_blank" rel="noopener noreferrer" style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <FaVideo size={20} /> TikTok
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </ScrollFadeIn>
        </Container>
      </section>

      <Footer />
    </div>
  );
} 