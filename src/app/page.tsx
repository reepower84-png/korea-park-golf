"use client";

import { useState, useEffect, FormEvent } from "react";

/* ───── 섹션 정의 ───── */
const NAV_ITEMS = [
  { id: "hero", label: "홈" },
  { id: "about", label: "소개" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "benefits", label: "수익모델" },
  { id: "reviews", label: "수강후기" },
  { id: "contact", label: "문의하기" },
];

/* ───── CTA 버튼 ───── */
function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-block bg-gold hover:bg-gold-light text-primary-dark font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
    >
      무료 상담 신청하기
    </a>
  );
}

/* ───── 네비게이션 ───── */
function Navigation() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.offsetTop - 100 : 0 };
      });
      const y = window.scrollY + 120;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (y >= offsets[i].top) {
          setActive(offsets[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16 md:h-20">
        <a href="#hero" className="block shrink-0 max-w-[60%]">
          <img
            src="/Image_2026년_3월_19일_오후_01_19_18_가로-removebg-preview.png"
            alt="Korea Park Golf"
            className={`h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === id
                    ? "bg-accent text-white"
                    : scrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* 햄버거 버튼 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              open
                ? `rotate-45 translate-y-2 ${scrolled ? "bg-primary" : "bg-white"}`
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              open ? "opacity-0" : scrolled ? "bg-primary" : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              open
                ? `-rotate-45 -translate-y-2 ${scrolled ? "bg-primary" : "bg-white"}`
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          open ? "max-h-96 shadow-lg" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col py-2">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-base font-semibold transition-colors ${
                  active === id
                    ? "text-accent bg-accent/5"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ───── 히어로 섹션 ───── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
    >
      {/* 장식 원 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <span className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent-light text-sm font-semibold tracking-wide border border-white/10">
          파크골프 지도자 양성 전문
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          파크골프, 이제
          <br />
          취미가 아니라{" "}
          <span className="text-gold">&lsquo;수익&rsquo;</span>입니다.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          검증된 커리큘럼으로 파크골프 지도자 자격을 취득하고,
          <br className="hidden sm:block" />
          안정적인 수익을 만들어 보세요.
        </p>
        <CTAButton />

        {/* 스크롤 힌트 */}
        <div className="mt-16 animate-float">
          <svg
            className="mx-auto w-8 h-8 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ───── 소개 섹션 ───── */
function About() {
  const stats = [
    { num: "500+", label: "수료생 배출" },
    { num: "98%", label: "자격 취득률" },
    { num: "12년", label: "교육 경력" },
    { num: "30+", label: "제휴 파크골프장" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            About Us
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            검증된 커리큘럼으로
            <br />
            <span className="text-primary">&lsquo;파크골프 지도자&rsquo;</span>
            가 됩니다.
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Korea Park Golf는 초보자도 체계적으로 배울 수 있는 단계별
            커리큘럼과 실전 경험을 제공합니다. 단순 레슨을 넘어 자격증 취득부터
            수익 창출까지 원스톱으로 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-2">
                {num}
              </div>
              <div className="text-sm md:text-base text-gray-500 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

/* ───── 커리큘럼 섹션 ───── */
function Curriculum() {
  const steps = [
    {
      step: "STEP 1",
      title: "기초 이론 교육",
      desc: "파크골프의 규칙, 에티켓, 장비 이해 등 기본 이론을 탄탄히 학습합니다.",
      icon: "📘",
    },
    {
      step: "STEP 2",
      title: "실전 스윙 훈련",
      desc: "어프로치, 퍼팅, 티샷 등 핵심 스윙 기술을 반복 훈련으로 체화합니다.",
      icon: "🏌️",
    },
    {
      step: "STEP 3",
      title: "지도법 & 자격증 취득",
      desc: "효과적인 레슨 지도법을 배우고, 검증된 자격증 시험을 준비합니다.",
      icon: "🎓",
    },
    {
      step: "STEP 4",
      title: "수익 창출 실전",
      desc: "레슨 운영, 마케팅, 수강생 모집까지 실질적인 수익 모델을 구축합니다.",
      icon: "💰",
    },
  ];

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Curriculum
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            4단계 체계적 커리큘럼
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            기초부터 수익 창출까지, 단계별로 완성하는 파크골프 지도자 과정
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map(({ step, title, desc, icon }, i) => (
            <div
              key={i}
              className="relative p-5 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="text-3xl sm:text-4xl shrink-0">{icon}</div>
                <div>
                  <span className="text-xs font-bold text-accent tracking-widest">
                    {step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── 수익모델 섹션 ───── */
function Benefits() {
  const items = [
    {
      title: "파크골프 레슨 강사",
      desc: "초보자부터 시니어까지 다양한 수강생을 대상으로 레슨을 진행하여 안정적인 수입을 확보합니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "자격증 강사 양성",
      desc: "자격증 취득 과정을 가르치는 강사로 활동하며 더 높은 수익을 창출합니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "파크골프장 운영 컨설팅",
      desc: "파크골프장 설계, 운영 노하우를 전수받아 직접 운영 또는 컨설팅 사업을 시작할 수 있습니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "시니어 복지 프로그램",
      desc: "지자체 및 복지관과 연계하여 시니어 건강 프로그램 강사로 활동합니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Revenue Model
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            배워서 끝이 아니라,
            <br />
            <span className="text-primary">
              &lsquo;바로 수익으로 연결됩니다&rsquo;
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({ title, desc, icon }, i) => (
            <div
              key={i}
              className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* 강조 배너 */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary to-primary-light text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4">
            지금 시작하면, 파크골프 시장의
            <br />
            <span className="text-gold">&lsquo;선점 기회&rsquo;</span>를
            잡습니다.
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            파크골프 인구 200만 시대, 전문 지도자는 아직 부족합니다.
            <br className="hidden sm:block" />
            지금이 진입할 최적의 타이밍입니다.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

/* ───── 수강후기 섹션 ───── */
function Reviews() {
  const reviews = [
    {
      name: "김*수",
      age: "58세",
      role: "前 직장인 → 파크골프 강사",
      text: "퇴직 후 막막했는데, 여기서 자격증 따고 지금은 주 5일 레슨하며 월 300만원 이상 벌고 있습니다. 인생 2막이 열렸어요.",
      rating: 5,
    },
    {
      name: "박*영",
      age: "45세",
      role: "주부 → 시니어 복지관 강사",
      text: "파크골프를 취미로만 즐기다가 강사 과정을 수료했어요. 지금은 구청 복지관에서 주 3회 강의하고 있습니다. 보람과 수입 둘 다 잡았어요!",
      rating: 5,
    },
    {
      name: "이*호",
      age: "62세",
      role: "은퇴자 → 파크골프장 운영",
      text: "체계적인 커리큘럼 덕분에 자신감이 생겼습니다. 현재 소규모 파크골프 연습장을 운영 중이며 수강생도 꾸준히 늘고 있습니다.",
      rating: 5,
    },
    {
      name: "최*진",
      age: "38세",
      role: "프리랜서 → 파크골프 전문 강사",
      text: "젊은 나이에 시작해서 걱정했는데, 오히려 시니어 수강생분들이 더 좋아하세요. 지금은 월 수강생 40명 이상 관리하고 있습니다.",
      rating: 5,
    },
    {
      name: "정*미",
      age: "52세",
      role: "경력단절 → 파크골프 지도자",
      text: "10년 경력단절 후 새로운 시작을 했어요. 수료 후 바로 취업 연결해주셔서 현재 안정적으로 활동하고 있습니다. 정말 감사해요.",
      rating: 5,
    },
    {
      name: "한*석",
      age: "55세",
      role: "자영업 → 파크골프 강사 겸업",
      text: "본업과 병행하면서 주말에만 레슨을 진행하는데도 월 150만원 추가 수입이 생겼습니다. 최고의 투자였어요.",
      rating: 5,
    },
    {
      name: "송*라",
      age: "48세",
      role: "전업주부 → 파크골프 강사",
      text: "아이들 다 키우고 나니 제 것이 없더라고요. 여기서 자격증 따고 지금은 매일 아침 필드에서 레슨합니다. 삶의 활력이 돌아왔어요.",
      rating: 5,
    },
    {
      name: "오*환",
      age: "60세",
      role: "공무원 퇴직 → 파크골프 지도자",
      text: "퇴직금으로 뭘 할까 고민하다 여기 등록했는데, 3개월 만에 자격증 취득하고 바로 레슨 시작했습니다. 연금보다 보람이 큽니다.",
      rating: 5,
    },
    {
      name: "윤*정",
      age: "42세",
      role: "요가 강사 → 파크골프 강사 겸업",
      text: "기존 운동 강사 경험이 있어 빠르게 적응했어요. 야외에서 하는 레슨이라 수강생 만족도가 높고, 수입도 두 배로 늘었습니다.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Success Stories
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            수강생 성공 사례
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Korea Park Golf와 함께 새로운 커리어를 시작한 분들의 이야기
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, age, role, text, rating }, i) => (
            <div
              key={i}
              className="p-5 sm:p-7 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <span key={j} className="text-gold text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                &ldquo;{text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-900">
                  {name}{" "}
                  <span className="text-gray-400 font-normal text-sm">
                    ({age})
                  </span>
                </div>
                <div className="text-sm text-accent font-medium mt-0.5">
                  {role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── 문의 폼 섹션 ───── */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent-light font-bold text-sm tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            무료 상담 신청
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg">
            아래 양식을 작성해주시면 빠르게 연락드리겠습니다.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
        >
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="홍길동"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                연락처
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="010-1234-5678"
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                문의내용
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="궁금하신 내용을 자유롭게 작성해주세요."
                className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-base resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-8 w-full bg-gold hover:bg-gold-light text-primary-dark font-bold py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "전송 중..." : "상담 신청하기"}
          </button>

          <a
            href="http://pf.kakao.com/_NamEX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full bg-[#FEE500] hover:bg-[#FDD800] text-[#3C1E1E] font-bold py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 hover:shadow-lg text-center block"
          >
            카카오톡으로 상담하기
          </a>

          {status === "success" && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium">
              문의가 성공적으로 접수되었습니다! 빠른 시일 내에 연락드리겠습니다.
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium">
              전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ───── 푸터 ───── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left">
          <div className="text-xl font-extrabold text-white mb-4 tracking-tight">
            KOREA PARK GOLF
          </div>
          <div className="space-y-1 text-sm leading-relaxed">
            <p>상호: 효시스템 부천직영점 | 대표: 이주영</p>
            <p>사업자등록번호: 290-62-00902</p>
            <p>주소: 경기도 부천시 원미구 송내대로265번길 23, 201-G11</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Korea Park Golf. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

/* ───── 카카오톡 플로팅 버튼 ───── */
function KakaoFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="http://pf.kakao.com/_NamEX/chat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 상담"
      className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <img
        src="/카톡_원형_로고.png"
        alt="카카오톡 상담"
        className="w-full h-full rounded-full object-cover"
      />
    </a>
  );
}

/* ───── 메인 페이지 ───── */
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Benefits />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <KakaoFloating />
    </>
  );
}
