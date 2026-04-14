import React, { useState, useEffect } from 'react';
import AuthModal from './components/AuthModal';
import CertificateVerificationPage from './components/CertificateVerificationPage';
import CertificationGrid from './components/CertificationGrid';
import HeroSection from './components/HeroSection';
import MembershipPage from './components/MembershipPage';
import ThemeSwitcher from './components/ThemeSwitcher';
import TopNav from './components/TopNav';
import { certifications } from './data/certifications';
import { countryOptions } from './data/countryOptions';
import { themeOptions } from './data/themeOptions';

export default function App() {
  const [theme, setTheme] = useState('slate');
  const [currentPage, setCurrentPage] = useState('home');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen selection:bg-[var(--color-primary)]/30">
      <ThemeSwitcher theme={theme} themeOptions={themeOptions} onThemeChange={setTheme} />
      <TopNav
        onContactDropdownSelect={() => setCurrentPage('certificate-verification')}
        onHomeOpen={() => setCurrentPage('home')}
        onLoginOpen={() => {
          setAuthMode('login');
          setAuthOpen(true);
        }}
        onMembershipOpen={() => setCurrentPage('membership')}
        onSignupOpen={() => {
          setAuthMode('signup');
          setAuthOpen(true);
        }}
      />
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <CertificationGrid certifications={certifications} />
        </>
      ) : currentPage === 'membership' ? (
        <MembershipPage />
      ) : (
        <CertificateVerificationPage onBackHome={() => setCurrentPage('home')} />
      )}
      <AuthModal
        authMode={authMode}
        authOpen={authOpen}
        countryOptions={countryOptions}
        onClose={() => setAuthOpen(false)}
        onModeChange={setAuthMode}
        onTogglePassword={() => setShowPassword((prev) => !prev)}
        onToggleConfirmPassword={() => setShowConfirmPassword((prev) => !prev)}
        showConfirmPassword={showConfirmPassword}
        showPassword={showPassword}
      />
    </div>
  );
}
