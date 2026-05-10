export const tokens = {
  colors: {
    headersTitles: "#0041a3",
    captions: "#a9adb0",
    subtitleTextBody: "#70777b",
    disableText: "#70777b",
    primaryBlue: "#0041a3",
    nsBlueInputPlaceholder: "#99b3da",
    nsWhite: "#ffffff",
    primaryWhiteBackground: "#f4f7f9",
    eb700: "#002A68",
    darkBlue300: "#0041a3",
    backgroungButton: "#0041a3",
    warningError: "#ca4949",
    neutral300: "#cccccc",
    errorColor: "#eb5757",
    pending: "#ffcd00",
    success: "#3bd4ae",
    neutral50: "#ffffff",
    ns100: "#e6e8ea",
    neutral500: "#b8b8b8",
    colorTitleCards: "#0041a3",
    secondaryBackground: "#ffffff",
    colorCaption: "#737373",
    primaryGrayText: "#696969",
    nsGrayIcons: "#70777B",
    neutral700: "#737373",
    shGrayDisabledButton: "#aeb0b1",
    sb100: "#ffffff",
    ns400: "#70777b",
    darkGrey: "#696969",
    nsWhiteIconsOnBlueBackground: "#FFFFFF",
    grisOscuro: "#70777B",
    bgBtnContainedErrorHover: "#f46060",
    bgBtnOutlinePressed: "#99b3da4d",
    selectedButton: "#002a68",
    bgOutlineBtnErrorPressed: "#ca494933",
    bgContentBtnPressed: "#a23a3a",
    primaryBackground: "#f4f7f9",
    eb200: "#C2D1E9",
    shRedWarning: "#ca4949"
  },

  typography: {
    overline: {
      fontFamily: "Solomon Sans Normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    body: {
      fontFamily: "Solomon Sans Normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    buttonSmall: {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    caption: {
      fontFamily: "Solomon Sans Book",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    buttonMedium: {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    bodySmall: {
      fontFamily: "Solomon Sans Normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    subtitle: {
      fontFamily: "Solomon Sans SemiBold",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    heading3: {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    bodyBold: {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    heading4: {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    display: {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "100%",
      letterSpacing: "0px"
    },
    graphikNotes: {
      fontFamily: "Nunito Sans",
      fontWeight: 400,
      fontSize: "9px",
      lineHeight: "9.5px",
      letterSpacing: "0px"
    },
    heading1: {
      fontFamily: "Solomon Sans Bold",
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "100%",
      letterSpacing: "0px"
    }
  },

  spacing: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    spacingXs: "4px",
    spacingSm: "8px",
    spacingMd: "16px",
    spacingLg: "24px",
    spacingXl: "32px",
    spacingLight: "4px",
    spacingMedium: "12px",
    spacingMinimum: "4px",
    spacingSmall: "8px",
    spacingLarge: "24px",
    spacingExtralarge: "32px",
    paddingNone: "0px",
    paddingXs: "4px",
    paddingSm: "8px",
    paddingMd: "12px",
    paddingLg: "16px",
    paddingXl: "20px",
    paddingXxl: "24px",
    paddingXxxl: "32px"
  },

  radius: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "40px",
    smallCorner: "4px",
    mediumCorner: "8px"
  },

  shadows: {
    card: "0 9px 19px -7px rgba(105,105,105,0.15)",
    default: "0 9px 19px -7px rgba(105,105,105,0.15)"
  },

  components: {
    alertsState: {
      variants: {
        style: { default: {}, succes: {}, pending: {}, warning: {} }
      },
      defaultVariants: {
        style: "default"
      }
    },
    avatarGroupMobile: {
      variants: {
        size: { "40px": {}, "32px": {}, "24px": {} },
        counter: { "2": {}, "3": {}, "4": {}, "5": {} },
        spacing: { small: {}, medium: {} }
      },
      defaultVariants: {
        size: "40px",
        counter: "2",
        spacing: "small"
      }
    },
    avatarMobile: {
      variants: {
        size: { "40px": {}, "32px": {}, "24px": {}, "18px": {}, "92px": {} },
        content: { image: {}, text: {} }
      },
      defaultVariants: {
        size: "40px",
        content: "image"
      }
    },
    calendarDropdown: {
      variants: {
        state: { opened: {}, closed: {} }
      },
      defaultVariants: {
        state: "closed"
      }
    },
    cardCheck: {
      variants: {
        state: { enabled: {}, disabled: {}, prueba: {} }
      },
      defaultVariants: {
        state: "enabled"
      }
    },
    categoryCard: {
      variants: {
        state: { complete: {}, incomplete: {}, prueba: {} }
      },
      defaultVariants: {
        state: "complete"
      }
    },
    charts: {
      variants: {
        percent: { "10": {}, "20": {}, "30": {}, "40": {}, "50": {}, "60": {}, percent7: {}, percent8: {}, percent9: {} }
      },
      defaultVariants: {
        percent: "10"
      }
    },
    checkBox: {
      variants: {
        state: { default: {}, checked: {} }
      },
      defaultVariants: {
        state: "default"
      }
    },
    checkBoxStatus: {
      variants: {
        status: { add: {}, remove: {} }
      },
      defaultVariants: {
        status: "add"
      }
    },
    contenidoDeTabla: {
      variants: {
        estilo: { checkBox: {}, radioButton: {} }
      },
      defaultVariants: {
        estilo: "checkBox"
      }
    },
    dropdownCard: {
      variants: {
        state: { cardOpen: {}, cardClose: {} }
      },
      defaultVariants: {
        state: "cardClose"
      }
    },
    fileUpload: {
      variants: {
        type: { default: {}, loaded: {} }
      },
      defaultVariants: {
        type: "default"
      }
    },
    infoCard: {
      variants: {
        type: { default: {}, withImage: {} }
      },
      defaultVariants: {
        type: "default"
      }
    },
    input: {
      variants: {
        state: { enable: {}, selected: {}, error: {} },
        type: { textField: {}, multiline: {} }
      },
      defaultVariants: {
        state: "enable",
        type: "textField"
      }
    },
    inputCheck: {
      variants: {
        state: { round: {}, check: {} }
      },
      defaultVariants: {
        state: "round"
      }
    },
    itemBottomNav: {
      variants: {
        state: { enable: {}, pressed: {} }
      },
      defaultVariants: {
        state: "enable"
      }
    },
    mapCard: {
      variants: {
        type: { disable: {}, active: {} }
      },
      defaultVariants: {
        type: "disable"
      }
    },
    menuBar: {
      variants: {
        items: { "5": {}, "4": {}, "3": {} }
      },
      defaultVariants: {
        items: "5"
      }
    },
    mobileButtons: {
      variants: {
        size: { small: {}, medium: {} },
        color: { primary: {}, error: {} },
        state: { active: {}, disable: {}, pressed: {} },
        style: { contained: {}, outline: {}, text: {} },
        orientation: { center: {}, left: {} }
      },
      defaultVariants: {
        size: "medium",
        color: "primary",
        state: "active",
        style: "contained",
        orientation: "center"
      }
    },
    opcionesDeTabla: {
      variants: {
        tipo: { horizontales: {}, verticales: {} }
      },
      defaultVariants: {
        tipo: "horizontales"
      }
    },
    principalMenu: {
      variants: {
        property1: { floating: {}, header: {} }
      },
      defaultVariants: {
        property1: "header"
      }
    },
    productCards: {
      variants: {
        type: { littleCard: {}, floating: {}, product: {}, priceCard: {}, type5: {}, type6: {} }
      },
      defaultVariants: {
        type: "product"
      }
    },
    progressBar: {
      variants: {
        status: { green: {}, yellow: {}, red: {} }
      },
      defaultVariants: {
        status: "green"
      }
    },
    questionButton: {
      variants: {
        active: { true: {}, false: {} }
      },
      defaultVariants: {
        active: "true"
      }
    },
    radioButtons: {
      variants: {
        state: { enabled: {}, pressed: {} }
      },
      defaultVariants: {
        state: "enabled"
      }
    },
    tab: {
      variants: {
        property1: { firstSelector3Tabs: {}, secondSelector3Tabs: {}, thirdSelector3Tabs: {}, firstSelector2Tabs: {}, secondSelector2Tabs: {} }
      },
      defaultVariants: {
        property1: "firstSelector3Tabs"
      }
    },
    toggle: {
      variants: {
        state: { off: {}, on: {} }
      },
      defaultVariants: {
        state: "off"
      }
    },
    timeSet: {
      variants: {
        state: { disable: {}, timeOut: {}, timeStart: {} }
      },
      defaultVariants: {
        state: "disable"
      }
    },
    counterCard: {
      variants: {
        type: { unidad1: {}, unidad13: {}, unidad4: {}, price: {} }
      },
      defaultVariants: {
        type: "unidad1"
      }
    },
    dropdown: {
      variants: {
        state: { dropdownError: {}, dropdown: {}, dropdownOpen: {} }
      },
      defaultVariants: {
        state: "dropdown"
      }
    },
    slider: {
      variants: {
        scale: { "0": {}, "1": {}, "2": {}, "3": {}, "4": {}, "5": {} }
      },
      defaultVariants: {
        scale: "0"
      }
    },
    numberSlider: {
      variants: {
        property1: { firtsNumberSelected: {}, secondNumberSelected: {}, thirdNumberSelected: {}, fourtNumberSelected: {}, fiveNumberSelected: {}, desable: {} }
      },
      defaultVariants: {
        property1: "firtsNumberSelected"
      }
    }
  }
} as const;
