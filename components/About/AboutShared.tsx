export const cardStyle: React.CSSProperties = {
  background: "var(--background-card)",
  border: "1px solid var(--border-default)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  boxShadow: "0 10px 40px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.06)",
  transition:
    "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
};

export const cardHoverStyle: React.CSSProperties = {
  background: "var(--background-card-hover)",
  borderColor: "var(--border-hover)",
  boxShadow: "0 16px 48px rgba(15,23,42,0.18), 0 4px 12px rgba(15,23,42,0.08)",
};
