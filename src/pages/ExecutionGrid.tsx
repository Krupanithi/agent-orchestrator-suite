import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import GlowCard from "@/components/shared/GlowCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { Cpu, Server, HardDrive, Activity, Wifi } from "lucide-react";

const nodes = Array.from({ length: 12 }).map((_, i) => ({
  id: `NODE-${String(i + 1).padStart(3, "0")}`,
  region: ["us-east", "us-west", "eu-west", "ap-south"][i % 4],
  cpu: Math.floor(Math.random() * 60) + 20,
  memory: Math.floor(Math.random() * 50) + 30,
  agents: Math.floor(Math.random() * 20) + 5,
  status: (["active", "active", "active", "busy", "active", "idle"] as const)[i % 6],
}));

const ExecutionGrid = () => {
  return (
    <PageLayout>
      <div className="container px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Execution Grid</h1>
          <p className="text-muted-foreground">Distributed compute nodes & containerized agent runtime</p>
        </motion.div>

        {/* Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Nodes", value: "12", icon: Server },
            { label: "Active Containers", value: "847", icon: Cpu },
            { label: "Storage Used", value: "4.2 TB", icon: HardDrive },
            { label: "Network I/O", value: "12 Gbps", icon: Wifi },
          ].map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlowCard className="!p-4">
                <m.icon className="w-4 h-4 text-muted-foreground mb-2" />
                <div className="text-2xl font-bold font-mono">{m.value}</div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Node Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <GlowCard>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm font-semibold">{node.id}</span>
                  </div>
                  <StatusBadge status={node.status} />
                </div>

                <div className="text-xs text-muted-foreground font-mono mb-4">{node.region}</div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">CPU</span>
                      <span className="font-mono">{node.cpu}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${node.cpu > 80 ? "bg-destructive" : node.cpu > 60 ? "bg-glow-warning" : "bg-primary"}`}
                        style={{ width: `${node.cpu}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="font-mono">{node.memory}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${node.memory > 80 ? "bg-destructive" : "bg-accent"}`}
                        style={{ width: `${node.memory}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{node.agents} agents running</span>
                  <Activity className="w-3 h-3 text-glow-success" />
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ExecutionGrid;
