export const tokens = {
  colors: {
    // Primary colors
    primary: "#0041a3",
    primaryBlue: "#0041a3",
    primaryLight: "#42c0f0",
    primaryBlue200: "#b1cee2",
    
    // Neutral colors
    white: "#ffffff",
    whitePrimary: "#ffffff",
    black: "#000000",
    blackPrimary: "#000000",
    dark: "#263238",
    darkColor: "#263238",
    
    // Gray scale
    gray50: "#ffffff",
    gray100: "#f7f8fc",
    gray200: "#c4c7ce",
    gray300: "#c5c7cd",
    gray400: "#dfe0eb",
    gray500: "#607d8b",
    graySoft: "#c4c7ce",
    grayLight: "#c5c7cd",
    bgGray: "#f7f8fc",
    divider: "#dfe0eb",
    
    // Accent colors
    accent: "#3751ff",
    accentDefault: "#3751ff",
    blueDark: "#253a66",
    blueGrey500: "#607d8b",
    
    // Brand colors
    brandRed: "#ff0000",
    brandBlack: "#000000",
    brandWhite: "#ffffff",
    
    // Semantic colors
    success: "#00c851",
    success2: "#00c851",
    error: "#ff4444",
    error2: "#ff4444",
    
    // Additional colors
    orange: "#ff8800",
    yellow: "#ffeb3b",
    salmon: "#ff7f7f",
    durazno: "#ffb366",
    grey: "#808080",
    grey2: "#666666"
  },

  typography: {
    // IBM Plex Sans family
    body1: {
      fontFamily: "\"IBM Plex Sans\", sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.44px"
    },
    body2: {
      fontFamily: "\"IBM Plex Sans\", sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    
    // Solomon Sans family
    solomonBody1: {
      fontFamily: "\"Solomon Sans Black\", sans-serif",
      fontSize: "16px",
      fontWeight: 900,
      lineHeight: "24px",
      letterSpacing: "-0.2px"
    },
    
    // Size-based typography
    textXs: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px"
    },
    textSm: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px"
    },
    textBase: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px"
    },
    textLg: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px"
    },
    textXl: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px"
    },
    text2xl: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "36px"
    },
    text3xl: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "40px"
    }
  },

  spacing: {
    // Base spacing scale
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    
    // Specific padding values
    paddingNone: "0",
    paddingMd: "12px",
    paddingLg: "16px",
    paddingXl: "20px",
    paddingXxl: "24px",
    
    // Margin values
    marginXs: "4px",
    marginSm: "8px",
    marginMd: "16px",
    marginLg: "24px",
    marginXl: "32px"
  },

  radius: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px"
  },

  shadows: {
    none: "none",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
    component: "0 9px 19px rgba(0, 0, 0, 0.15)",
    componente: "0 9px 19px -7px rgba(0, 0, 0, 0.15)"
  },

  borders: {
    none: "none",
    sm: "1px solid",
    md: "2px solid",
    lg: "4px solid"
  },

  zIndex: {
    base: 0,
    overlay: 10,
    modal: 100,
    tooltip: 1000
  },

  components: {
    button: {
      variants: {
        size: {
          xs: { 
            padding: "6px 12px",
            fontSize: "12px",
            height: "28px"
          },
          sm: { 
            padding: "8px 16px",
            fontSize: "14px",
            height: "36px"
          },
          md: { 
            padding: "12px 20px",
            fontSize: "16px",
            height: "44px"
          },
          lg: { 
            padding: "16px 24px",
            fontSize: "18px",
            height: "52px"
          },
          xl: { 
            padding: "20px 32px",
            fontSize: "20px",
            height: "60px"
          }
        },
        variant: {
          primary: {
            backgroundColor: "#0041a3",
            color: "#ffffff",
            border: "none"
          },
          secondary: {
            backgroundColor: "transparent",
            color: "#0041a3",
            border: "1px solid #0041a3"
          },
          outline: {
            backgroundColor: "transparent",
            color: "#0041a3",
            border: "2px solid #0041a3"
          },
          ghost: {
            backgroundColor: "transparent",
            color: "#0041a3",
            border: "none"
          },
          link: {
            backgroundColor: "transparent",
            color: "#0041a3",
            border: "none",
            textDecoration: "underline"
          }
        },
        state: {
          default: {
            opacity: 1,
            transform: "none"
          },
          hover: {
            opacity: 0.9,
            transform: "translateY(-1px)"
          },
          active: {
            opacity: 0.8,
            transform: "translateY(0)"
          },
          disabled: {
            opacity: 0.5,
            cursor: "not-allowed"
          },
          loading: {
            opacity: 0.7,
            cursor: "wait"
          }
        }
      },
      defaultVariants: {
        size: "md",
        variant: "primary",
        state: "default"
      }
    },
    
    mobileButton: {
      variants: {
        size: {
          sm: { 
            padding: "8px 12px",
            fontSize: "14px",
            height: "40px"
          },
          md: { 
            padding: "12px 16px",
            fontSize: "16px",
            height: "48px"
          },
          lg: { 
            padding: "16px 20px",
            fontSize: "18px",
            height: "56px"
          }
        },
        variant: {
          primary: {
            backgroundColor: "#0041a3",
            color: "#ffffff"
          },
          secondary: {
            backgroundColor: "#f7f8fc",
            color: "#0041a3"
          },
          danger: {
            backgroundColor: "#ff4444",
            color: "#ffffff"
          }
        }
      },
      defaultVariants: {
        size: "md",
        variant: "primary"
      }
    },
    
    webButton: {
      variants: {
        size: {
          sm: { 
            padding: "8px 16px",
            fontSize: "14px"
          },
          md: { 
            padding: "12px 24px",
            fontSize: "16px"
          },
          lg: { 
            padding: "16px 32px",
            fontSize: "18px"
          }
        },
        variant: {
          filled: {
            backgroundColor: "#0041a3",
            color: "#ffffff"
          },
          outlined: {
            backgroundColor: "transparent",
            color: "#0041a3",
            border: "1px solid #0041a3"
          },
          text: {
            backgroundColor: "transparent",
            color: "#0041a3"
          }
        }
      },
      defaultVariants: {
        size: "md",
        variant: "filled"
      }
    },
    
    input: {
      variants: {
        size: {
          sm: { 
            padding: "8px 12px",
            fontSize: "14px",
            height: "36px"
          },
          md: { 
            padding: "12px 16px",
            fontSize: "16px",
            height: "44px"
          },
          lg: { 
            padding: "16px 20px",
            fontSize: "18px",
            height: "52px"
          }
        },
        state: {
          default: {
            border: "1px solid #dfe0eb",
            backgroundColor: "#ffffff"
          },
          focus: {
            border: "2px solid #0041a3",
            boxShadow: "0 0 0 3px rgba(0, 65, 163, 0.1)"
          },
          error: {
            border: "2px solid #ff4444",
            boxShadow: "0 0 0 3px rgba(255, 68, 68, 0.1)"
          },
          disabled: {
            border: "1px solid #e0e0e0",
            backgroundColor: "#f5f5f5",
            color: "#999999"
          }
        }
      },
      defaultVariants: {
        size: "md",
        state: "default"
      }
    },
    
    card: {
      variants: {
        variant: {
          default: {
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
          },
          elevated: {
            backgroundColor: "#ffffff",
            border: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
          },
          outlined: {
            backgroundColor: "transparent",
            border: "2px solid #0041a3",
            boxShadow: "none"
          }
        },
        size: {
          sm: { padding: "16px" },
          md: { padding: "24px" },
          lg: { padding: "32px" }
        }
      },
      defaultVariants: {
        variant: "default",
        size: "md"
      }
    }
  }
} as const;

export type Token = typeof tokens;
export type Colors = typeof tokens.colors;
export type Typography = typeof tokens.typography;
export type Spacing = typeof tokens.spacing;
export type Radius = typeof tokens.radius;
export type Shadows = typeof tokens.shadows;
export type Components = typeof tokens.components;
