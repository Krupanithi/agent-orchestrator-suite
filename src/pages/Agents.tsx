import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import GlowCard from "@/components/shared/GlowCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { Bot, Star, Search, Filter, Code, Database, Shield, Languages, Image, MessageSquare, FileText, Wrench } from "lucide-react";

const categories = ["All", "Code", "Data", "Security", "Language", "Creative", "Analysis"];

const agents = [
  { name: "CodeGen-v4", category: "Code", desc: "Advanced code generation with multi-language support. Handles complex architectures and testing.", skills: ["TypeScript", "Python", "Rust", "Testing"], rating: 4.9, tasks: 12840, price: "0.002/task", status: "active" as const, icon: Code },
  { name: "DataMiner-Pro", category: "Data", desc: "High-performance data extraction, transformation, and analysis across structured and unstructured sources.", skills: ["SQL", "ETL", "ML", "Visualization"], rating: 4.8, tasks: 9820, price: "0.003/task", status: "active" as const, icon: Database },
  { name: "SecAudit-AI", category: "Security", desc: "Comprehensive security auditing with vulnerability scanning and compliance checking.", skills: ["Pen Testing", "OWASP", "Compliance", "CVE"], rating: 4.9, tasks: 5430, price: "0.005/task", status: "active" as const, icon: Shield },
  { name: "TranslateX", category: "Language", desc: "Context-aware translation engine supporting 120+ languages with domain specialization.", skills: ["NLP", "120+ langs", "Domain-specific", "Real-time"], rating: 4.7, tasks: 7560, price: "0.001/task", status: "busy" as const, icon: Languages },
  { name: "VisionCraft", category: "Creative", desc: "Multi-modal image generation and editing with style transfer and brand consistency.", skills: ["Image Gen", "Style Transfer", "Editing", "Branding"], rating: 4.6, tasks: 3200, price: "0.008/task", status: "active" as const, icon: Image },
  { name: "InsightBot", category: "Analysis", desc: "Business intelligence agent specializing in report generation and trend analysis.", skills: ["BI", "Forecasting", "Reports", "KPIs"], rating: 4.8, tasks: 6100, price: "0.004/task", status: "idle" as const, icon: FileText },
  { name: "ChatFlow-v2", category: "Language", desc: "Conversational AI agent optimized for customer support and knowledge base interactions.", skills: ["Dialog", "FAQ", "Sentiment", "Escalation"], rating: 4.5, tasks: 15200, price: "0.001/task", status: "active" as const, icon: MessageSquare },
  { name: "DevOps-Agent", category: "Code", desc: "Infrastructure automation with CI/CD pipeline management and container orchestration.", skills: ["Docker", "K8s", "CI/CD", "Terraform"], rating: 4.7, tasks: 4300, price: "0.006/task", status: "active" as const, icon: Wrench },
];

const Agents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = agents.filter(a => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageLayout>
      <div className="container px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Agent Marketplace</h1>
          <p className="text-muted-foreground">Discover and deploy specialized AI agents</p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search agents by name or capability..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-secondary/50 text-muted-foreground border border-border hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <GlowCard className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <agent.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{agent.name}</h3>
                      <span className="text-xs text-muted-foreground">{agent.category}</span>
                    </div>
                  </div>
                  <StatusBadge status={agent.status} />
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1">{agent.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {agent.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 rounded text-xs font-mono bg-secondary text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-3.5 h-3.5 text-glow-warning fill-glow-warning" />
                    <span className="font-medium">{agent.rating}</span>
                    <span className="text-muted-foreground text-xs">({agent.tasks.toLocaleString()} tasks)</span>
                  </div>
                  <span className="text-xs font-mono text-primary">${agent.price}</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Agents;
