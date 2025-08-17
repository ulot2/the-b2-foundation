"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { GoFile } from "react-icons/go";

const Navbar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const programsDropdownItems = [
    {
      category: 'TAKE ACTION',
      items: [
        {
          title: 'Community Cleanups',
          description: 'Help clean up and protect local spaces with your neighbors.',
          icon: '📋'
        },
        {
          title: 'Education',
          description: 'Explore workshops and resources to spark change in your area.',
          icon: '📚'
        },
        {
          title: 'Advocacy',
          description: 'Champion policies and spread awareness for a cleaner future.',
          icon: '📢'
        }
      ]
    },
    {
      category: 'GET INVOLVED',
      items: [
        {
          title: 'Volunteer',
          description: 'Pitch in and see the difference you can make.',
          icon: '🤝'
        },
        {
          title: 'Events',
          description: 'Join events and meet others passionate about our planet.',
          icon: '📅'
        },
        {
          title: 'Partnerships',
          description: 'Team up with us to grow your impact.',
          icon: '🤝'
        }
      ]
    },
    {
      category: 'RESOURCES',
      items: [
        {
          title: 'Toolkits',
          description: 'Find guides and tools to lead local projects.',
          icon: '🛠️'
        },
        {
          title: 'Stories',
          description: 'Be inspired by real stories of positive change.',
          icon: '📖'
        },
        {
          title: 'FAQs',
          description: 'Answers to your questions about our mission.',
          icon: '❓'
        }
      ]
    }
  ];

  const supportDropdownItems = [
    { title: 'Help Center', href: '/help' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Documentation', href: '/docs' },
    { title: 'Community Forum', href: '/forum' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>✦</div>
          <span>THE B2 FOUNDATION</span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <div 
            className={styles.dropdown}
            onClick={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <button className={`${styles.dropdownTrigger} ${styles.navLink}`}>
              Programs
              <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
              {
                isProgramsOpen && (<div className={styles.megaDropdown}>
                <div className={styles.dropdownContent}>
                  {programsDropdownItems.map((category, categoryIndex) => (
                    <div key={categoryIndex} className={styles.dropdownCategory}>
                      <h4 className={styles.categoryTitle}>{category.category}</h4>
                      {category.items.map((item, itemIndex) => (
                        <Link key={itemIndex} href="#" className={styles.dropdownItem}>
                          <div className={styles.itemIcon}><GoFile /></div>
                          <div className={styles.itemContent}>
                            <h5 className={styles.itemTitle}>{item.title}</h5>
                            <p className={styles.itemDescription}>{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                
                <div className={styles.ctaSection}>
                  <div className={styles.ctaContent}>
                    <h3>Cleaner communities, brighter futures</h3>
                    <p>Join a welcoming movement making real change for our environment—one step at a time.</p>
                    <button className={styles.ctaButton}>
                      Get started →
                    </button>
                  </div>
                </div>
              </div>)
              }
          </div>

          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          
          <div 
            className={styles.dropdown}
            onClick={() => setIsSupportOpen(true)}
            onMouseLeave={() => setIsSupportOpen(false)}
          >
            <button className={styles.dropdownTrigger}>
              Support
              <svg className={styles.chevron} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {isSupportOpen && (
              <div className={styles.simpleDropdown}>
                {supportDropdownItems.map((item, index) => (
                  <Link key={index} href={item.href} className={styles.simpleDropdownItem}>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Donate Button */}
        <Link href="/donate" className={styles.donateButton}>
          Donate
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;