import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import GlowCard from "@/components/shared/GlowCard";
import { BarChart3, TrendingUp, Users, Zap, Bot, Clock, Target, Award } from "lucide-react";

const dailyData = [65, 72, 58, 88, 92, 78, 95, 84, 70, 90, 86, 94, 88, 76, 82, 91, 97, 85, 79, 93, 88, 96, 92, 89];

const performanceMetrics = [
  { label: "Goal Success Rate", value: "94.2%", icon: Target, change: "+2.1%" },
  { label: "Avg Task Duration", value: "1.8s", icon: Clock, change: "-0.3s" },
  { label: "Agent Utilization", value: "78%", icon: Bot, change: "+5%" },
  { label: "User Satisfaction", value: "4.8/5", icon: Award, change: "+0.2" },
];

const topSkills = [
  { skill: "Code Generation", usage: 92 },
  { skill: "Data Analysis", usage: 85 },
  { skill: "Translation", usage: 78 },
  { skill: "Security Audit", usage: 71 },
  { skill: "Image Generation", usage: 64 },
  { skill: "Report Writing", usage: 58 },
];

const learningInsights = [
  "Agent CodeGen-v4 performance improved 12% after latest fine-tuning cycle",
  "Task routing accuracy increased to 97.3% with updated skill graph",
  "New agent collaboration pattern discovered: parallel data+analysis pipelines",
  "Recommended: Scale eu-west nodes by 20% based on traffic prediction",
];

const Analytics = () => {
  const maxVal = Math.max(...dailyData);

  return (
    <PageLayout>
      <div className="container px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Analytics & Intelligence</h1>
          <p className="text-muted-foreground">Performance metrics, learning insights, and system optimization</p>
        </motion.div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {performanceMetrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlowCard className="!p-4">
                <m.icon className="w-4 h-4 text-primary mb-2" />
                <div className="text-2xl font-bold font-mono">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <span className="text-xs font-mono text-glow-success mt-1 inline-block">{m.change}</span>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Activity Chart */}
          <div className="lg:col-span-2">
            <GlowCard hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" /> Task Volume (24h)
                </h2>
                <span className="text-xs font-mono text-muted-foreground">Hourly</span>
              </div>
              <div className="flex items-end gap-1 h-40">
                {dailyData.map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${(val / maxVal) * 100}%` }}
                    transition={{ delay: i * 0.03, duration: 0.5 }}
                    className="flex-1 rounded-t bg-primary/40 hover:bg-primary/60 transition-colors relative group"
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs font-mono text-primary bg-card px-1.5 py-0.5 rounded border border-border whitespace-nowrap">
                      {val}k
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>23:00</span>
              </div>
            </GlowCard>
          </div>

          {/* Top Skills */}
          <GlowCard hover={false}>
            <h2 className="font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" /> Skill Demand
            </h2>
            <div className="space-y-4">
              {topSkills.map(s => (
                <div key={s.skill}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{s.skill}</span>
                    <span className="font-mono text-muted-foreground">{s.usage}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.usage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-primary/60"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>

        {/* Learning Insights */}
        <GlowCard hover={false} glowColor="accent">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-accent" /> Self-Improvement Insights
          </h2>
          <div className="space-y-3">
            {learningInsights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10"
              >
                <span className="text-xs font-mono text-accent mt-0.5">#{i + 1}</span>
                <p className="text-sm text-foreground">{insight}</p>
              </motion.div>
            ))}
          </div>
        </GlowCard>
      </div>
    </PageLayout>
  );
};

export default Analytics;
