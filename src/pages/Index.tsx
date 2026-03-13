import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import GlowCard from "@/components/shared/GlowCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { Bot, GitBranch, Cpu, BarChart3, Zap, ArrowRight, Globe, Shield, Brain, Layers } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  }),
};

const architectureLayers = [
  { icon: Globe, label: "Interaction Layer", desc: "Web, Mobile, API, CLI & Conversational AI", color: "primary" as const },
  { icon: Brain, label: "Goal Interpreter AI", desc: "Converts goals into executable task plans", color: "accent" as const },
  { icon: Bot, label: "Agent Discovery", desc: "Semantic & skill-based agent matching", color: "success" as const },
  { icon: GitBranch, label: "Orchestration Engine", desc: "Dynamic multi-agent workflow creation", color: "warning" as const },
  { icon: Cpu, label: "Execution Grid", desc: "Containerized parallel agent processing", color: "primary" as const },
  { icon: Layers, label: "Intelligence Layer", desc: "LLMs, tools, memory & multi-modal AI", color: "accent" as const },
];

const stats = [
  { value: "12,847", label: "Active Agents" },
  { value: "1.2M", label: "Tasks/Day" },
  { value: "99.97%", label: "Uptime" },
  { value: "<50ms", label: "Avg Latency" },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container relative z-10 px-6 text-center">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <StatusBadge status="active" label="System Online — All Nodes Operational" />
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">The AI Agent</span>
              <br />
              <span className="text-primary glow-text-primary">Orchestration Platform</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Deploy, orchestrate, and scale autonomous AI agents. 
              From goal interpretation to distributed execution — one unified platform.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
              >
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/agents"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Explore Agents <Bot className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold font-mono text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Architecture</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Six intelligent layers working in concert to transform your goals into executed outcomes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {architectureLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlowCard glowColor={layer.color} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    layer.color === "primary" ? "bg-primary/10 text-primary" :
                    layer.color === "accent" ? "bg-accent/10 text-accent" :
                    layer.color === "success" ? "bg-glow-success/10 text-glow-success" :
                    "bg-glow-warning/10 text-glow-warning"
                  }`}>
                    <layer.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{layer.label}</h3>
                    <p className="text-sm text-muted-foreground">{layer.desc}</p>
                  </div>
                  <div className="hidden md:block text-xs font-mono text-muted-foreground">
                    LAYER {String(i + 1).padStart(2, "0")}
                  </div>
                </GlowCard>
              </motion.div>
            ))}

            {/* Connection lines */}
            <div className="flex justify-center py-2">
              <div className="flex flex-col items-center gap-1">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-px h-3 bg-primary/30 animate-data-flow" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
            </div>

            <GlowCard glowColor="primary" className="text-center" hover={false}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Data & Infrastructure Layer</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Relational DB · Vector DB · Graph DB · Event Streams · Auto-Scaling Cloud
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 border-t border-border/50">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: "Agent Marketplace", desc: "Discover and deploy specialized AI agents with verified skill profiles and reputation scores.", link: "/agents" },
              { icon: GitBranch, title: "Smart Orchestration", desc: "Automatic workflow generation with dependency resolution and parallel execution paths.", link: "/orchestration" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor agent performance, resource utilization, and system health in real-time.", link: "/analytics" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link to={feature.link}>
                  <GlowCard className="h-full">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-display font-bold text-foreground">NexusAI</span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">© 2026 NexusAI Platform — All Systems Operational</p>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
