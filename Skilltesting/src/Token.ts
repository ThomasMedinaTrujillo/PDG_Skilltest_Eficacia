export const tokens = {
  colors: {
    primary: "#0041a3",
    backgroundPrimary: "#f4f7f9",
    backgroundSecondary: "#ffffff",
    textPrimary: "#595959",
    textSecondary: "#70777b",
    textCaption: "#737373",
    textDisabled: "#70777b",
    iconGray: "#70777b",
    white: "#ffffff",
    neutral50: "#ffffff",
    neutral300: "#cccccc",
    neutral500: "#b8b8b8",
    neutral700: "#737373",
    disabled: "#aeb0b1",
    warning: "#ca4949",
    pending: "#ffcd00",
    success: "#3bd4ae",
    buttonDisabled: "#a9adb0",
    buttonBackground: "#0041a3",
    graySoft: "#C4C7CE",
    darkGrey: "#696969",
    grisOscuro: "#70777B",
    blueScaleEb700: "#002A68",
    darkBlue300: "#0041a3",
    ns100: "#e6e8ea",
    ns400: "#70777b",
    sb100: "#ffffff",
    errorColor: "#eb5757",
    nsWhite: "#ffffff",
    nsGray: "#70777B",
    shGrayDisabledButton: "#A9ADB0",
    colorText: "#595959",
    colorTitleCards: "#0041a3",
    nsGrayIcons: "#70777B",
    nsWhiteIconsOnBlue: "#FFFFFF",
    buttonBgErrorHover: "#f46060",
    buttonBgOutlinePressed: "#99b3da4d",
    buttonSelected: "#002a68",
    buttonBgOutlineErrorPressed: "#ca494933",
    buttonBgContentPressed: "#a23a3a"
  },

  typography: {
    caption: {
      fontFamily: "Solomon Sans Book",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "100",
      letterSpacing: "0"
    },
    body: {
      fontFamily: "Solomon Sans Normal",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "100",
      letterSpacing: "0"
    },
    heading1: {
      fontFamily: "Solomon Sans Bold",
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "100",
      letterSpacing: "0"
    }
  },

  spacing: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  },

  radius: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    xl: "40px"
  },

  shadows: {
    card: "0 9px 19px -7px rgba(105,105,105,0.15)"
  },

  components: {
    alertsState: {
      variants: {
        style: {
          default: {
            backgroundColor: "#ffffff",
            color: "#737373",
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0 9px 19px -7px rgba(105,105,105,0.15)"
          },
          succes: {
            backgroundColor: "#3bd4ae",
            color: "#ffffff",
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0 9px 19px -7px rgba(105,105,105,0.15)"
          },
          pending: {
            backgroundColor: "#ffcd00",
            color: "#ffffff",
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0 9px 19px -7px rgba(105,105,105,0.15)"
          },
          warning: {
            backgroundColor: "#ca4949",
            color: "#ffffff",
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0 9px 19px -7px rgba(105,105,105,0.15)"
          }
        }
      },
      defaultVariants: {
        style: "default"
      }
    },
    checkBox: {
      variants: {
        state: {
          default: {
            borderColor: "#70777b",
            borderRadius: "4px",
            width: "18px",
            height: "18px"
          },
          checked: {
            backgroundColor: "#0041a3",
            width: "24px",
            height: "24px"
          }
        }
      },
      defaultVariants: {
        state: "default"
      }
    }
  }
} as const;