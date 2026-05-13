export const tokens = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
  },

  colors: {
    // Neutral Colors
    neutralBbvaBlack100: "#fefefe",
    neutralBbvaBlack200: "#f4f4f4",
    neutralBbvaBlack300: "#e9e9e9",
    neutralBbvaBlack400: "#d4d3d3",
    neutralBbvaBlack500: "#bebebe",
    neutralBbvaBlack600: "#666666",
    neutralBbvaBlack700: "#090909",

    // Brand Colors - Primary
    brandPrimaryCoreBlue500: "#001b45",
    brandPrimaryCoreBlue400: "#002e64",
    brandPrimaryCoreBlue300: "#004284",
    brandPrimaryCoreBlue200: "#0063a8",

    // Brand Colors - Secondary Sky Blue
    brandSecondrarySkyBlue400: "#00a6e9",
    brandSecondrarySkyBlue300: "#5bbeff",
    brandSecondrarySkyBlue200: "#caedfc",

    // Brand Colors - Secondary Aquamarine
    brandSecondaryAquamarine400: "#00a6a6",
    brandSecondaryAquamarine300: "#00c5c5",
    brandSecondaryAquamarine200: "#00d9da",

    // Brand Colors - Semantic
    brandSemanticAlertsSuccess: "#28793e",
    brandSemanticAlertsSucessLight: "#d9f0e0",
    brandSemanticAlertsError: "#c02746",
    brandSemanticAlertsErrorLight: "#fcdfe1",
    brandSemanticWarningsYellowLight: "#fff4de",

    // Extended Colors
    extendedCreamYellow: "#f9cd52",
    extendedOrange: "#f7893a",

    // Semantic Icon
    icon: "#1C274D",
  },

  typography: {
    title1Book: {
      family: "Benton Sans BBVA",
      size: "22px",
      weight: 350,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    title3Medium: {
      family: "Benton Sans BBVA",
      size: "18px",
      weight: 500,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    subtitle1: {
      family: "Benton Sans BBVA",
      size: "16px",
      weight: 350,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    subtitle1Medium: {
      family: "Benton Sans BBVA",
      size: "16px",
      weight: 500,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    body: {
      family: "Benton Sans BBVA",
      size: "15px",
      weight: 350,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    bodyMedium: {
      family: "Benton Sans BBVA",
      size: "15px",
      weight: 500,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    captions: {
      family: "Benton Sans BBVA",
      size: "12px",
      weight: 350,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    captionsMedium: {
      family: "Benton Sans BBVA",
      size: "12px",
      weight: 500,
      lineHeight: "100%",
      letterSpacing: 0,
    },
    labelsMedium: {
      family: "Benton Sans BBVA",
      size: "11px",
      weight: 500,
      lineHeight: "100%",
      letterSpacing: 0,
    },
  },

  radius: {
    sm: "5px",
    md: "10px",
    rounded: "25px",
  },

  strokeWeight: {
    thin: "0.5px",
    regular: "1px",
    bold: "2px",
  },

  shadows: {
    light: "0 1px 3px rgba(215, 215, 215, 0.4)",
    medium: "0 2px 5px rgba(190, 190, 190, 0.65)",
  },

  components: {
    button: {
      variants: {
        size: {
          small: { padding: "12px 16px", height: "51px" },
          medium: { padding: "16px 20px", height: "51px" },
          large: { padding: "20px 24px", height: "51px" },
        },
        state: {
          default: { opacity: 1 },
          pressed: { opacity: 0.8 },
          disabled: { opacity: 0.5 },
        },
      },
      defaultVariants: {
        size: "medium",
        state: "default",
      },
    },

    atmWithdrawalButtons: {
      variants: {
        state: {
          default: {},
          pressed: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    barState: {
      variants: {
        state: {
          selected: {},
          inactive: {},
        },
      },
      defaultVariants: {
        state: "inactive",
      },
    },

    circularChartCount: {
      variants: {
        itemCount: {
          "2": {},
          "3": {},
          "4": {},
          "5": {},
        },
      },
      defaultVariants: {
        itemCount: "5",
      },
    },

    dates: {
      variants: {
        state: {
          default: {},
          active: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    modalListItem: {
      variants: {
        state: {
          default: {},
          pressed: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    radioButton: {
      variants: {
        state: {
          default: {},
          pressed: {},
          disabled: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    tabItem: {
      variants: {
        state: {
          selected: {},
          disabled: {},
        },
        size: {
          small: { width: "130px", height: "55px" },
          large: { width: "195px", height: "55px" },
        },
      },
      defaultVariants: {
        state: "disabled",
        size: "small",
      },
    },

    toogleTabItem: {
      variants: {
        state: {
          inactive: {},
          hovered: {},
          selected: {},
        },
      },
      defaultVariants: {
        state: "inactive",
      },
    },

    alternativeButton: {
      variants: {
        state: {
          default: {},
          pressed: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    checkboxItem: {
      variants: {
        state: {
          unselected: {},
          selected: {},
        },
      },
      defaultVariants: {
        state: "unselected",
      },
    },

    dropdown: {
      variants: {
        state: {
          default: {},
          disabled: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    input: {
      variants: {
        status: {
          unfilled: {},
          filled: {},
          success: {},
          error: {},
        },
        type: {
          text: {},
          typing: {},
          hide: {},
        },
      },
      defaultVariants: {
        status: "unfilled",
        type: "text",
      },
    },

    navigationItem: {
      variants: {
        state: {
          default: {},
          selected: {},
        },
      },
      defaultVariants: {
        state: "default",
      },
    },

    passiveAlerts: {
      variants: {
        state: {
          neutral: {},
          information: {},
          warning: {},
        },
      },
      defaultVariants: {
        state: "neutral",
      },
    },

    contactCard: {
      variants: {
        layout: {
          column: {},
          row: {},
        },
      },
      defaultVariants: {
        layout: "column",
      },
    },
  },
} as const
