import './SectionHeader.css';

interface SectionHeaderProps {
  icon?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h3 className="section-title">
        {icon && <span className="section-icon">{icon}</span>}
        {title}
      </h3>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-line" />
    </div>
  );
}
