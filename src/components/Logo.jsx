import PropTypes from "prop-types";

/**
 * Logo de Analítica Consultores
 *
 * Props:
 *  - variant: "horizontal" | "icon"
 *  - size: altura en rem (ej. 4 => h-16). Default 4.
 */
export default function Logo({ variant = "horizontal", size = 4, className = "" }) {
  const filename = variant === "horizontal" ? "ac-horizontal-blue.png" : "ac-icon-blue.png";
  return (
    <img
      src={\`/logos/${filename}\`}
      alt="Logotipo Analítica Consultores"
      className={\`h-${size} w-auto select-none ${className}\`}
      draggable={false}
    />
  );
}

Logo.propTypes = {
  variant: PropTypes.oneOf(["horizontal", "icon"]),
  size: PropTypes.number,
  className: PropTypes.string,
};