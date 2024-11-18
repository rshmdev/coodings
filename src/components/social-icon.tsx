export function SocialIcon({ Icon, link }: {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    link: string;
}) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
        <Icon className="h-6 w-6" />
      </a>
    )
  }