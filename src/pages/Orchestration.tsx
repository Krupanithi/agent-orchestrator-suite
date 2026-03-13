import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import GlowCard from "@/components/shared/GlowCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { GitBranch, ArrowDown, Bot, CheckCircle2, Clock, Loader2 } from "lucide-react";

const workflows = [
  {
    id: "WF-301",
    name: "Market Analysis Pipeline",
    status: "active" as const,
    steps: [
      { name: "Data Collection", agent: "DataMiner-Pro", status: "done" },
      { name: "Trend Analysis", agent: "InsightBot", status: "done" },
      { name: "Report Generation", agent: "InsightBot", status: "running" },
      { name: "Translation", agent: "TranslateX", status: "pending" },
    ],
  },
  {
    id: "WF-300",
    name: "Security Audit Workflow",
    status: "active" as const,
    steps: [
      { name: "Endpoint Scan", agent: "SecAudit-AI", status: "done" },
      { name: "Vulnerability Assessment", agent: "SecAudit-AI", status: "running" },
      { name: "Fix Generation", agent: "CodeGen-v4", status: "pending" },
      { name: "Validation", agent: "SecAudit-AI", status: "pending" },
    ],
  },
  {
    id: "WF-299",
    name: "Content Localization",
    status: "idle" as const,
    steps: [
      { name: "Content Extraction", agent: "DataMiner-Pro", status: "done" },
      { name: "Translation", agent: "TranslateX", status: "done" },
      { name: "Visual Adaptation", agent: "VisionCraft", status: "done" },
      { name: "Quality Check", agent: "ChatFlow-v2", status: "done" },
    ],
  },
];

const stepIcon = (status: string) => {
  if (status === "done") return <CheckCircle2 className="w-4 h-4 text-glow-success" />;
  if (status === "running") return <Loader2 className="w-4 h-4 text-primary animate-spin" />;
  return <Clock className="w-4 h-4 text-muted-foreground" />;
};

const Orchestration = () => {
  return (
    <PageLayout>
      <div className="container px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Orchestration Engine</h1>
          <p className="text-muted-foreground">Dynamic multi-agent workflow management</p>
        </motion.div>

        <div className="space-y-6">
          {workflows.map((wf, wi) => (
            <motion.div
              key={wf.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: wi * 0.1 }}
            >
              <GlowCard hover={false}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">{wf.name}</h3>
                      <span className="text-xs font-mono text-muted-foreground">{wf.id}</span>
                    </div>
                  </div>
                  <StatusBadge status={wf.status} />
                </div>

                <div className="space-y-0">
                  {wf.steps.map((step, si) => (
                    <div key={step.name}>
                      <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20">
                        {stepIcon(step.status)}
                        <div className="flex-1">
                          <span className="text-sm font-medium">{step.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bot className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs font-mono text-muted-foreground">{step.agent}</span>
                        </div>
                        <span className={`text-xs font-mono ${
                          step.status === "done" ? "text-glow-success" :
                          step.status === "running" ? "text-primary" :
                          "text-muted-foreground"
                        }`}>
                          {step.status}
                        </span>
                      </div>
                      {si < wf.steps.length - 1 && (
                        <div className="flex justify-center py-1">
                          <ArrowDown className="w-3 h-3 text-border" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Orchestration;
