import {
  Heart,
  Menu,
  Facebook,
  Instagram,
  Twitter,
  Share2,
  AlertCircle,
  Calendar,
  Users,
  Shield,
  CheckCircle,
  Image,
  BookOpen,
  Info,
  ArrowRight,
  Target,
  Microscope,
  Dna,
  TrendingUp,
  FileText,
  Sparkles,
  Home,
  Mail,
  ExternalLink,
  Circle,
  Stethoscope,
  Star
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  Heart,
  Menu,
  Facebook,
  Instagram,
  Twitter,
  Share2,
  AlertCircle,
  Calendar,
  Users,
  Shield,
  CheckCircle,
  Image,
  BookOpen,
  Info,
  ArrowRight,
  Target,
  Microscope,
  Dna,
  TrendingUp,
  FileText,
  Sparkles,
  Home,
  Mail,
  ExternalLink,
  Circle,
  Stethoscope,
  Star
};

export default function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in icon map`);
    // Return a fallback icon
    return <Circle {...props} />;
  }

  return <LucideIcon {...props} />;
}
