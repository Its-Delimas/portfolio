const lines: { tokens: { text: string; className?: string }[] }[] = [
  { tokens: [{ text: "// infra/api-stack.ts", className: "text-muted" }] },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "import", className: "text-accent" },
      { text: " { Stack, Duration } " },
      { text: "from", className: "text-accent" },
      { text: ' "aws-cdk-lib"', className: "text-emerald-400" },
      { text: ";" },
    ],
  },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "export class ", className: "text-accent" },
      { text: "ApiStack ", className: "text-amber-300" },
      { text: "extends", className: "text-accent" },
      { text: " Stack {" },
    ],
  },
  {
    tokens: [
      { text: "  new ", className: "text-accent" },
      { text: "Function", className: "text-amber-300" },
      { text: "(this, " },
      { text: '"Handler"', className: "text-emerald-400" },
      { text: ", {" },
    ],
  },
  { tokens: [{ text: "    runtime: " }, { text: "NODEJS_20_X", className: "text-sky-300" }, { text: "," }] },
  { tokens: [{ text: "    memorySize: " }, { text: "512", className: "text-orange-300" }, { text: "," }] },
  {
    tokens: [
      { text: "    timeout: Duration." },
      { text: "seconds", className: "text-amber-300" },
      { text: "(" },
      { text: "10", className: "text-orange-300" },
      { text: ")," },
    ],
  },
  { tokens: [{ text: "  });" }] },
  { tokens: [{ text: "}" }] },
  { tokens: [{ text: "" }] },
  { tokens: [{ text: "$ ", className: "text-accent" }, { text: "cdk deploy --require-approval never" }] },
  { tokens: [{ text: "  ✔ ApiStack deployed", className: "text-emerald-400" }] },
];

export default function CodeWindow() {
  return (
    <div className="w-full rounded-lg border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-hover">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-muted font-mono">api-stack.ts</span>
      </div>
      <pre className="px-5 py-5 text-[13px] leading-6 font-mono overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <div key={i}>
              {line.tokens.length === 0 || (line.tokens.length === 1 && line.tokens[0].text === "") ? (
                " "
              ) : (
                line.tokens.map((t, j) => (
                  <span key={j} className={t.className}>
                    {t.text}
                  </span>
                ))
              )}
              {i === lines.length - 1 && (
                <span className="cursor-blink text-accent">▍</span>
              )}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
