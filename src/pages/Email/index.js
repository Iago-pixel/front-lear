import { theme } from "../../styles/global";

export const Email = ({ userName, quest, description, ...rest }) => {
  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: theme.main.background }}>
        <h1 style={{ color: theme.main.colorFont, padding: "0 0 0 16px" }}>
          {quest}
        </h1>
        <div
          style={{
            backgroundColor: theme.genericBox.background,
            borderRadius: theme.main.borderRadius,
            padding: "16px",
          }}
        >
          <p style={{ color: theme.main.colorFont }}>{description}</p>
          <p>{userName}</p>
        </div>
      </body>
    </html>
  );
};
