import { useState } from 'react';
import { Github, ExternalLink, Activity, Network, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowLeft } from 'lucide-react';

const STATUS_STYLE: Record<string, { label: string; color: string; bg: string }> = {
  'Active':     { label: '[ACTIVE]',  color: '#00E5FF', bg: 'rgba(0,229,255,0.06)' },
  'Production': { label: '[PROD]',    color: '#00FF88', bg: 'rgba(0,255,136,0.06)' },
  'Completed':  { label: '[DONE]',    color: '#3D6B88', bg: 'rgba(61,107,136,0.08)' },
};

const projects = [
  {
    title: "Aegis — Incident Intelligence",
    period: "Apr 2026",
    impact: "Autonomous anomaly detection with zero-touch RCA — eliminates manual incident triage for multi-service infrastructure.",
    engineeringFocus: "Real-time telemetry pipeline with async Celery workers and LLM-driven root cause analysis",
    miniArchitecture: "Python Simulators → FastAPI → Celery/Redis → Gemini AI → WebSocket → React Dashboard",
    tech: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Google Gemini", "React", "TypeScript", "Docker"],
    status: "Active",
    github: "https://github.com/Satya136-dvsn/Aegis---Incident-Intelligence",
    demo: "",
    category: "Platform Engineering",
    fullDescription: "Aegis (Vigilinex) is an AI-powered, real-time incident intelligence platform that autonomously detects infrastructure anomalies, generates LLM-driven Root Cause Analysis using Google Gemini, and pushes live incidents to a reactive dashboard — all without human intervention. The entire stack runs locally via docker-compose with zero cloud dependencies.",
    features: [
      "Anomaly Engine: Rolling 2-sigma statistical threshold detection across 50-metric sliding windows for CPU, memory, latency, and error rates",
      "AI-Powered RCA: Google Gemini generates structured, markdown-formatted root cause analysis for every detected anomaly automatically",
      "Real-Time Streaming: WebSocket push broadcasts incidents instantly to all connected dashboard clients without polling",
      "Async Pipeline: Celery workers with Redis message broker decouple ingestion from anomaly processing for scalability",
      "Incident Management: Full dashboard with severity filtering, threaded comments, and session-persistent localStorage state"
    ]
  },
  {
    title: "VibeAnalytix",
    period: "Mar 2026 – Apr 2026",
    impact: "30 formally-verified correctness properties; full 7-language AST-based analysis pipeline with sub-3-minute turnaround on medium codebases.",
    engineeringFocus: "Multi-pass AST analysis with hierarchical knowledge building and semantic vector retrieval",
    miniArchitecture: "GitHub/ZIP → Tree-sitter AST → 3-Pass Analysis → pgvector Embeddings → GPT-4 Explanations",
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "OpenAI GPT-4", "Celery", "Redis", "Docker"],
    status: "Production",
    github: "https://github.com/Satya136-dvsn/VibeAnalytix",
    demo: "",
    category: "AI & Developer Tools",
    fullDescription: "VibeAnalytix is a sophisticated code understanding platform that combines multi-pass AST analysis with AI-powered explanations to provide deep insights into any codebase. V1 ships with real OpenAI GPT-4o integration, pgvector semantic search, 30 formally-verified correctness properties, and an interactive Next.js frontend with real-time job tracking.",
    features: [
      "Multi-Pass Analysis: 3-stage pipeline — Structural mapping → Dependency detection → Context refinement — before any AI generation",
      "AST-Based Parsing: Tree-sitter support for 7 languages (Python, JavaScript, TypeScript, Java, Go, C, C++)",
      "Semantic Retrieval: pgvector integration builds hierarchical embeddings (Function → File → Module → Project) for context-aware search",
      "Security-First Ingestion: Strict GitHub URL validation, ZIP path-traversal protection, and executable binary rejection",
      "Comprehensive Testing: 30 property-based correctness properties (Hypothesis), plus unit and integration test suites"
    ]
  },
  {
    title: "Aerofisc",
    period: "Sep 2025 – Dec 2025",
    impact: "Built scalable architecture for multi-user real-time financial management.",
    engineeringFocus: "Secure multi-user data persistence and automated tracking",
    miniArchitecture: "Java Backend → REST API → MySQL",
    tech: ["Java", "MySQL", "REST API", "Spring Boot"],
    status: "Production",
    github: "https://github.com/Satya136-dvsn/budgetwise_tracker_ai_driven",
    demo: "",
    category: "Backend Systems",
    fullDescription: "Aerofisc is a comprehensive personal finance command center designed to handle real-time tracking for multiple concurrent users. It integrates AI-powered insights, predictive analytics, and enterprise-grade security.",
    features: [
      "Predictive Analytics: Forecasts future expenses using historical data and linear regression",
      "Smart Categorization: Automatically categorizes transactions using ML logic",
      "Voice Commands: Integrated voice-to-action engine for hands-free management",
      "Enterprise Security: JWT authentication, RBAC, and data encryption at rest/transit"
    ]
  },
  {
    title: "Biz Stratosphere - AI BI Platform",
    period: "Nov 2025 – Present",
    impact: "Zero operational cost with production-ready AI capabilities and 98% test coverage.",
    engineeringFocus: "Serverless platform with hallucination-proof AI insights",
    miniArchitecture: "React → Supabase → PostgreSQL + Gemini AI",
    tech: ["React", "TypeScript", "Supabase", "Gemini AI"],
    status: "Active",
    github: "https://github.com/Satya136-dvsn/biz-stratosphere",
    demo: "",
    category: "Full Stack Applications",
    fullDescription: "An advanced Business Intelligence platform integrating Google's Gemini AI to provide actionable business insights from raw data. Features a zero-knowledge architecture processing sensitive data in isolated environments.",
    features: [
      "Predictive Analytics: Forecasting modules for Churn, CLV, and Demand",
      "Explainable AI (XAI): Real-time SHAP value generation for prediction transparency",
      "LLM-Powered Insights: Integrated RAG chat for conversational data analysis",
      "Security & Governance: Zero-Knowledge Architecture, RBAC, and comprehensive Audit Logging"
    ]
  },
  {
    title: "32-Bit Hybrid Multiplier using FPGA",
    period: "Aug 2024 - Apr 2025",
    impact: "Achieved 40% higher computational efficiency over standard methods.",
    engineeringFocus: "Hybrid algorithm design combining Vedic and Karatsuba",
    miniArchitecture: "Verilog RTL → Synthesis → FPGA Hardware",
    tech: ["FPGA", "Verilog", "Digital Design"],
    status: "Completed",
    github: "https://github.com/Satya136-dvsn/32-Bit-Hybrid-Multiplier-using-FPGA",
    demo: "",
    category: "Hardware Engineering",
    fullDescription: "A custom FPGA hardware architecture that significantly accelerates 32-bit multiplication operations. It intelligently balances the processing speed of Vedic mathematics with the area efficiency of the Karatsuba algorithm.",
    features: [
      "Decomposes 32-bit multiplication into four 16x16 partial products",
      "Lower-Lower & Lower-Upper partial products computed using Karatsuba 16x16",
      "Upper-Lower & Upper-Upper partial products computed using Vedic 16x16",
      "Achieved substantial reduction in critical path delay compared to standard array multipliers"
    ]
  },
  {
    title: "Stock Market Portfolio Optimization",
    period: "Sep 2024",
    impact: "Generated data-driven allocation strategies based on risk-return analysis of 50+ stocks.",
    engineeringFocus: "Statistical modeling and algorithm optimization",
    miniArchitecture: "Market Data → Python Pandas → Allocation Model",
    tech: ["Python", "Pandas", "Scipy", "Optimization Algorithms"],
    status: "Completed",
    github: "https://github.com/Satya136-dvsn/Stock-market-portfolio-optimization",
    demo: "",
    category: "Data & Analytics",
    fullDescription: "A quantitative finance project utilizing mathematical optimization techniques to construct optimal stock portfolios, balancing expected returns against market risk.",
    features: [
      "Portfolio optimization using Mean-Variance and Efficient Frontier strategies",
      "In-depth risk and return analysis",
      "Advanced data visualization of portfolio performance metrics",
      "Direct integration with live financial data sources for real-world analysis"
    ]
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 relative z-10"
      style={{ borderTop: '1px solid rgba(0,229,255,0.1)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="mb-16">
          <div className="font-tron text-xs tracking-[0.2em] mb-3" style={{ color: 'rgba(0,229,255,0.5)' }}>
            // MODULE :: PROJECTS
          </div>
          <h2 className="text-3xl md:text-5xl font-tron font-bold mb-4 tracking-tight glow-text"
            style={{ color: '#E8F4FD' }}>
            Project Showcase
          </h2>
          <p className="font-grotesk max-w-2xl text-lg" style={{ color: '#3D6B88' }}>
            Production-grade systems demonstrating architectural depth and engineering correctness.
          </p>
          <div className="tron-sep w-24 mt-6" />
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const statusStyle = STATUS_STYLE[project.status] || STATUS_STYLE['Completed'];
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="circuit-card group cursor-pointer relative overflow-hidden">

                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-0 w-[3px] h-full transition-all duration-300"
                      style={{
                        background: 'rgba(0,229,255,0)',
                        boxShadow: 'none',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = '#00E5FF';
                        el.style.boxShadow = '0 0 10px rgba(0,229,255,0.6)';
                      }}
                    />
                    {/* We use a style tag trick — let's use group-hover via inline onMouseEnter on parent */}

                    <div
                      className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 relative z-10 transition-all duration-300"
                      onMouseEnter={e => {
                        const bar = (e.currentTarget.parentElement as HTMLElement)?.querySelector('.left-accent') as HTMLElement;
                        if (bar) { bar.style.background = '#00E5FF'; bar.style.boxShadow = '0 0 10px rgba(0,229,255,0.6)'; }
                      }}
                    >

                      {/* Left: Core Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3
                                className="text-xl md:text-2xl font-tron font-bold transition-colors duration-200"
                                style={{ color: '#E8F4FD' }}
                              >
                                {project.title}
                              </h3>
                              <span
                                className="px-2 py-0.5 font-tron text-xs font-semibold tracking-widest"
                                style={{
                                  color: statusStyle.color,
                                  background: statusStyle.bg,
                                  border: `1px solid ${statusStyle.color}30`,
                                }}
                              >
                                {statusStyle.label}
                              </span>
                            </div>
                            <p className="font-tron text-xs tracking-widest" style={{ color: '#3D6B88' }}>
                              {project.period} &nbsp;·&nbsp; {project.category}
                            </p>
                          </div>
                        </div>

                        {/* Impact & Focus */}
                        <div className="pt-2 space-y-3">
                          <p className="font-grotesk text-sm leading-relaxed" style={{ color: 'rgba(232,244,253,0.8)' }}>
                            <span className="font-tron text-xs tracking-wider" style={{ color: '#FF6B00' }}>IMPACT </span>
                            {project.impact}
                          </p>
                          <div
                            className="flex items-start gap-2 p-3 text-sm"
                            style={{
                              background: 'rgba(0,229,255,0.03)',
                              border: '1px solid rgba(0,229,255,0.1)',
                            }}
                          >
                            <Activity className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#00E5FF' }} />
                            <span className="font-grotesk" style={{ color: '#3D6B88' }}>
                              <span className="font-tron text-xs tracking-wider" style={{ color: 'rgba(0,229,255,0.6)' }}>FOCUS </span>
                              {project.engineeringFocus}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Architecture & Tech */}
                      <div className="flex-1 lg:max-w-md space-y-5">
                        {/* Mini Architecture */}
                        <div>
                          <h4 className="font-tron text-[10px] uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                            style={{ color: '#3D6B88' }}>
                            <Network className="w-3.5 h-3.5" style={{ color: 'rgba(0,229,255,0.5)' }} />
                            SYSTEM ARCHITECTURE
                          </h4>
                          <div
                            className="p-3 font-tron text-xs"
                            style={{
                              background: 'rgba(1,6,15,0.8)',
                              border: '1px solid rgba(0,229,255,0.12)',
                              color: 'rgba(0,229,255,0.8)',
                              letterSpacing: '0.02em',
                            }}
                          >
                            <span style={{ color: 'rgba(0,229,255,0.35)' }}>&gt; </span>
                            {project.miniArchitecture}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-tron text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: '#3D6B88' }}>
                            TECH STACK
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 font-tron text-[11px] uppercase tracking-wider"
                                style={{
                                  background: 'rgba(0,229,255,0.04)',
                                  border: '1px solid rgba(0,229,255,0.15)',
                                  color: 'rgba(0,229,255,0.7)',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Click hint */}
                        <div className="flex items-center gap-2 pt-2">
                          <div
                            className="interactive inline-flex items-center gap-2 px-4 py-2 font-tron text-[10px] tracking-[0.2em] transition-all duration-300 border border-[#00E5FF]/30 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-black tron-clip-sm hover:scale-105 active:scale-95"
                          >
                            EXPAND DETAILS
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent
                  className="max-w-3xl w-[90vw] p-0 flex flex-col"
                  style={{
                    background: '#050D1A',
                    border: '1px solid rgba(0,229,255,0.2)',
                    borderRadius: '0',
                    boxShadow: '0 0 40px rgba(0,229,255,0.1)',
                    maxHeight: '90vh',
                  }}
                >
                  <div className="p-6 md:p-8 border-b border-[rgba(0,229,255,0.1)]">
                    <DialogHeader>
                      <div className="font-tron text-[10px] tracking-[0.2em] mb-3" style={{ color: 'rgba(0,229,255,0.4)' }}>
                        // PROJECT DETAIL
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <DialogTitle className="font-tron text-2xl md:text-3xl font-bold pr-12" style={{ color: '#E8F4FD' }}>
                          {project.title}
                        </DialogTitle>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className="font-tron text-xs tracking-widest px-2 py-0.5"
                          style={{
                            color: statusStyle.color,
                            background: statusStyle.bg,
                            border: `1px solid ${statusStyle.color}30`,
                          }}
                        >
                          {statusStyle.label}
                        </span>
                        <span className="font-tron text-xs tracking-wider" style={{ color: '#3D6B88' }}>
                          {project.period}
                        </span>
                      </div>
                    </DialogHeader>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="space-y-8">
                      {/* Overview */}
                      <div>
                        <h4
                          className="font-tron text-sm font-bold mb-3 pb-2 flex items-center gap-2"
                          style={{
                            color: '#E8F4FD',
                            borderBottom: '1px solid rgba(0,229,255,0.1)',
                          }}
                        >
                          <Activity className="w-4 h-4" style={{ color: '#00E5FF' }} />
                          OVERVIEW & IMPACT
                        </h4>
                        <p className="font-grotesk text-sm leading-relaxed" style={{ color: '#3D6B88' }}>
                          {project.fullDescription}
                        </p>
                        <div
                          className="mt-4 p-4"
                          style={{
                            background: 'rgba(255,107,0,0.04)',
                            border: '1px solid rgba(255,107,0,0.2)',
                          }}
                        >
                          <p className="font-grotesk text-sm" style={{ color: 'rgba(232,244,253,0.8)' }}>
                            <span className="font-tron text-xs tracking-wider" style={{ color: '#FF6B00' }}>IMPACT </span>
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Architectural Details */}
                        <div>
                          <h4 
                            className="font-tron text-sm font-bold mb-4 pb-2 flex items-center gap-2"
                            style={{ color: '#E8F4FD', borderBottom: '1px solid rgba(0,229,255,0.1)' }}
                          >
                            <Network className="w-4 h-4" style={{ color: '#00E5FF' }} /> TECH STACK
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 font-tron text-[11px] uppercase tracking-wider"
                                style={{
                                  background: 'rgba(0,229,255,0.04)',
                                  border: '1px solid rgba(0,229,255,0.15)',
                                  color: 'rgba(0,229,255,0.7)',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div
                          className="p-4"
                          style={{
                            background: 'rgba(1,6,15,0.6)',
                            border: '1px solid rgba(0,229,255,0.1)',
                          }}
                        >
                          <h4 className="font-tron text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: '#3D6B88' }}>
                            REPOSITORY & ACCESS
                          </h4>
                          <div className="flex flex-col gap-2.5">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-tron-ghost flex items-center justify-center gap-2 w-full py-3 text-xs hover:scale-105 active:scale-95 transition-all"
                              >
                                <Github className="w-4 h-4" /> VIEW SOURCE CODE
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-tron-supernova flex items-center justify-center gap-2 w-full py-3 text-xs"
                              >
                                <ExternalLink className="w-4 h-4" /> LAUNCH LIVE DEMO
                              </a>
                            )}
                            {!project.github && !project.demo && (
                              <p className="font-tron text-xs text-center" style={{ color: '#3D6B88' }}>
                                // REPOSITORY CONFIDENTIAL
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <DialogFooter className="p-6 pt-0">
                    <DialogClose asChild>
                      <button 
                        className="btn-tron-ghost w-full py-4 font-tron text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 group transition-all duration-300"
                        style={{
                          background: 'rgba(0,229,255,0.02)',
                          border: '1px solid rgba(0,229,255,0.1)',
                        }}
                      >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        CLOSE PROJECT
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
