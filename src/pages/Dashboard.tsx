import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import GlowCard from "@/components/shared/GlowCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { Bot, Cpu, GitBranch, Activity, ArrowUpRight, ArrowDownRight, Zap, Clock } from "lucide-react";

const recentTasks = [
  { id: "T-4821", goal: "Analyze quarterly sales data and generate report", agents: 3, status: "active" as const, time: "2m ago" },
  { id: "T-4820", goal: "Deploy microservice to staging environment", agents: 2, status: "active" as const, time: "5m ago" },
  { id: "T-4819", goal: "Translate documentation to 4 languages", agents: 4, status: "idle" as const, time: "12m ago" },
  { id: "T-4818", goal: "Run security audit on API endpoints", agents: 2, status: "busy" as const, time: "18m ago" },
  { id: "T-4817", goal: "Optimize database query performance", agents: 1, status: "idle" as const, time: "25m ago" },
];

const systemMetrics = [
  { label: "Active Agents", value: "847", change: "+12%", up: true, icon: Bot },
  { label: "Tasks/min", value: "2,341", change: "+8%", up: true, icon: Zap },
  { label: "Avg Latency", value: "42ms", change: "-15%", up: true, icon: Clock },
  { label: "Queue Depth", value: "156", change: "+3%", up: false, icon: Activity },
];

const topAgents = [
  { name: "CodeGen-v4", type: "Code Generation", tasks: 1284, rating: 4.9, status: "active" as const },
  { name: "DataMiner-Pro", type: "Data Analysis", tasks: 982, rating: 4.8, status: "active" as const },
  { name: "TranslateX", type: "Translation", tasks: 756, rating: 4.7, status: "busy" as const },
  { name: "SecAudit-AI", type: "Security", tasks: 543, rating: 4.9, status: "active" as const },
];

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="container px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Command Center</h1>
          <p className="text-muted-foreground">Real-time platform overview and system health</p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {systemMetrics.map((metric, i) => (
            <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlowCard className="!p-4">
                <div className="flex items-center justify-between mb-3">
                  <metric.icon className="w-4 h-4 text-muted-foreground" />
                  <span className={`flex items-center gap-0.5 text-xs font-mono ${metric.up ? "text-glow-success" : "text-glow-warning"}`}>
                    {metric.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold font-mono text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Tasks */}
          <div className="lg:col-span-2">
            <GlowCard hover={false}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-primary" /> Recent Tasks
                </h2>
                <span className="text-xs text-muted-foreground font-mono">Live</span>
              </div>
              <div className="space-y-3">
                {recentTasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <span className="text-xs font-mono text-primary shrink-0">{task.id}</span>
                    <span className="text-sm text-foreground flex-1 truncate">{task.goal}</span>
                    <span className="text-xs text-muted-foreground font-mono shrink-0">{task.agents} agents</span>
                    <StatusBadge status={task.status} />
                    <span className="text-xs text-muted-foreground shrink-0">{task.time}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>

          {/* Top Agents */}
          <div>
            <GlowCard hover={false}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold flex items-center gap-2">
                  <Bot className="w-4 h-4 text-primary" /> Top Agents
                </h2>
              </div>
              <div className="space-y-3">
                {topAgents.map((agent) => (
                  <div key={agent.name} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-mono text-primary">
                      {agent.name.slice(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{agent.name}</div>
                      <div className="text-xs text-muted-foreground">{agent.type}</div>
                    </div>
                    <StatusBadge status={agent.status} />
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>

        {/* System Activity Visualization */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8">
          <GlowCard hover={false}>
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" /> Execution Grid — Node Status
            </h2>
            <div className="grid grid-cols-8 md:grid-cols-16 gap-1.5">
              {Array.from({ length: 64 }).map((_, i) => {
                const states = ["bg-glow-success/40", "bg-glow-success/60", "bg-primary/30", "bg-glow-warning/40", "bg-glow-success/50"];
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${states[i % states.length]} transition-colors`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-glow-success/60" /> Active</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-primary/30" /> Idle</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-glow-warning/40" /> Busy</span>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
