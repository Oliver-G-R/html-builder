import { useState } from 'react';

interface CodePreviewProps {
  initialCode: string;
}

const IFRAME_STYLES = `
  body{font-family:Arial,sans-serif;margin:12px 16px;color:rgba(255,255,255,0.85);background:#0f3460;font-size:14px;line-height:1.6}
  b,strong{color:#fff}i,em{color:rgba(255,255,255,0.8)}
  u{color:#06d6a0;text-decoration-color:#06d6a0}s{color:rgba(255,255,255,0.45)}
  h1,h2,h3,h4,h5,h6{color:#fff;margin:4px 0}p{margin:4px 0}
  hr{border:none;border-top:1px solid rgba(255,255,255,0.15);margin:8px 0}
  a{color:#00b4d8}ol,ul{padding-left:20px;margin:4px 0}li{margin:2px 0}
  dl{margin:4px 0}dt{font-weight:bold;color:#ffd60a}dd{margin-left:16px;color:rgba(255,255,255,0.7)}
  table{border-collapse:collapse;width:100%}td,th{border:1px solid rgba(255,255,255,0.2);padding:4px 10px;text-align:left}
  th{background:rgba(255,255,255,0.08);color:#ffd60a}marquee{color:#06d6a0}
`.replace(/\n\s*/g, '');

function buildSrcDoc(code: string): string {
  const withAbsoluteUrls = code.replace(
    /([Ss][Rr][Cc])="\/([^"]*)"/g,
    `$1="${window.location.origin}/$2"`
  );
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${IFRAME_STYLES}</style></head><body>${withAbsoluteUrls}</body></html>`;
}

export function CodePreview({ initialCode }: CodePreviewProps) {
  const [code, setCode] = useState(initialCode);

  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <div className="bg-white/5 px-3 py-1.5 text-xs text-white/40 font-semibold uppercase tracking-wider flex items-center justify-between">
        <span>Código</span>
        <span className="text-[#06d6a0]/60 normal-case font-normal tracking-normal">editable — cambia algo y mira el resultado</span>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="w-full bg-[#0f3460]/80 px-4 py-3 text-sm text-[#06d6a0] font-mono resize-none outline-none border-b border-white/10"
        style={{ minHeight: `${Math.max(3, code.split('\n').length) * 1.6 + 1}em` }}
      />

      <div className="bg-white/5 px-3 py-1 text-xs text-white/40 font-semibold uppercase tracking-wider">
        Vista previa
      </div>
      <iframe
        srcDoc={buildSrcDoc(code)}
        className="w-full"
        style={{ minHeight: '80px', backgroundColor: '#0f3460' }}
        title="Vista previa"
        sandbox=""
      />
    </div>
  );
}
