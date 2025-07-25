export interface PillProps {
    title: string;
    styles: string;
}

export interface ButtonProps {
    title: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
    className?: string;
    styles?: string;
}