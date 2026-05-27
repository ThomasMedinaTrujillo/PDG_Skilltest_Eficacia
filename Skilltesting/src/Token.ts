export const tokens = {
  colors: {
    magenta6: "#eb2f96",
    magenta7: "#c41d7f",
    red6: "#f5222d",
    red7: "#cf1322",
    cyan6: "#13c2c2",
    cyan7: "#08979c",
    green6: "#52c41a",
    green7: "#389e0d",
    purple6: "#722ed1",
    purple7: "#531dab",
    volcano6: "#fa541c",
    volcano7: "#d4380d",
    primary: "#1677ff",
    primaryHover: "#4096ff",
    primaryActive: "#0958d9",
    success: "#52c41a",
    warning: "#faad14",
    error: "#ff4d4f",
    errorHover: "#ff7875",
    errorActive: "#d9363e",
    errorBorderHover: "#ffa39e",
    warningBorderHover: "#ffd666",
    info: "#1677ff",
    text: "#000000e0",
    textDescription: "#00000073",
    textPlaceholder: "#00000040",
    textDisabled: "#00000040",
    textLightSolid: "#ffffff",
    bgContainer: "#ffffff",
    bgContainerDisabled: "#0000000a",
    border: "#d9d9d9",
    controlOutline: "#0591ff1a",
    errorOutline: "#ff26060f",
    warningOutline: "#ffd7051a",
  },

  typography: {
    baseNormal: {
      fontFamily: `SF Pro Text`,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    smNormal: {
      fontFamily: `SF Pro Text`,
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
    },
    baseStrong: {
      fontFamily: `SF Pro Text`,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "22px",
    },
    heading3: {
      fontFamily: `"SF Pro Text"`,
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "32px",
    },
    lgNormal: {
      fontFamily: `"SF Pro Text"`,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
  },

  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    lg: "24px",
    xl: "32px",
  },

  radius: {
    sm: "4px",
    md: "6px",
    lg: "8px",
  },

  shadows: {
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.05), 0 1px 6px -1px rgba(0,0,0,0.05), 0 1px 2px 0 rgba(0,0,0,0.08)",
    boxShadowSecondary: "0 9px 28px 8px rgba(0,0,0,0.05), 0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08)",
    focusPrimary: "0 0 0 2px rgba(23,120,255,0.15)",
    activeShadow: "0 0 0 2px rgba(5,145,255,0.1)",
    errorActiveShadow: "0 0 0 2px rgba(255,38,6,0.06)",
    warningActiveShadow: "0 0 0 2px rgba(255,215,5,0.1)",
  },

  components: {
    button: {
      variants: {
        type: {
          primary: {},
          default: {},
          dashed: {},
          text: {},
          link: {},
        },
        size: {
          default: { height: "32px", padding: "0 15px" },
          small: { height: "24px", padding: "0 7px" },
          large: { height: "40px", padding: "0 15px" },
        },
        state: {
          default: {},
          hover: {},
          focused: {},
          pressed: {},
          disabled: {},
        },
        ghost: {
          true: {},
          false: {},
        },
        danger: {
          true: {},
          false: {},
        },
      },
      defaultVariants: {
        type: "default",
        size: "default",
        state: "default",
        ghost: "false",
        danger: "false",
      },
    },
    input: {
      variants: {
        status: {
          default: {},
          success: {},
          warning: {},
          error: {},
        },
        size: {
          default: { height: "32px", padding: "4px 11px" },
          small: { height: "24px", padding: "0 7px" },
          large: { height: "40px", padding: "7px 11px" },
        },
        state: {
          default: {},
          hover: {},
          focused: {},
          typing: {},
          filled: {},
          disabled: {},
        },
      },
      defaultVariants: {
        status: "default",
        size: "default",
        state: "default",
      },
    },
    checkbox: {
      variants: {
        status: {
          active: {},
          inactive: {},
          indeterminate: {},
        },
        state: {
          default: {},
          hover: {},
          focused: {},
          disabled: {},
        },
      },
      defaultVariants: {
        status: "inactive",
        state: "default",
      },
    },
    switch: {
      variants: {
        size: {
          default: { height: "22px", minWidth: "44px" },
          small: { height: "16px", minWidth: "28px" },
        },
        state: {
          default: {},
          pressed: {},
          loading: {},
          disabled: {},
        },
        active: {
          true: {},
          false: {},
        },
        type: {
          basic: {},
          icon: {},
          number: {},
        },
      },
      defaultVariants: {
        size: "default",
        state: "default",
        active: "false",
        type: "basic",
      },
    },
    badge: {
      variants: {
        type: {
          dot: {},
          default: {},
          small: {},
        },
        status: {
          success: {},
          error: {},
          default: {},
          processing: {},
          warning: {},
        },
      },
      defaultVariants: {
        type: "default",
        status: "default",
      },
    },
    popover: {
      variants: {
        placement: {
          top: {},
          topLeft: {},
          topRight: {},
          bottom: {},
          bottomLeft: {},
          bottomRight: {},
          left: {},
          leftTop: {},
          leftBottom: {},
          right: {},
          rightTop: {},
          rightBottom: {},
        },
      },
      defaultVariants: {
        placement: "top",
      },
    },
    message: {
      variants: {
        type: {
          normal: {},
          warning: {},
          success: {},
          error: {},
          loading: {},
        },
      },
      defaultVariants: {
        type: "normal",
      },
    },
    statistic: {
      variants: {
        type: {
          basic: {},
          up: {},
          down: {},
        },
      },
      defaultVariants: {
        type: "basic",
      },
    },
    upload: {
      variants: {
        state: {
          default: {},
          hover: {},
          dragging: {},
          disabled: {},
        },
        multiple: {
          true: {},
          false: {},
        },
      },
      defaultVariants: {
        state: "default",
        multiple: "true",
      },
    },
    menu: {
      variants: {
        theme: {
          light: {},
        },
        mode: {
          inline: {},
        },
        collapsed: {
          true: { width: "56px" },
          false: { width: "280px" },
        },
      },
      defaultVariants: {
        theme: "light",
        mode: "inline",
        collapsed: "false",
      },
    },
    steps: {
      variants: {
        type: {
          basic: {},
        },
        size: {
          small: { iconSize: "24px", contentWidth: "360px" },
        },
        direction: {
          vertical: {},
        },
        status: {
          finish: {},
          process: {},
          wait: {},
        },
      },
      defaultVariants: {
        type: "basic",
        size: "small",
        direction: "vertical",
        status: "process",
      },
    },
  },
} as const;
