import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const UPLOAD_ICON = "http://localhost:3845/assets/d1ffd84be953298e8565c413d41a5bdc590ac861.svg";
const IMAGE_ICON = "http://localhost:3845/assets/82bb6c411511219d2b6945a82edf82a59875862c.svg";
const IMAGE_ICON_2 = "http://localhost:3845/assets/8660252ee7f63eb45154854e75adb458b5891db0.svg";

type FileUploadState = "default" | "loaded";

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: FileUploadState;
  defaultState?: FileUploadState;
  fileName?: string;
  onStateChange?: (state: FileUploadState) => void;
  onFileChange?: (file: File | null) => void;
}

export const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      className,
      state,
      defaultState = "default",
      fileName = "Venta-023.png",
      onStateChange,
      onFileChange,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [internalState, setInternalState] = React.useState<FileUploadState>(defaultState);
    const isControlled = state !== undefined;
    const currentState = isControlled ? state : internalState;

    const setState = React.useCallback(
      (next: FileUploadState) => {
        if (!isControlled) {
          setInternalState(next);
        }
        onStateChange?.(next);
      },
      [isControlled, onStateChange]
    );

    const handlePickFile = () => {
      inputRef.current?.click();
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextFile = event.target.files?.[0] ?? null;
      onFileChange?.(nextFile);
      setState(nextFile ? "loaded" : "default");
    };

    return (
      <div
        ref={ref}
        className={cn("ds-file-upload", `ds-file-upload--${currentState}`, className)}
        style={{ width: "342px", display: "flex", flexDirection: "column" }}
        {...props}
      >
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          aria-hidden
          tabIndex={-1}
        />

        <button
          type="button"
          onClick={currentState === "default" ? handlePickFile : undefined}
          className={cn("ds-file-upload__surface")}
          style={{
            width: "100%",
            background: tokens.colors.backgroundPrimary,
            borderRadius: tokens.radius.sm,
            border: "none",
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: currentState === "default" ? "pointer" : "default",
          }}
        >
          <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", gap: "6px", textAlign: "left" }}>
            <span
              style={{
                margin: 0,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.caption.fontSize,
                fontWeight: tokens.typography.body.fontWeight,
                lineHeight: 1,
                color: tokens.colors.darkGrey,
              }}
            >
              {currentState === "loaded" ? "Archivo cargado" : "Cargar archivo"}
            </span>

            {currentState === "default" ? (
              <span
                style={{
                  margin: 0,
                  fontFamily: tokens.typography.body.fontFamily,
                  fontSize: tokens.typography.body.fontSize,
                  fontWeight: 600,
                  lineHeight: 1,
                  color: tokens.colors.darkGrey,
                }}
              >
                Adjuntar desde archivo
              </span>
            ) : (
              <span style={{ display: "inline-flex", alignItems: "center", gap: tokens.spacing.xs }}>
                <span style={{ width: "18px", height: "18px", position: "relative", display: "inline-block", flexShrink: 0 }}>
                  <img src={IMAGE_ICON} alt="" aria-hidden style={{ width: "18px", height: "18px", position: "absolute", inset: 0 }} />
                  <img src={IMAGE_ICON_2} alt="" aria-hidden style={{ width: "18px", height: "18px", position: "absolute", inset: 0 }} />
                </span>
                <span
                  style={{
                    margin: 0,
                    fontFamily: tokens.typography.body.fontFamily,
                    fontSize: tokens.typography.body.fontSize,
                    fontWeight: 600,
                    lineHeight: 1,
                    color: tokens.colors.primary,
                  }}
                >
                  {fileName}
                </span>
              </span>
            )}
          </div>

          {currentState === "default" ? (
            <img src={UPLOAD_ICON} alt="" aria-hidden style={{ width: "38px", height: "38px", objectFit: "contain", flexShrink: 0 }} />
          ) : (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setState("default");
                onFileChange?.(null);
              }}
              className={cn("ds-file-upload__close")}
              style={{
                width: "24px",
                height: "24px",
                border: "none",
                background: "transparent",
                color: tokens.colors.primary,
                fontSize: "24px",
                lineHeight: 1,
                padding: 0,
                cursor: "pointer",
                flexShrink: 0,
              }}
              aria-label="Quitar archivo"
            >
              x
            </button>
          )}
        </button>
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";
