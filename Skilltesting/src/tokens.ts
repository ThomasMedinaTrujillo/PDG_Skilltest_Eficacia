/**
 * Design System Tokens
 * Extracted from Figma Design Library - Eficacia
 * Last updated: April 9, 2026
 */

export type DesignTokens = {
  colors: {
    primitive: Record<string, string>
    semantic: Record<string, string>
  }
  typography: Record<string, {
    fontFamily: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }>
  spacing: Record<string, number>
  radius: Record<string, number>
  shadows: Record<string, string>
  opacity: Record<string, number>
}

export const tokens: DesignTokens = {
  colors: {
    primitive: {
      // Primary Blue Scale
      "blue.darkest": "#002A68",
      "blue.dark": "#0041A3",
      "blue.light": "#99B3DA",
      "blue.lightest": "#C2D1E9",

      // Neutral Colors
      "neutral.white": "#FFFFFF",
      "neutral.50": "#FFFFFF",
      "neutral.100": "#E6E8EA",
      "neutral.300": "#CCCCCC",
      "neutral.500": "#B8B8B8",
      "neutral.700": "#737373",

      // Gray Scale
      "gray.light": "#C4C7CE",
      "gray.medium": "#A9ADB0",
      "gray.dark": "#70777B",
      "gray.darker": "#696969",

      // System Colors
      "error.red": "#EB5757",
      "error.red.light": "#F46060",
      "warning.yellow": "#FFCD00",
      "success.teal": "#3BD4AE",
      "warning.coral": "#CA4949",
    },
    semantic: {
      // Primary
      "primary": "{colors.primitive.blue.dark}",
      "primary.background": "#F4F7F9",
      "primary.text": "{colors.primitive.gray.darker}",
      "primary.white": "#FFFFFF",

      // Text Colors
      "text.primary": "#595959",
      "text.heading": "#0041A3",
      "text.subtitle": "#70777B",
      "text.caption": "#737373",
      "text.disabled": "#70777B",
      "text.placeholder": "#99B3DA",

      // Button States
      "button.background": "#0041A3",
      "button.background.disabled": "#A9ADB0",
      "button.error.hover": "#F46060",
      "button.outline.pressed": "rgba(153, 179, 218, 0.3)",

      // Status
      "status.success": "#3BD4AE",
      "status.warning": "#CA4949",
      "status.error": "#EB5757",
      "status.pending": "#FFCD00",
      "status.disabled": "#AEBE1",

      // Background
      "background.primary": "#F4F7F9",
      "background.secondary": "#FFFFFF",

      // Interface
      "divider": "rgba(105, 105, 105, 0.15)",
    },
  },
  typography: {
    // Mobile Headings
    "heading.display": {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "heading.h1": {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "heading.h3": {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "heading.h4": {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 100,
      letterSpacing: 0,
    },

    // Subtitles
    "subtitle.mobile": {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 100,
      letterSpacing: 0,
    },

    // Body Text
    "body.large": {
      fontFamily: "Solomon Sans Normal",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "body.medium": {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "body.small": {
      fontFamily: "Solomon Sans Normal",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "body.bold": {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: 100,
      letterSpacing: 0,
    },

    // Captions & Overline
    "caption": {
      fontFamily: "Solomon Sans Book",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "overline": {
      fontFamily: "Solomon Sans Normal",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 100,
      letterSpacing: 0,
    },

    // Buttons
    "button.large": {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 100,
      letterSpacing: 0,
    },
    "button.small": {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 100,
      letterSpacing: 0,
    },

    // Notes
    "notes": {
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontSize: 9,
      lineHeight: 9.5,
      letterSpacing: 0,
    },
  },
  spacing: {
    // Standard spacing scale
    "none": 0,
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32,

    // Padding values
    "pad.none": 0,
    "pad.xs": 4,
    "pad.sm": 8,
    "pad.md": 12,
    "pad.lg": 16,
    "pad.xl": 20,
    "pad.xxl": 24,
    "pad.xxxl": 32,

    // Component spacing
    "space.light": 4,
    "space.small": 8,
    "space.medium": 12,
    "space.large": 24,
    "space.extralarge": 32,
  },
  radius: {
    "xs": 4,
    "sm": 4,
    "md": 8,
    "lg": 16,
    "xl": 40,
  },
  shadows: {
    "default": "0px 9px 19px rgba(105, 105, 105, 0.15) with -7px spread",
    "card": "0px 9px 19px rgba(105, 105, 105, 0.15) with -7px spread",
  },
  opacity: {
    "disabled": 0.5,
  },
}

// Theme selector helper
export const getTheme = () => tokens

// Type exports for component props
export type ColorToken = keyof typeof tokens.colors.primitive | keyof typeof tokens.colors.semantic
export type TypographyToken = keyof typeof tokens.typography
export type SpacingToken = keyof typeof tokens.spacing
export type RadiusToken = keyof typeof tokens.radius
export type ShadowToken = keyof typeof tokens.shadows
