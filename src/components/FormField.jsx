import { useState } from "react";

/**
 * FormField
 *
 * A labeled input used across the auth flow — "Your name", "Phone number", etc.
 *
 * Props:
 * ------
 * type          "text" | "tel"   — tel renders the NG +234 country prefix
 * label         (string)         field label, e.g. "Your name"
 * required      (bool)           shows an orange asterisk next to the label
 * placeholder   (string)         input placeholder
 * underText     (string)         helper line under the field, e.g.
 *                                "We'll send a one-time code. No password to remember."
 * value         (string)
 * onChange      (func)
 * countryCode   (string)         only used when type="tel", default "+234"
 * countryLabel  (string)         only used when type="tel", default "NG"
 */
export default function FormField({
  type = "text",
  label,
  required = false,
  placeholder,
  underText,
  value,
  onChange,
  countryCode = "+234",
  countryLabel = "NG",
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const isTel = type === "tel";

  return (
    <div style={{ marginBottom: "12px" }}>
      <label
        style={{
          display: "block",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14.5px",
          fontWeight: 500,
          color: "#14110f",
          marginBottom: "8px",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#ea580c", marginLeft: "3px" }}>*</span>
        )}
      </label>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          border: `1px solid ${focused ? "#0f3d2e" : "#d6cdb8"}`,
          boxShadow: focused ? "0px 0px 4px rgba(57, 107, 90, 1)" : "none",
          borderRadius: "14px",
          background: "#f4efe6",
          padding: isTel ? "14px 18px" : "16px 18px",
          boxSizing: "border-box",
          transition: "border-color 0.2s ease",
        }}
      >
        {isTel && (
          <>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px",
                color: "#14110f",
                flexShrink: 0,
              }}
            >
              <span style={{ letterSpacing: "0.05em" }}>{countryLabel}</span>
              <span>{countryCode}</span>
            </span>
            <span
              style={{
                width: "1px",
                height: "20px",
                background: "#d6cdb8",
                flexShrink: 0,
              }}
            />
          </>
        )}

        <input
          type={isTel ? "tel" : "text"}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="form-field-input"
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "#14110f",
            fontFamily: isTel
              ? "'JetBrains Mono', monospace"
              : "'Poppins', sans-serif",
            fontSize: isTel ? "14.5px" : "15px",
            letterSpacing: isTel ? "0.05em" : "normal",
          }}
          {...rest}
        />
      </div>

      {underText && (
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "13px",
            color: "#6b6055",
            margin: "8px 2px 0",
          }}
        >
          {underText}
        </p>
      )}
    </div>
  );
}
