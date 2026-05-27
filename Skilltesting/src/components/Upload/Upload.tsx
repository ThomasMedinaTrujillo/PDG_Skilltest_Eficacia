import * as React from "react";
import { cn } from "@/lib/cn";

export type UploadState = "default" | "hover" | "dragging" | "disabled";

export interface UploadFileItem {
  file: File;
  id: string;
}

export interface UploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onChange" | "title"> {
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  state?: UploadState;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  files?: UploadFileItem[];
  defaultFiles?: UploadFileItem[];
  onChange?: (files: UploadFileItem[]) => void;
  onDropFiles?: (files: File[]) => void;
  children?: React.ReactNode;
}

function toUploadItems(files: FileList | File[]) {
  return Array.from(files).map((file) => ({
    file,
    id: `${file.name}-${file.lastModified}-${file.size}`,
  }));
}

export const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      accept,
      className,
      disabled,
      multiple = true,
      state = "default",
      title = "Click or drag file to this area to upload",
      description = "Support for a single or bulk upload.",
      icon,
      files,
      defaultFiles = [],
      onChange,
      onDropFiles,
      children,
      ...props
    },
    ref,
  ) => {
    const inputId = React.useId();
    const [internalFiles, setInternalFiles] = React.useState(defaultFiles);
    const [isDragging, setIsDragging] = React.useState(false);
    const isControlled = files !== undefined;
    const currentFiles = isControlled ? files : internalFiles;
    const isDisabled = disabled || state === "disabled";
    const visualState = isDragging ? "dragging" : state;

    const commitFiles = (nextFiles: UploadFileItem[]) => {
      if (!isControlled) {
        setInternalFiles(nextFiles);
      }
      onChange?.(nextFiles);
    };

    const handleFiles = (selectedFiles: FileList | File[]) => {
      if (isDisabled) return;
      const nextFiles = toUploadItems(selectedFiles);
      commitFiles(multiple ? [...currentFiles, ...nextFiles] : nextFiles.slice(0, 1));
      onDropFiles?.(Array.from(selectedFiles));
    };

    return (
      <div
        ref={ref}
        className={cn(
          "ds-upload",
          `ds-upload--${visualState}`,
          isDisabled && "ds-upload--disabled",
          className,
        )}
        data-node-id="1010:2519"
        onDragEnter={(event) => {
          event.preventDefault();
          if (!isDisabled) setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          handleFiles(event.dataTransfer.files);
        }}
        {...props}
      >
        <input
          id={inputId}
          className="ds-upload__input"
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={isDisabled}
          onChange={(event) => {
            if (event.target.files) {
              handleFiles(event.target.files);
              event.target.value = "";
            }
          }}
        />
        <label className="ds-upload__label" htmlFor={inputId}>
          <span className="ds-upload__icon" aria-hidden="true">
            {icon ?? <span className="ds-upload__icon-mark" />}
          </span>
          <span className="ds-upload__copy">
            <span className="ds-upload__title">{title}</span>
            <span className="ds-upload__description">{description}</span>
          </span>
          {children}
        </label>
      </div>
    );
  },
);

Upload.displayName = "Upload";
