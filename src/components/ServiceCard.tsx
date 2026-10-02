import React, { useState } from 'react';
import { ServiceItem } from '../types';
import {
  Boxes,
  UserCheck,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Video,
  ArrowRight,
  ExternalLink,
  GitBranch,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';

interface ServiceCardProps {
  item: ServiceItem;
  onOpenWorkflow: (item: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ item, onOpenWorkflow }) => {
  const [showQuickFlow, setShowQuickFlow] = useState(false);

  // Render icon based on name
  const renderIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'Boxes':
        return <Boxes className={`${iconClass} text-amber-500`} />;
      case 'UserCheck':
        return <UserCheck className={`${iconClass} text-blue-500`} />;
      case 'Instagram':
        return <Instagram className={`${iconClass} text-rose-500`} />;
      case 'Facebook':
        return <Facebook className={`${iconClass} text-blue-600`} />;
      case 'Youtube':
        return <Youtube className={`${iconClass} text-red-600`} />;
      case 'Twitter':
        return <Twitter className={`${iconClass} text-slate-700`} />;
      case 'Video':
        return <Video className={`${iconClass} text-purple-600`} />;
      default:
        return <Layers className={`${iconClass} text-slate-600`} />;
    }
  };

  const isInternalInnovation = item.category === 'layanan';

  return (
    <div
      id={`card-${item.id}`}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-[#1a365d] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Top accent border bar */}
      <div
        className={`h-1.5 w-full ${
          item.accentColor === 'amber'
            ? 'bg-gradient-to-r from-amber-400 to-amber-600'
            : item.accentColor === 'rose'
            ? 'bg-gradient-to-r from-rose-500 to-pink-500'
            : item.accentColor === 'purple'
            ? 'bg-gradient-to-r from-purple-500 to-indigo-600'
            : item.accentColor === 'emerald'
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600'
            : 'bg-gradient-to-r from-blue-600 to-indigo-700'
        }`}
      />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Header Badges & Icon */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:bg-blue-50/70 group-hover:border-blue-200 transition-colors">
              {renderIcon(item.icon)}
            </div>
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {item.categoryLabel}
              </span>
              <p className="text-xs font-semibold text-amber-600">
                {item.subtitle}
              </p>
            </div>
          </div>

          {item.badgeText && (
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                item.badgeColor === 'amber'
                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                  : item.badgeColor === 'blue'
                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                  : item.badgeColor === 'rose'
                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                  : item.badgeColor === 'purple'
                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                  : 'bg-slate-100 text-slate-700 border-slate-300'
              }`}
            >
              {item.badgeText}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0c2340] transition-colors leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
          {item.description}
        </p>

        {/* Innovation specific feature tags */}
        {item.features && item.features.length > 0 && (
          <div className="mb-4 space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-150">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1">
              Fitur & Keunggulan:
            </div>
            {item.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Expandable Quick Flow Preview for Innovations */}
        {isInternalInnovation && item.flowSteps && (
          <div className="mb-4">
            <button
              onClick={() => setShowQuickFlow(!showQuickFlow)}
              className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1 py-1"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>{showQuickFlow ? 'Sembunyikan Ringkasan Alur' : 'Lihat Ringkasan 7 Tahapan Alur'}</span>
              {showQuickFlow ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {showQuickFlow && (
              <div className="mt-2 p-3 bg-blue-50/60 rounded-xl border border-blue-150 text-xs space-y-2 animate-fadeIn">
                <div className="font-bold text-[#0c2340] text-[11px]">
                  Tahapan Alur Kerja Sistem:
                </div>
                <ol className="space-y-1 text-slate-700">
                  {item.flowSteps.map((s) => (
                    <li key={s.step} className="flex items-start gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.step}
                      </span>
                      <span>
                        <strong className="text-slate-900">{s.title}</strong>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card Action Buttons */}
      <div className="p-5 pt-0 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
        {isInternalInnovation ? (
          <>
            <button
              id={`btn-alur-${item.id}`}
              onClick={() => onOpenWorkflow(item)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border-2 border-[#0c2340] text-[#0c2340] hover:bg-[#0c2340] hover:text-white font-bold text-xs sm:text-sm transition-all"
            >
              <GitBranch className="w-4 h-4" />
              <span>Alur & Simulasi</span>
            </button>

            <button
              id={`btn-akses-${item.id}`}
              onClick={() => onOpenWorkflow(item)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0c2340] to-[#1a365d] hover:from-[#1a365d] hover:to-[#0c2340] text-amber-300 font-bold text-xs sm:text-sm shadow-md hover:shadow transition-all group-hover:scale-[1.02]"
            >
              <span>Akses Sekarang</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </>
        ) : (
          <a
            id={`btn-akses-${item.id}`}
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0c2340] to-[#1a365d] hover:from-[#1a365d] hover:to-[#0c2340] text-white hover:text-amber-300 font-bold text-xs sm:text-sm shadow-md hover:shadow transition-all group-hover:scale-[1.01]"
          >
            <span>Akses Sekarang</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>
        )}
      </div>
    </div>
  );
};
