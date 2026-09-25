import { AwsIcon } from "@/components/ui/AwsIcon";
import {
  CheckCircle2,
  Database,
  Workflow
} from "lucide-react";
import { BiAnalyse } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaBitbucket,
  FaConfluence,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaPython
} from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import {
  SiApacheairflow,
  SiApacheparquet,
  SiApachespark,
  SiBaremetrics,
  SiJira,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiSharp,
  SiSimpleanalytics
} from "react-icons/si";

export function TechIcon({ name }: { name: string }) {
  const lowerName = name.toLowerCase();

  if (lowerName.includes("lambda") || lowerName.includes("s3") ||lowerName.includes("sqs") || lowerName.includes("sns")) {
    return <AwsIcon service={name} className="w-4 h-4" />;
  }

  if (lowerName.includes("python")) return <FaPython className="w-8 h-8 text-green-700" />;
  if (lowerName.includes("c#")) return <SiSharp className="w-8 h-8 text-purple-400" />;
  if (lowerName.includes("javascript")) return <FaJs className="w-8 h-8 text-yellow-400" />;
  if (lowerName.includes("mysql")) return <SiMysql className="w-8 h-8 text-blue-300" />;
  if (lowerName.includes("postgresql")) return <SiPostgresql className="w-8 h-8 text-sky-400" />;
  if (lowerName.includes("mongodb")) return <SiMongodb className="w-8 h-8 text-emerald-500" />;
  if (lowerName.includes("sqlalchemy")) return <Database className="w-8 h-8 text-rose-400" />;
  if (lowerName.includes("pandas")) return <SiPandas className="w-8 h-8 text-indigo-400" />;
  if (lowerName.includes("scikit")) return <SiScikitlearn className="w-8 h-8 text-orange-400" />;
  if (lowerName.includes("pytorch")) return <SiPytorch className="w-8 h-8 text-red-500" />;
  if (lowerName.includes("pyspark") || lowerName.includes("spark")) return <SiApachespark className="w-8 h-8 text-orange-500" />;
  if (lowerName.includes("parquet") || lowerName.includes("parquet")) return <SiApacheparquet className="w-8 h-8 text-blue-400" />;
  if (lowerName.includes("jira")) return <SiJira className="w-8 h-8 text-blue-400" />;
  if (lowerName.includes("confluence")) return <FaConfluence className="w-8 h-8 text-blue-400" />;
  if (lowerName.includes("git") && !lowerName.includes("hub") && !lowerName.includes("bucket")) return <FaGitAlt className="w-8 h-8 text-orange-500" />;
  if (lowerName.includes("github")) return <FaGithub className="w-8 h-8 text-slate-200" />;
  if (lowerName.includes("bitbucket")) return <FaBitbucket className="w-8 h-8 text-blue-500" />;
  if (lowerName.includes("aws")) return <FaAws className="w-8 h-8 text-amber-500" />;
  if (lowerName.includes("docker")) return <FaDocker className="w-8 h-8 text-sky-400" />;
  if (lowerName.includes("airflow")) return <SiApacheairflow className="w-8 h-8 text-teal-400" />;
  if (lowerName.includes("agile")) return <Workflow className="w-8 h-8 text-cyan-400" />;
  if (lowerName.includes("scrum")) return <DiScrum className="w-8 h-8 text-cyan-400" />;
  if (lowerName.includes("métrica")) return <SiBaremetrics className="w-8 h-8 text-emerald-400" />;
  if (lowerName.includes("kpis")) return <SiSimpleanalytics className="w-8 h-8 text-orange-500" />;
  if (lowerName.includes("dashboards")) return <MdDashboard className="w-8 h-8 text-shadow-cyan-600" />;
  if (lowerName.includes("proceso")) return <BiAnalyse className="w-8 h-8 text-blue-400" />;
  if (lowerName.includes("sas")) return <IoAnalyticsOutline className="w-8 h-8 text-blue-400" />;

  return <CheckCircle2 className="w-8 h-8 text-blue-400" />;
}